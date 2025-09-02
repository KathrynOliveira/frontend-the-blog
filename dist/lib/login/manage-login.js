"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
exports.createLoginSession = createLoginSession;
exports.deleteLoginSession = deleteLoginSession;
exports.getLoginSession = getLoginSession;
exports.verifyLoginSession = verifyLoginSession;
exports.requireLoginSessionOrRedirect = requireLoginSessionOrRedirect;
exports.signJwt = signJwt;
exports.verifyJwt = verifyJwt;
const bcryptjs_1 = require("bcryptjs");
const headers_1 = require("next/headers");
const jose_1 = require("jose");
const navigation_1 = require("next/navigation");
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodedKey = new TextEncoder().encode(jwtSecretKey);
const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || "1d";
const loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";
async function hashPassword(password) {
    const hash = await bcryptjs_1.default.hash(password, 10);
    const base64 = Buffer.from(hash).toString("base64");
    return base64;
}
async function verifyPassword(password, base64Hash) {
    const hash = Buffer.from(base64Hash, "base64").toString("utf-8");
    return bcryptjs_1.default.compare(password, hash);
}
async function createLoginSession(username) {
    const expiresAt = new Date(Date.now() + loginExpSeconds * 1000);
    const loginSession = await signJwt({ username, expiresAt });
    const cookieStore = await (0, headers_1.cookies)();
    cookieStore.set(loginCookieName, loginSession, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: expiresAt,
    });
}
async function deleteLoginSession() {
    const cookieStore = await (0, headers_1.cookies)();
    cookieStore.set(loginCookieName, "", { expires: new Date(0) });
    cookieStore.delete(loginCookieName);
}
async function getLoginSession() {
    var _a;
    const cookieStore = await (0, headers_1.cookies)();
    const jwt = (_a = cookieStore.get(loginCookieName)) === null || _a === void 0 ? void 0 : _a.value;
    if (!jwt)
        return false;
    return verifyJwt(jwt);
}
async function verifyLoginSession() {
    const jwtPayload = await getLoginSession();
    if (!jwtPayload)
        return false;
    return (jwtPayload === null || jwtPayload === void 0 ? void 0 : jwtPayload.username) === process.env.LOGIN_USER;
}
async function requireLoginSessionOrRedirect() {
    const isAuthenticated = await verifyLoginSession();
    if (!isAuthenticated) {
        (0, navigation_1.redirect)("/admin/login");
    }
}
async function signJwt(jwtPayload) {
    return new jose_1.SignJWT(jwtPayload)
        .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
    })
        .setIssuedAt()
        .setExpirationTime(loginExpStr)
        .sign(jwtEncodedKey);
}
async function verifyJwt(jwt = "") {
    try {
        const { payload } = await (0, jose_1.jwtVerify)(jwt, jwtEncodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    }
    catch (_a) {
        console.log("Invalid Token");
        return false;
    }
}
