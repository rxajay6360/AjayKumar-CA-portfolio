# C.A. AJAY KUMAR — CINEMATIC 3D ARTIST PORTFOLIO

A production-ready, cinematic portfolio website for **C.A. AJAY KUMAR** — 3D Artist, Texture Artist, and Motion Graphics Designer.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, matching the extracted **Google Stitch MCP** design reference (*Cinematic Obsidian*, Project ID: `5065931204751564559`).

---

## 🎨 Visual Identity & Stitch Design Reference

* **Theme:** Cinematic Obsidian
* **Palette:**
  * **Void / Canvas Base:** `#050505`
  * **Surface Chassis:** `#0a0a0a`
  * **Surface Elevated Panels:** `#121214`
  * **Crimson Core Accent:** `#ff2a3b` / `#e50914`
  * **Mythic Bronze Accent:** `#d49755`
  * **Contrast Whites:** `#f5f5f5` / `#ffffff`
  * **Muted Smoke:** `#888888`
* **Typography:** `Cinzel` (Cinematic serif titling) paired with `Inter` (Precise technical sans-serif)
* **Signature Elements:**
  * Volumetric red rim lighting & radial gradients
  * SVG fractal noise film grain overlay
  * Top crimson scroll progress indicator
  * Monogram brand lockup (`◆ C.A. AJAY KUMAR`)
  * Interactive Before/After Wireframe vs. Beauty Render slider
  * Clapperboard & timecode metadata callouts (`01 / ABOUT ME`, `02 / WHAT I DO`, `03 / FEATURED PROJECTS`, etc.)

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18.18+ or 20+ (tested on Node v24)
* npm or pnpm

### Installation
```bash
# Clone or navigate to the workspace
cd Ajay-Kumar-CA-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Compile and build production bundle
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css              # Stitch design tokens, glows, grain, and typography
│   ├── layout.tsx               # Root layout, Cinzel & Inter fonts, SEO metadata
│   ├── not-found.tsx            # Cinematic 404 error page
│   ├── page.tsx                 # Homepage combining all portfolio sections
│   ├── robots.ts                # Dynamic robots.txt generator
│   ├── sitemap.ts               # Dynamic sitemap.xml generator
│   └── work/[slug]/page.tsx     # Dynamic project detail page & before/after slider
├── components/
│   ├── About.tsx                # Creative vision, portrait ring, and philosophy
│   ├── BeforeAfterSlider.tsx    # Interactive Wireframe vs Render comparison tool
│   ├── Contact.tsx              # Direct project composer, mailto trigger, copy email
│   ├── Footer.tsx               # Dynamic copyright, social links, back-to-top
│   ├── GrainOverlay.tsx         # Film grain texture overlay
│   ├── Hero.tsx                 # Cinematic hero with interactive viewport toggle
│   ├── Navbar.tsx               # Responsive frosted navigation with mobile drawer
│   ├── ProjectCard.tsx          # Editorial project card with hover states
│   ├── ProjectGallery.tsx       # Filterable showcase (Maya, Substance, Motion)
│   ├── ScrollProgress.tsx       # Crimson scroll indicator
│   ├── Services.tsx             # 3 Core creative disciplines
│   ├── SkillsArsenal.tsx        # Technical skills breakdown (No fake percentages)
│   └── WorkflowTimeline.tsx     # 6-Step production pipeline (Desktop & Mobile)
├── data/
│   ├── projects.ts              # Data-driven project definitions and breakdowns
│   └── site-config.ts           # Central configuration for name, socials, email
└── public/
    └── images/
        ├── og-preview.svg       # Social media sharing banner (1200x630)
        └── projects/            # Individual project render directories
            ├── thors-hammer/
            ├── temple-environment/
            ├── vintage-gramophone/
            ├── banana-car/
            ├── material-studies/
            └── motion-graphics/
```

---

## 🛠️ How to Customize & Update Content

### 1. Replacing Project Images
All project visuals are organized in dedicated folders under `public/images/projects/`:
* `public/images/projects/thors-hammer/` (`hero.svg`, `wireframe.svg`, `beauty-01.svg`, `detail-01.svg`)
* `public/images/projects/temple-environment/` (`hero.svg`, `wireframe.svg`, `beauty-01.svg`, `detail-01.svg`)
* `public/images/projects/vintage-gramophone/` (`hero.svg`, `wireframe.svg`, `beauty-01.svg`, `detail-01.svg`)
* `public/images/projects/banana-car/` (`hero.svg`, `wireframe.svg`, `beauty-01.svg`)
* `public/images/projects/material-studies/` (`hero.svg`, `beauty-01.svg`, `detail-01.svg`)
* `public/images/projects/motion-graphics/` (`hero.svg`, `beauty-01.svg`, `detail-01.svg`)

Simply drop your exported PNG, WebP, JPEG, or SVG files into the corresponding folder and update the image paths in `data/projects.ts`.

### 2. Adding or Editing Projects
Open `data/projects.ts` to add or modify projects. Each project entry supports:
* `slug`: URL slug (e.g., `thors-hammer` -> `/work/thors-hammer`)
* `title`: Project display title
* `subtitle`: Thematic subtitle
* `category`: Discipline tag
* `filterCategory`: `"maya" | "substance" | "motion"`
* `software`: List of tools used (e.g., `["Autodesk Maya", "Substance 3D Painter"]`)
* `heroImage`: Path to hero render
* `wireframeImage`: Optional path to wireframe image (activates the interactive Before/After slider)
* `textureBreakdown`: Optional array of PBR texture maps (Albedo, Roughness, Normal, etc.)
* `processStages`: Walkthrough of production phases
* `galleryImages`: Additional camera angles and beauty renders

### 3. Updating Personal Contact & Social Links
Open `data/site-config.ts` to change:
* `email`: Your primary contact email
* `socials`: URLs for ArtStation, LinkedIn, Instagram, Behance, and YouTube

---

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally if needed
npm install -g vercel

# Login and deploy
vercel
```

### Option 2: GitHub + Vercel Web Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete cinematic 3d artist portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Leave the default settings (Framework Preset: **Next.js**).
5. Click **"Deploy"**.

---

## ⚡ Performance, Accessibility & SEO
* **100% Type-Safe**: Strict TypeScript throughout.
* **Metadata & OpenGraph**: Auto-generated meta tags for Twitter, LinkedIn, and Discord embeds.
* **Search Engine Discovery**: Automatic `sitemap.xml` and `robots.txt`.
* **Zero Layout Shift**: Static image sizing via Next.js `Image`.
* **Keyboard Accessible**: Focus indicators and semantic HTML landmarks.
