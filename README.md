# Blog

Aplicação frontend do projeto Blog, desenvolvida em Next.js + React + TypeScript.

## 📌Funcionalidades

- Visualização de posts públicos
- Login e cadastro de usuários
- Criação, edição e exclusão de posts (usuário autenticado)
- Upload de imagens para posts
- Editor de Markdown para posts
- Visualização de posts com formatação avançada (GFM, sanitização)
- Notificações de ações (React Toastify)
- Consumo da API backend via HTTP

## 🚀 Tecnologias Utilizadas

- Next.js
- React 19
- TypeScript
- Drizzle ORM
- better-sqlite3
- Tailwind CSS
- ESLint
- React Markdown
- React Toastify
- Zod (validação)
- date-fns
- Lucide React (ícones)

## ⚙️ Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env`
   ```env
   VITE_API_URL=url_api_backend
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse em `http://localhost:3000`


## 🔗 Endpoints Consumidos

- `POST /auth/login` — Login
- `POST /user` — Cadastro
- `GET /post/` — Listar posts públicos
- `POST /post/me` — Criar post (autenticado)
- `PATCH /post/me/:id` — Editar post (autenticado)
- `DELETE /post/me/:id` — Excluir post (autenticado)
- `POST /upload` — Upload de imagem

## 👨‍💻 Desenvolvido por

- [Kathryn Oliveira](https://github.com/KathrynOliveira)
