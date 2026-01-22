# 🚀 Full Stack Application using React, TypeScript e Node.js

This project is a full stack application that uses React with TypeScript on the front-end and Node.js on the back-end. The front-end is configured with Vite for fast and efficient development, while the back-end follows a modular structure to manage routes and services.

## 📂 Project Structure

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

The front-end of the application is built with React and TypeScript, using Vite for fast development with Hot Module Replacement (HMR). Some of the main tools and configurations include:

- **Vite**: Fast and lightweight build tool.
- **ESLint**: Linting tool to maintain code quality.
- **Tailwind CSS**: Utility-first CSS framework for fast and efficient styling.
- **Prettier**: My favorite code formatting tool.

## Back-end
The back-end of the application is built with Node.js, using a modular structure to manage routes and services. The main server file is server.ts, and the routes are defined in the routes folder.

### Back-end Structure
- **server.ts**: Main server file.
- **routes/**: Folder containing route definitions, such as products.ts.

## 🛠️ How to Run the Project

### Front-end
To run the front-end, use the following commands:

**Install dependencies**
```bash
cd frontend
npm install
```

**Run the development server**
```bash
npm run dev
```

**[Obsolete] Watch da base fake json**
```bash
json-server --watch db.json
```

### Back-end
To run the back-end, use the following commands:

**Install dependencies**
```bash
cd backend
npm install
```

**Run the development server**
```bash
npm run dev
```

## Contributing
Feel free to contribute to this project. Open an issue or submit a pull request with improvements or fixes.

```md
> This is a personal project developed for learning and portfolio purposes.  
> The application is still a work in progress and reflects my approach to structuring real-world frontend and full stack applications.
