# 🚀 My Boost FE Test

A **Next.js 15** project using **Turbopack**, styled with **Tailwind CSS 4**, and powered by modern libraries like **Zod**, and **LowDB**.  
This project is intended for testing and demonstrating frontend development skills.

---

## 📦 Tech Stack

- **[Next.js 15](https://nextjs.org/)** – React framework with Turbopack
- **[React 19](https://react.dev/)** – Latest React features
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Utility-first CSS
- **[Zod](https://zod.dev/)** – Schema validation
- **[LowDB](https://github.com/typicode/lowdb)** – Local JSON database
- **[@radix-ui/react-icons](https://www.radix-ui.com/icons)** – Accessible SVG icons
- **UUID** – Unique ID generator
- **ESLint + Prettier** – Code linting & formatting

---

## ⚙️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/your-username/my-boost-fe-test.git
cd my-boost-fe-test
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run development server

```bash
yarn dev
```

App will be running at [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

- `yarn dev` – Start development server with Turbopack
- `yarn build` – Build the app for production
- `yarn start` – Start production server
- `yarn lint` – Run ESLint
- `yarn format` – Format code with Prettier

---

## 🛠️ Project Structure

```
my-boost-fe-test/
├── .vscode/          # VSCode editor settings (launch.json, settings.json, etc.)
├── components/       # Reusable React components (UI elements, layout, widgets)
├── consts/           # Project-wide constants (routes, config values, enums)
├── helpers/          # Small utility/helper functions
├── hooks/            # Custom React hooks (e.g., useAuth, useFetch)
├── pages/            # Next.js pages (file-based routing)
│   ├── api/          # Next.js API routes (serverless functions)
│   └── index.tsx     # Main entry page
├── styles/           # Global styles (CSS, SCSS, Tailwind configs, etc.)
├── interfaces/       # TypeScript interfaces & types (e.g., User, Product)
├── utils/            # Application-level utilities (larger than helpers)
├── public/           # Static assets (images, fonts, icons, etc.)
│   └── favicon.ico   # Default favicon
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
├── .prettierignore   # Prettier ignore rules
├── .prettierrc.json  # Prettier configuration
├── db.json           # Mock database (e.g., for json-server)
├── eslint.config.mjs # ESLint configuration
├── next-env.d.ts     # Next.js type definitions
├── next.config.ts    # Next.js configuration file
├── package.json      # Project metadata, dependencies, and scripts
├── postcss.config.mjs# PostCSS configuration (usually for Tailwind)
├── README.md         # Project documentation
├── tsconfig.json     # TypeScript configuration
└── yarn.lock         # Yarn lock file for dependency consistency
```

---

## 🚧 Requirements

- **Node.js >= 18**
- **Yarn >= 1.22** (Classic) or **Berry**

---

## 🧹 Code Quality

This project uses:

- **ESLint** with `next`, `prettier`, and `simple-import-sort`
- **Prettier** with `tailwindcss` plugin for automatic class sorting

Format code with:

```bash
yarn format
```

---

## 📄 License

This project is private and for testing purposes only.
