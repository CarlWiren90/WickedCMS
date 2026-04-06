# 🧙‍♂️ WickedCMS

**WickedCMS** is a lightweight, theme-driven content management system built for developers who want structure, speed, and control — without unnecessary complexity.

> A CMS where design is constrained on purpose — to produce better results, faster.

---

## 📸 Preview

> COMING SOON!

---

## 🚧 Status

**Early-stage development — not production-ready**

WickedCMS is currently focused on exploring a **theme-first architecture**. Expect breaking changes as the system evolves.

---

## ✨ Core Idea

Most CMS platforms give you too much freedom — and that often leads to inconsistent design and complex setups. WickedCMS takes a different approach:

- 🎨 **Themes define structure and styling**
- 🧩 **Components define content blocks**
- ⚖️ **Users configure within constraints — not from scratch**

> You don't build the design — you choose and shape it.

---

## ⚙️ Tech Stack

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🚀 Current Features

### 🎨 Cards Theme

- Responsive card-based layout
- Clean, consistent UI structure
- Single source of truth in `themes.ts` — theme keys are derived from the map, not duplicated
- Runtime-safe theme resolver with automatic fallback to the default theme

### 🃏 Card Layout Presets (`cardLayout`)

Controls how content is arranged inside each card.

| Value     | Description                                               |
| --------- | --------------------------------------------------------- |
| `default` | Vertical card — image on top, heading and text below      |
| `poster`  | Square card — image fills the full card, heading overlaid |

### 🖼️ Poster Heading Styles (`posterHeadingStyle`)

Only applies when `cardLayout="poster"`. Controls how the title is displayed over the image.

| Value            | Description                                       |
| ---------------- | ------------------------------------------------- |
| `gradientBottom` | Title in a bottom gradient overlay                |
| `badgeTopLeft`   | Title in a compact blurred badge, pinned top-left |

### 📐 Card Sizes (`cardSize`)

Controls the max-width of each card.

| Value    | Max Width |
| -------- | --------- |
| `small`  | ~20rem    |
| `medium` | ~31rem    |
| `large`  | ~42rem    |

### 🔤 Tone (`tone`)

Controls the font family applied to the card. Each tone loads a distinct Google Font.

| Value     | Font    | Feel                  |
| --------- | ------- | --------------------- |
| `modern`  | Manrope | Clean and geometric   |
| `classic` | Lora    | Editorial and refined |
| `playful` | Fredoka | Friendly and rounded  |

### 🌑 Shadow (`shadow`)

| Value    | Description        |
| -------- | ------------------ |
| `shadow` | Subtle drop shadow |
| `none`   | No shadow          |

### 🧩 Component-Based Architecture

- Modular components: `WickedCMS` (container) and `WickedCMSPost` (card)
- Props flow from the top-level `WickedCMS` component down to each post card
- Designed for reusability and extension

### ⚡ Fast Development Experience

- Instant reloads with Vite
- Utility-first styling with Tailwind

### 📱 Responsive by Default

- Works across all screen sizes without extra configuration

### 📝 Demo Content

- Static content via `storage.ts` for rapid prototyping

---

## 🧪 Getting Started

```bash
npm install
npm run dev
```

---

## 🎨 How Themes Work

In WickedCMS, themes are not just visual layers — they define how content is structured and rendered.

Each theme controls:

| Concern               | Examples                                   |
| --------------------- | ------------------------------------------ |
| **Layout**            | card layout, spacing, container structure  |
| **Visual style**      | colors, shadows, typography                |
| **Content structure** | what a card includes and how it's arranged |

Instead of allowing full freedom, themes expose **controlled preset options** — users configure within constraints, not from scratch.

All theme classes live in `themes.ts`. The `ThemeType` is derived directly from the theme map's keys, so adding a new theme automatically extends the type.

The `getThemeConfig()` resolver provides a runtime-safe fallback to the default theme if an invalid key is passed.

> Themes act as a constraint system — not just a styling layer.

### Usage Example

```tsx
<WickedCMS
  theme="cards"
  cardLayout="poster"
  posterHeadingStyle="gradientBottom"
  cardSize="medium"
  tone="modern"
  shadow="shadow"
  content={content}
/>
```

---

## 🧱 Project Philosophy

WickedCMS is built on a few key principles:

- **Controlled flexibility** → avoid design chaos
- **Clear structure** → easier to scale and maintain
- **Theme consistency** → better UX by default

---

## 🔮 Roadmap

Planned directions for the project:

- [x] Cards theme — initial implementation
- [x] Card layout presets (`default`, `poster`)
- [x] Poster heading style presets (`gradientBottom`, `badgeTopLeft`)
- [x] Card size options (`small`, `medium`, `large`)
- [x] Tone / font presets (`modern`, `classic`, `playful`)
- [x] Shadow control
- [x] Derived `ThemeType` from theme map (single source of truth)
- [x] Runtime-safe theme resolver with fallback
- [ ] More card layout variants
- [ ] Multiple built-in themes
- [ ] Better content modeling
- [ ] Persistence layer (API / database)
- [ ] Improved developer experience

---

## 🤝 Contributing

The project is in an early phase, but feedback, ideas, and discussions are welcome.

---

## 📌 Notes

This is a learning-driven project focused on exploring:

- Frontend architecture
- Design systems
- Theme-driven UI development
