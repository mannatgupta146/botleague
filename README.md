# 🤖 BotLeague

> Frontend assignment submission for the **Full Stack Developer** role at **BotMakers Pvt Ltd**.

[Figma Design Reference](https://www.figma.com/design/9iGNHKi7vwCCnPrBLwwQxc/AI-Shopping-Assistant?node-id=52-2&t=nmiYgJNxr0RVwGiY-1) 

---

## ⚡ Core Implementations

*   **📱 Responsive Drawer Navigation**: Fully animated responsive hamburger toggle menu that opens an overlay drawer layout for mobile screens.
*   **✨ Touch-Optimized Interactions**: Isolated hover scaling and translation to desktop-only hover query states (`@media (hover: hover)`) to prevent sticky behaviors on swipe/scroll, combined with active scale-down press states for tactile touch feedback.
*   **📐 Mobile Layout Safeguards**: Configured relative/absolute stacking boundaries and responsive padding to prevent layout overlaps on narrow viewports.
*   **🎨 Brand-Tailored Aesthetics**: Integrated brand gradient buttons and color highlights (coral-red and golden-yellow) that flash on tap/hover.
*   **🔍 Interactive Card Details**: Added custom tap-to-reveal action cards that allow mobile users to toggle and view schematics on tap.
*   **⚡ Strict Type Safety**: Standardized components using arrow functions, centralized interfaces (`src/types/index.ts`), and strict module syntax compliance.

---

## 🛠️ Tech Stack

*   **Framework**: React 18 & Vite
*   **Language**: TypeScript (Type-Safe dynamic loops)
*   **Styling**: Tailwind CSS & Vanilla CSS (in `src/index.css`)

---

## ⚙️ Getting Started

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.
