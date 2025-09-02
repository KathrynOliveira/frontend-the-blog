"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var bcryptjs_1 = require("bcryptjs");
var headers_1 = require("next/headers");
var jose_1 = require("jose");
var navigation_1 = require("next/navigation");
var jwtSecretKey = process.env.JWT_SECRET_KEY;
var jwtEncodedKey = new TextEncoder().encode(jwtSecretKey);
var loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
var loginExpStr = process.env.LOGIN_EXPIRATION_STRING || "1d";
var loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function () {
        var hash, base64;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
                case 1:
                    hash = _a.sent();
                    base64 = Buffer.from(hash).toString("base64");
                    return [2 /*return*/, base64];
            }
        });
    });
}
function verifyPassword(password, base64Hash) {
    return __awaiter(this, void 0, void 0, function () {
        var hash;
        return __generator(this, function (_a) {
            hash = Buffer.from(base64Hash, "base64").toString("utf-8");
            return [2 /*return*/, bcryptjs_1.default.compare(password, hash)];
        });
    });
}
function createLoginSession(username) {
    return __awaiter(this, void 0, void 0, function () {
        var expiresAt, loginSession, cookieStore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expiresAt = new Date(Date.now() + loginExpSeconds * 1000);
                    return [4 /*yield*/, signJwt({ username: username, expiresAt: expiresAt })];
                case 1:
                    loginSession = _a.sent();
                    return [4 /*yield*/, (0, headers_1.cookies)()];
                case 2:
                    cookieStore = _a.sent();
                    cookieStore.set(loginCookieName, loginSession, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "strict",
                        expires: expiresAt,
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function deleteLoginSession() {
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, headers_1.cookies)()];
                case 1:
                    cookieStore = _a.sent();
                    cookieStore.set(loginCookieName, "", { expires: new Date(0) });
                    cookieStore.delete(loginCookieName);
                    return [2 /*return*/];
            }
        });
    });
}
function getLoginSession() {
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore, jwt;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, headers_1.cookies)()];
                case 1:
                    cookieStore = _b.sent();
                    jwt = (_a = cookieStore.get(loginCookieName)) === null || _a === void 0 ? void 0 : _a.value;
                    if (!jwt)
                        return [2 /*return*/, false];
                    return [2 /*return*/, verifyJwt(jwt)];
            }
        });
    });
}
function verifyLoginSession() {
    return __awaiter(this, void 0, void 0, function () {
        var jwtPayload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLoginSession()];
                case 1:
                    jwtPayload = _a.sent();
                    if (!jwtPayload)
                        return [2 /*return*/, false];
                    return [2 /*return*/, (jwtPayload === null || jwtPayload === void 0 ? void 0 : jwtPayload.username) === process.env.LOGIN_USER];
            }
        });
    });
}
function requireLoginSessionOrRedirect() {
    return __awaiter(this, void 0, void 0, function () {
        var isAuthenticated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, verifyLoginSession()];
                case 1:
                    isAuthenticated = _a.sent();
                    if (!isAuthenticated) {
                        (0, navigation_1.redirect)("/admin/login");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function signJwt(jwtPayload) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new jose_1.SignJWT(jwtPayload)
                    .setProtectedHeader({
                    alg: "HS256",
                    typ: "JWT",
                })
                    .setIssuedAt()
                    .setExpirationTime(loginExpStr)
                    .sign(jwtEncodedKey)];
        });
    });
}
function verifyJwt() {
    return __awaiter(this, arguments, void 0, function (jwt) {
        var payload, _a;
        if (jwt === void 0) { jwt = ""; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, jose_1.jwtVerify)(jwt, jwtEncodedKey, {
                            algorithms: ["HS256"],
                        })];
                case 1:
                    payload = (_b.sent()).payload;
                    return [2 /*return*/, payload];
                case 2:
                    _a = _b.sent();
                    console.log("Invalid Token");
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
