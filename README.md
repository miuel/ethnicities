# 🌍 Human Ethnicities

A visual and technical exploration of the diverse ethnicities of the world.  
This project blends clean design, smooth animations, and a modern web stack to present a striking and immersive user experience.

---

## 🚀 Demo

👉 [Live on Vercel](https://your-deploy-url.vercel.app/) ← *(replace with your actual link)*

---

## 📚 Project Overview

**Human Ethnicities** is a modern frontend project built with **Next.js 14**, showcasing a full-screen grid layout of human portraits, accompanied by a login interface and subtle animations.  
The goal is to deliver a performant and aesthetically refined interface that emphasizes visual storytelling.

---

## ⚙️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Custom Google Fonts (e.g., Editorial New)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (with hardcoded user for demo purposes)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Type Safety**: TypeScript

---

## 🧩 Architecture

```
src/
├── app/
│   ├── api/             # API routes (e.g., /api/data)
│   ├── login/           # Login page and logic
│   ├── page.tsx         # Main entry point
│   └── layout.tsx       # Root layout and providers (Theme, Session)
├── components/          # UI components (form, motion, etc.)
│   └── motion/          # Motion-related components (e.g., Reveal)
├── lib/                 # Auth config (e.g., authOptions.ts)
├── styles/              # Global styles if needed
└── public/              # Static assets (images, logo, etc.)
```

---

## 🔐 Authentication

Login is implemented using **NextAuth.js**, with a single hardcoded user in the configuration (`authOptions`).  
Session state is handled via the `SessionProvider`, and authentication checks can be easily extended as needed.

---

## 🧪 API

The app uses a local API route at `/api/data` to serve static JSON data.  
This structure allows easy migration to a real backend in the future.

---

## 📝 Setup & Development

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/human-ethnicities.git
cd human-ethnicities
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Run the dev server**

```bash
pnpm dev
# or
npm run dev
```

4. **Environment variables**

You'll need a `.env.local` file with at least:

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

---

## 📄 License

This project is for demonstration and educational purposes.  
Feel free to fork and adapt it.

---

## ✍️ Created by

**Miguel Rivas** — [Portfolio](https://mr-web-iota.vercel.app/)
