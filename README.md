# Ré Research Ecosystem Portal

A highly polished, interactive React-based digital portal designed to showcase the research programs, strategic cores, and academic-industry outputs of the Ré scientific ecosystem.

The portal provides an intuitive, high-fidelity experience to browse long-term fellowships, seasonal research labs, community-focused assistive designs, and strategic research divisions.

---

## 📂 Project Architecture

The application is structured as a modern React SPA using Vite, TypeScript, Tailwind CSS, and Lucide Icons.

```text
├── src/
│   ├── main.tsx                # Application bootstrap entry point
│   ├── App.tsx                 # Core layout manager, global state, and routing
│   ├── types.ts                # Shared TypeScript interface definitions
│   ├── index.css               # Global styling entry point with Tailwind imports
│   ├── components/             # Modular view components
│   │   ├── AboutView.tsx       # Interactive history timeline with contextual photography
│   │   ├── EcosystemView.tsx   # Strategic Research Cores explorer (NFRC & Nithilam)
│   │   ├── ProgramsView.tsx    # Key research initiatives tracker (KREST, KRIP, REFLECT, etc.)
│   │   ├── ResearchView.tsx    # Academic publications, patents, and projects catalog
│   │   ├── DatasetsView.tsx    # Open-access dataset registries
│   │   ├── AIHubView.tsx       # AI and Computational intelligence showcases
│   │   ├── StartupHubView.tsx  # Spin-off incubation and venture analytics
│   │   ├── ImpactView.tsx      # Social, ecological, and economic influence trackers
│   │   ├── AlumniView.tsx      # Scholar career pathways and academic map
│   │   ├── PeopleView.tsx      # Principal investigators, coordinators, and directors
│   │   └── JoinUsView.tsx      # Fellowship applications and career openings
│   └── data/
│       └── researchData.ts     # Centralized research metadata bank
```

---

## 🎯 Key Sections & Core Components

### 1. Strategic Cores
* **File Name**: `/src/components/EcosystemView.tsx`
* **Details**: Showcases the core research wings of the Ré ecosystem:
  * **Natural Fibre Research Centre (NFRC)**: Engineering organic biomass and agricultural residue into high-performance materials. Included with interactive metrics tracking tensile strength and biomass grade.
  * **Nithilam Archaeo-Physics Lab**: Computational digital archaeology, epigraphy scanning, and translation (using optical/GIS techniques on Vatteluttu stone carving sites).

### 2. Programs Portal
* **File Name**: `/src/components/ProgramsView.tsx`
* **Details**: Manages and displays the core educational and collaborative run cycles:
  * **KREST**: Long-term academic research scholarships for undergraduate scholars.
  * **KRIP**: Seasonal intensive laboratory sprints.
  * **REFLECT**: Socially-driven community design deployments (e.g., ergonomic loom equipment).
  * **CORE**: Interdisciplinary roundtables coordinating institutional grants (DST, BIRAC).

### 3. Chronological History Timeline
* **File Name**: `/src/components/AboutView.tsx`
* **Details**: Provides a timeline traversal ranging from inception in 2016 through to present and future projections. Fully responsive with dynamic contextual photography, location mappings, and core academic milestones.

---

## 🛠️ Development & Tooling Commands

The portal's node configuration and build automation can be executed using standard npm scripts:

### Local Development Server
Launch the local Hot-Reload server on port `3000`:
```bash
npm run dev
```

### Build & Compilation
Compile and optimize client-side assets into static bundles in `./dist`:
```bash
npm run build
```

### Type and Lint Check
Validate TypeScript type safety and run diagnostics:
```bash
npm run lint
```
