"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manage_login_1 = require("../lib/login/manage-login");
(async () => {
    const minhaSenha = "123456"; // NÃO ESQUECER DE APAGAR SUA SENHA DAQUI
    const hashDaSuaSenhaEmBase64 = await (0, manage_login_1.hashPassword)(minhaSenha);
    console.log({ hashDaSuaSenhaEmBase64 });
})();
