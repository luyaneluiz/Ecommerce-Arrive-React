# 🚀 Aplicação Full Stack com React, TypeScript e Node.js

Este projeto é uma aplicação full stack que utiliza React com TypeScript no front-end e Node.js no back-end. O front-end é configurado com Vite para um desenvolvimento rápido e eficiente, enquanto o back-end utiliza uma estrutura modular para gerenciar rotas e serviços.

## 📂 Estrutura do Projeto

```bash
Ecommerce-Arrive-React/
├── backend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── products.ts
│   │   │   └── ... (outros arquivos de rotas)
│   │   └── server.ts
├── frontend
│   ├── src/
│   │   ├── assets/
│   │   │   ├── logo.png
│   │   │   └── ... (outros arquivos de imagens)
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   └── ... (outros components)
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   ├── app.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── prettier.config
│   ├── tailwind.config
│   └── vite.config
└── README.md
```

## Front-end

O front-end da aplicação é construído com React e TypeScript, utilizando Vite para um desenvolvimento rápido com HMR (Hot Module Replacement). Algumas das principais configurações e ferramentas utilizadas incluem:

- **Vite**: Ferramenta de build rápida e leve.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e eficiente.
- **Prettier**: Ferramenta de formatação de código.

## Back-end
O back-end da aplicação é construído com Node.js, utilizando uma estrutura modular para gerenciar rotas e serviços. O arquivo principal do servidor é o server.ts, e as rotas são definidas na pasta routes.

### Estrutura do Back-end
- **server.ts**: Arquivo principal do servidor.
- **routes/**: Pasta contendo as definições de rotas, como products.ts.

## 🛠️ Como Executar o Projeto

### Front-end
Para rodar o front-end, utilize os seguintes comandos:

**Instalar dependências**
```bash
cd frontend
npm install
```

**Rodar o servidor de desenvolvimento**
```bash
npm run dev
```

**Temporariamente: Watch da base fake json**
```bash
json-server --watch db.json
```

### Back-end
Para rodar o back-end, utilize os seguintes comandos:

**Instalar dependências**
```bash
cd backend
npm install
```

**Rodar o servidor de desenvolvimento**
```bash
npm run dev
```

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Abra uma issue ou envie um pull request com melhorias e correções.
