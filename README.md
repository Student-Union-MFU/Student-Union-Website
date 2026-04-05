# 🎓 Student Union — Mae Fah Luang University

A modern web platform for the Mae Fah Luang University Student Union. Built to showcase upcoming events, past activities, lost & found items, and the student store.

---

## 🗂 Project Structure

```
su-website/
├── frontend/        # Next.js app
├── backend/         # NestJS app
└── docker/          # Docker configuration
```

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** — React framework with SSR/CSR hybrid
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS
- **[Framer Motion](https://motion.dev/)** — Animations & scroll effects
- **[Lenis](https://lenis.darkroom.engineering/)** — Smooth scrolling
- **[shadcn/ui](https://ui.shadcn.com/)** — UI component library
- **[Radix UI](https://www.radix-ui.com/)** — Accessible primitives
- **[Lucide React](https://lucide.dev/)** — Icon library

### Backend
- **[NestJS](https://nestjs.com/)** — Node.js framework
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety

### DevOps
- **[Docker](https://www.docker.com/)** — Containerization
- **[Docker Compose](https://docs.docker.com/compose/)** — Multi-container orchestration

---

## 🚀 Getting Started

### Prerequisites
- [Docker](https://www.docker.com/) & Docker Compose
- [Node.js](https://nodejs.org/) 20+
- [npm](https://www.npmjs.com/)

### Run with Docker
```bash
# clone the repo
git clone https://github.com/yourusername/su-website.git
cd su-website

# start all services
docker compose up --build
```

### Run locally

#### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:3000`

#### Backend
```bash
cd backend
npm install
npm run start:dev
```
Runs at `http://localhost:3001`

---

## 📦 Available Scripts

### Frontend
| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Backend
| Command | Description |
|---|---|
| `npm run start:dev` | Start with watch mode |
| `npm run build` | Build for production |
| `npm run start:prod` | Start production server |

---

## 🌍 Environment Variables

### Frontend — `frontend/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend — `backend/.env`
```env
PORT=3001
```

---

## 📄 License

This project is for Mae Fah Luang University Student Union internal use.