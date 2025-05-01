# ✔️ A-Safe

Technical Test: React Developer with Next.js, TypeScript and Tailwind CSS

# 🌍 Human Ethnicities

Fictitious visual and technical exploration of the diverse ethnicities of the world.  
This project blends clean design, smooth animations, and a modern web stack to present a striking and immersive user experience.

---

## 🚀 Demo

👉 [Live on Vercel](https://ethnicities.vercel.app/)

---

## 📚 Project Overview

**Human Ethnicities** is a modern frontend project built with **Next.js 14**, The goal is to deliver a performant and aesthetically refined interface that emphasizes visual storytelling. Additionally, the project includes graphical data representations, implemented using ui.shadcn components, to enrich the narrative with visual context.

---

## ⚙️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Custom Google Fonts (e.g., Editorial New)
- **Chart**: [UI Shadcn](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (with hardcoded user for demo purposes)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Unit Test**: [Jest JS](https://jestjs.io/)
- **Type Safety**: TypeScript

---

## 🧩 Architecture

```
src/
├── app/
│   ├── api/             # API routes (e.g., /api/data)
│   ├── dashboard/       # Daschboard page and logic
│   ├── page.tsx         # Login & Main entry point
│   └── layout.tsx       # Root layout and providers (Theme, Session)
├── components/          # UI components (form, motion, etc.)
│   └── motion/          # Motion-related components (e.g., Reveal)
│   └── ui/              # UI kit component and theme
├── lib/                 # Auth config (e.g., authOptions.ts)
├── styles/              # Global styles if needed
└── public/              # Static assets (images, logo, etc.)
```

---

## 🔐 Authentication

Login is implemented using **NextAuth.js**, with a single hardcoded user in the configuration (`authOptions`).  
Session state is handled via the `SessionProvider`, and authentication checks can be easily extended as needed.

user: test@example.com
pass: 123456

---

## 🧪 API

The app uses a local API route at `/api/data` & `api/full-ethnicity` to serve static JSON data.  
This structure allows easy migration to a real backend in the future.

---

## 📝 Setup & Development

1. **Clone the repository**

```bash
git clone https://github.com/miuel/ethnicities.git
cd ethnicities
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

## 📚 Requirements

- **Task 1: Authentication with Next.js**
  ● Secure routes using NextAuth.js for authentication
  ● Implement email/password based authentication
  ● Do not use third-party authentication providers (Google, GitHub, Facebook, etc.)
- **Task 2: Component Development UI Components**
  ● Create a UI Kit for the project.
  ● Pay special attention to the components style, making sure the application has a nice look and feel.
  ● Implement a theme system with multiple theme options.
  Custom Hook
  ● Create a custom hook for handling complex logic to be reused across the application.
- **Task 3: Dashboard Generation**
  ● Develop a dashboard to show a summary of information.
  ● This dashboard should include a graph, you can use libraries such as D3.js, Chart.js, etc.
- **Task 4: Large Data Set Handling**
  ● Using a set of at least 1000 records, create a view that allows efficient querying and data retrieval.
  ● Implements an optimal way of displaying information to the user (for example using pagination).
- **Task 5: Performance Optimisation**
  ● Make the most of the Next.js 14 features by using server-side rendering, server-components and the streaming technique.
  ● Optimize the application for mobile performance using Google Lighthouse metrics.
- **Task 6: Testing**
  ● Perform unit testing of the application with jest and/or with React Testing Library.
  ● Perform E2E testing of the application with cypress.
- **Task 7: Documentation**
  ● Provide a detailed README with instructions, architecture overview, and any additional information.
  Submission Guidelines:
  ● Share the link to the Git repository containing your code.
  ● Ensure that your application is deployed, and share the deployment link (e.g.,
  Netlify, Vercel).

---

## ✍️ Created by

**Miguel Rivas** — [Portfolio](https://mr-web-iota.vercel.app/)
