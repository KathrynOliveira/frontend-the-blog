import { hashPassword } from "../lib/login/manage-login.js";

const minhaSenha = process.argv[2];
if (!minhaSenha) {
  console.error("Digite a senha como argumento!");
  process.exit(1);
}

const hash = await hashPassword(minhaSenha);
console.log(hash);
