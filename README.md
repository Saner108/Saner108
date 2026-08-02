<div align="center">

# Hey, I'm Cesar 👋

**Head Nutrition Coach · TAMUCC Recreational Sports Center**  
Business Analytics · AI-Assisted Workflows · Operations

</div>

---

## What I Build

I work at the intersection of nutrition science, business analytics, and AI tooling. My day job is coaching student athletes — building meal plans, tracking macros, running assessments. My projects are the systems I wish I had to do that job better.

---

## Featured Project

### 🌿 [NutriCook AI](https://github.com/Saner108/nutricook-ai) · [Live Demo](https://nutricook-ai-kappa.vercel.app/)

> Turn your ingredients into personalized recipes — powered by Claude AI.

A full-stack nutrition coaching app built for real clients. Snap a photo of your fridge, get 3 personalized recipes with full macros and step-by-step instructions, streamed live as Claude writes them.

**What's under the hood:**
- Claude Vision for fridge scanning → ingredient detection
- Streaming SSE recipe generation (recipes appear one by one as Claude writes them)
- Supabase auth + Postgres with RLS — each user's data stays isolated
- Server-side quota enforcement via atomic Postgres upserts (free: 3 generations/day)
- Stripe subscription → webhook → `subscriptions` table (the DB row is the source of truth, not client state)
- Multi-agent development pipeline: schema-planner → human review → migration-executor → test-runner
- 35 unit tests covering quota logic, streaming parser, security surface, and source-level contracts
- Dark mode, iOS design system, demo mode (works with zero setup)

**Stack:** React 18 + Vite · Supabase · Anthropic Claude · Stripe · Vercel

---

## Other Work

### 📊 [Excel Business Analytics Portfolio](https://github.com/Saner108/Excel-Business-Analytics-Portfolio)

The data foundation behind NutriCook's structure. Business analytics projects built in Excel — the kind of macro tracking, goal-setting, and variance analysis I do manually with clients every week. These spreadsheets informed the data model for NutriCook's profiles, weight logs, and macro targets.

---

## What I'm Focused On

Right now I'm applying for the **Claude Corps Fellowship** — a program for builders who use AI to solve real professional problems, not just ship demos. NutriCook came out of a real bottleneck: I was spending 10–15 minutes per client session building meal plans by hand. The app cuts that to under 2 minutes.

The project that matters most to me isn't the one with the cleanest code — it's the one that changes how the work gets done.

---

## Connect

📍 Corpus Christi, TX · TAMUCC  
📧 sanchezcesar106@gmail.com  
🔗 [NutriCook AI live demo](https://nutricook-ai-kappa.vercel.app/)

</div>
