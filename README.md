# ninahahne-portfolio-sveltekit

This is the **SvelteKit-based portfolio** of [Nina Hahne](https://ninahahne.rocks).  
It showcases selected projects, experiments, and design work.

Built with:

- ✅ **SvelteKit 2** + **Svelte 5**
- ✅ **TailwindCSS** for layout and responsiveness
- ✅ **TypeScript**, **ESLint**, and **Prettier** for consistency
- ✅ **Static site generation** using `@sveltejs/adapter-static`

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the development server

```bash
npm run dev
```

Then visit `http://localhost:5173`.

---

## 📂 Project Structure (simplified)

```
src/
├── routes/               # Page routes
│   └── +page.svelte      # Main entry (portfolio homepage)
├── lib/
│   ├── components/       # Reusable Svelte components
│   ├── data/             # Project data as JS/TS files
│   └── utils/            # Optional helpers
├── styles/
│   └── app.css           # Tailwind base & custom styles
static/
├── images/               # Project images, icons, etc.
```

---

## 📌 Customization

### Tailwind

TailwindCSS is preconfigured. Modify styles in:

```bash
src/styles/app.css
tailwind.config.ts
```

### Linting & Formatting

ESLint and Prettier are included:

```bash
npm run lint
```

### Deployment

By default, this uses **static site generation** (`adapter-static`).

This portfolio is statically generated with adapter-static, and can be deployed to:

- GitHub Pages
- Netlify / Vercel
- Any static file host

---

## 📷 Image Optimization (WebP, AVIF)

This portfolio supports **automatic image optimization** using `vite-imagetools`. It allows you to convert images to WebP/AVIF at build time.

### Install `vite-imagetools`

```bash
npm install vite-imagetools
```

### Configure `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [imagetools()],
});
```

### Usage in Svelte components

```svelte
<script>
  import img from '$lib/images/sample.jpg?w=500&format=webp';
</script>

<img src={img} alt="Optimized Image" />
```

✅ **Pros:** No extra server needed, works seamlessly with `adapter-static`.

---

## 📄 License

This project is [MIT licensed](https://opensource.org/license/mit/).  
All project content © Nina Hahne.

---

## 👋 Contact

Visit: [ninahahne.rocks](https://ninahahne.rocks)  
GitHub: [@NinaHahne](https://github.com/NinaHahne)  
Mail: [nina.marie.hahne@gmail.com](mailto:nina.marie.hahne@gmail.com)

---

## 🎨 Credits

Emoji icons by [OpenMoji](https://openmoji.org), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
