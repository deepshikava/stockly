<div align="center">

# 📈 Stockly

### *A modern stock management & inventory tracking web application*

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4.x-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

<br/>

[![GitHub repo](https://img.shields.io/badge/GitHub-deepshikava%2Fstockly-181717?style=flat-square&logo=github)](https://github.com/deepshikava/stockly)
[![Live Demo](https://img.shields.io/badge/DEMO-LINK-orange)](https://github.com/deepshikava/stockly)

</div>

---

## 📖 About

**Stockly** is a full-stack, type-safe web application built on **Next.js 16** (App Router) with **React 19** and **TypeScript**. It is designed to provide a sleek, data-rich interface for managing and tracking stock/inventory data. The project leverages the modern shadcn/ui component system (Radix Nova style), Zustand for global state management, TanStack Table for powerful data grids, and Zod + React Hook Form for robust form validation.

> ⚠️ **Note from `AGENTS.md`:** This project uses a **non-standard version of Next.js** with breaking changes from common conventions. Always refer to `node_modules/next/dist/docs/` before modifying Next.js-specific code.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Data Tables** | Powered by TanStack Table v8 with sorting, filtering, and pagination |
| 🎨 **Modern UI** | shadcn/ui with Radix Nova style, Lucide icons, and CSS variable theming |
| 🌓 **Dark Mode** | Built-in theme switching via `next-themes` |
| 📋 **Form Handling** | React Hook Form + Zod schema validation |
| 🔔 **Notifications** | Toast alerts via Sonner |
| 💾 **State Management** | Zustand for lightweight, scalable global state |
| 🔢 **Number Formatting** | `react-number-format` for currency/numeric inputs |
| ♿ **Accessible Components** | Radix UI primitives for accessible, headless components |

---

## 🚀 Demo

> _No live demo URL has been published yet._
>
> To run the project locally, follow the [Getting Started](#-getting-started) instructions below and open [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | `16.2.6` | Full-stack React framework (App Router) |
| [React](https://react.dev/) | `19.2.4` | UI rendering library |
| [TypeScript](https://www.typescriptlang.org/) | `^5` | Static type safety |

### UI & Styling

| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | `^4` | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | `^4.7.0` | Component system (Radix Nova) |
| [Radix UI](https://www.radix-ui.com/) | `^1.4.3` | Headless accessible primitives |
| [Lucide React](https://lucide.dev/) | `^1.14.0` | Icon library |
| [React Icons](https://react-icons.github.io/) | `^5.6.0` | Additional icon sets |
| [next-themes](https://github.com/pacocoursey/next-themes) | `^0.4.6` | Dark/light mode support |
| [tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate) | `^1.4.0` | CSS animations for Tailwind |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `^3.6.0` | Merge Tailwind classes safely |
| [clsx](https://github.com/lukeed/clsx) | `^2.1.1` | Conditional className utility |
| [class-variance-authority](https://cva.style/docs) | `^0.7.1` | Variant-driven component styling |

### Data & State

| Technology | Version | Purpose |
|---|---|---|
| [Zustand](https://zustand-demo.pmnd.rs/) | `^5.0.13` | Lightweight global state management |
| [@tanstack/react-table](https://tanstack.com/table) | `^8.21.3` | Headless data table engine |
| [Zod](https://zod.dev/) | `^4.4.3` | Schema validation & type inference |
| [React Hook Form](https://react-hook-form.com/) | `^7.75.0` | Form state management |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | `^5.2.2` | Zod adapter for React Hook Form |

### Utilities

| Technology | Version | Purpose |
|---|---|---|
| [nanoid](https://github.com/ai/nanoid) | `^5.1.11` | Unique ID generation |
| [react-number-format](https://s-yadav.github.io/react-number-format/) | `^5.4.5` | Input formatting for numbers/currency |
| [sonner](https://sonner.emilkowal.ski/) | `^2.0.7` | Toast notification system |
| [cmdk](https://cmdk.paco.me/) | `^1.1.1` | Command palette component |

---

## 📂 Project Structure

```
stockly/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, theme provider)
│   ├── page.tsx                # Home / entry page
│   └── globals.css             # Global CSS & Tailwind base styles
│
├── components/
│   └── ui/                     # shadcn/ui auto-generated components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── table.tsx
│       ├── toast.tsx
│       └── ...                 # Additional UI primitives
│
├── hooks/                      # Custom React hooks
│   └── use-*.ts
│
├── lib/                        # Shared utilities & helpers
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
│
├── public/                     # Static assets
│
├── components.json             # shadcn/ui configuration (Radix Nova style)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Dependencies & scripts
├── AGENTS.md                   # AI agent guidance notes
└── CLAUDE.md                   # Claude Code configuration
```

---

## 🧩 Component Tree

```
<RootLayout>                         ← app/layout.tsx
│   ThemeProvider (next-themes)
│   Toaster (sonner)
│
└── <Page>                           ← app/page.tsx
    │
    ├── <AppHeader />
    │   ├── Logo / Brand
    │   ├── Navigation
    │   └── ThemeToggle
    │
    ├── <AppTable />
    │   ├── <ProductTable />            ← @tanstack/react-table
    │   │   ├── TableHeader
    │   │   ├── TableBody
    │   │   │   └── TableRow[]
    │   │   └── TablePagination
    │   │
    │   ├── <ProductDialog />            ← react-hook-form + zod
    │   │   ├── FormField[]
    │   │   ├── NumberInput           ← react-number-format
    │   │   └── SubmitButton
    │   │
    │   └── <DeleteDialog />               ← alert dialog primitive
    │       └── Delete Confirmation Form / Detail View
    │
    └── <Footer />
```

> **Note:** The full component tree is inferred from the project's dependencies and structure. Actual route-level pages within `app/` may vary.

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/deepshikava/stockly.git
cd stockly

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Start by modifying `app/page.tsx`.

### Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev** | `npm run dev` | Start development server with hot reload |
| **Build** | `npm run build` | Create optimised production build |
| **Start** | `npm run start` | Start production server |
| **Lint** | `npm run lint` | Run ESLint across the project |

---

## 🏗️ Configuration

### shadcn/ui (`components.json`)

```json
{
  "style": "radix-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### TypeScript Path Aliases

| Alias | Resolves To |
|---|---|
| `@/components` | `./components` |
| `@/components/ui` | `./components/ui` |
| `@/lib` | `./lib` |
| `@/hooks` | `./hooks` |

---

## 🚢 Deployment

The easiest way to deploy Stockly is via the [Vercel Platform](https://vercel.com/new) — the creators of Next.js.

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed guidance on deploying to other platforms.

---

## 🌐 Language Breakdown

```
TypeScript  ████████████████████░  96.3%
CSS         █░░░░░░░░░░░░░░░░░░░░   3.3%
JavaScript  ░░░░░░░░░░░░░░░░░░░░░   0.4%
```

## 📄 Resources & References

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TanStack Table Docs](https://tanstack.com/table/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Zod Documentation](https://zod.dev/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

---

<div align="center">

Made with ❤️ by [Deepshika Viswanathan Alagulalitha](https://github.com/deepshikava)

⭐ Star this repo if you find it useful!

</div>