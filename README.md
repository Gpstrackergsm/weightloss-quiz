# bioma-style-weightloss-quiz

Modern, funnel-style weight loss quiz inspired by Bioma. The frontend is built with React, Vite, TailwindCSS, and Framer Motion. The backend is an Express API that generates personalized PDF plans with pdfkit.

## Project structure

```
frontend/  # Vite + React single-page app
backend/   # Express API with /api/generate-report endpoint
```

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create a `.env.local` file (or configure environment variables in Netlify) with the backend base URL so the quiz can reach the PDF API in production:

```bash
VITE_API_BASE_URL=https://your-backend-host.com/api
```

> The trailing `/api` portion is optional if your backend exposes the route at the root level.

Google Analytics 4 tracking is preconfigured with the shared measurement ID `G-EP3PKS5BE0`. If you need to point events to your own GA4 property, replace the snippet in `frontend/index.html` with the ID from your Analytics account.

The Vite dev server proxies `/api/*` requests to `http://localhost:5000` during development, so you can skip setting the variable locally if you run both services from this repository.

### Backend

```bash
cd backend
npm install
npm run dev
```

This starts the Express server on port 5000 with hot reload via nodemon. The production start command is `npm start`.

## Deployment notes

- **Frontend:** Deploy the `frontend` directory to Netlify. Configure the build command as `npm run build` and publish directory as `dist`.
- **Backend:** Deploy the `backend` directory to Render or Vercel. Ensure the server exposes the `/api/generate-report` POST route and streams the generated PDF response.

## Features

- Responsive, minimalist design using TailwindCSS with Bioma-inspired color palette (`#4F6B67`).
- Animated, single-question quiz flow with Framer Motion and a progress indicator.
- PDF generation with personalized recommendations, daily plan, and motivation messaging based on user answers.
- Ready-to-deploy configuration with separate frontend and backend services.
