# 📰 Newsletter

A clean and responsive static newsletter webpage built using **React**, **Vite**, **Framer Motion**, and modular styling. This project showcases weekly mobility and automotive news in a categorized layout.

> Built as part of an internship task using frontend development skills with an emphasis on structure, design, and usability.

---

## ✨ Features

- Categorized news sections 
- Fully static frontend – no backend required
- Responsive design for all devices
- Smooth animations with Framer Motion
- Data-driven layout using specific JSON file
- Easy to extend and maintain

---

## 🛠️ Tech Stack

- React (with Vite)
- Framer Motion (animations)
- CSS Modules and Tailwind CSS (styling)
- JSON (local data source)

---
📁 project-root/
 ┣ 📁 dist/                # Production build (generated)
 ┣ 📁 node_modules/        # Project dependencies
 ┣ 📁 public/              # Static assets
 ┣ 📁 src/                 
 ┃ ┣ 📁 assets/            # Images, icons, etc.
 ┃ ┣ 📁 components/        
 ┃ ┃ ┣ 📁 footer/          # Footer layout
 ┃ ┃ ┣ 📁 hero/            # Hero section
 ┃ ┃ ┣ 📁 navbar/          # Navigation bar
 ┃ ┃ ┗ 📁 news-grid/       # News grid and layout logic
 ┃ ┣ 📁 data/              # Local JSON data (news articles)
 ┃ ┣ 📄 App.css            # Global styles
 ┃ ┣ 📄 App.jsx            # Root React component
 ┃ ┗ 📄 main.jsx           # Entry point for rendering
 ┣ 📄 .gitignore           # Files and folders to ignore in Git
 ┣ 📄 eslint.config.js     # ESLint configuration
 ┣ 📄 index.html           # Root HTML file
 ┣ 📄 package.json         # Project metadata and scripts
 ┣ 📄 package-lock.json    # Dependency lock file
 ┣ 📄 vite.config.js       # Vite configuration
 ┗ 📄 README.md            

---

## 🚀 Getting Started

```bash
git clone https://github.com/I-paul/Newsletter.git
cd frontend
npm install
npm run dev
```

Visit the app at: `http://localhost:5173`

---

## 📦 Production Build

```bash
npm run build
npm run preview
```

This will generate an optimized static build and preview it locally.

---

## 🧩 Customization

- Update article content in `src/data/newsData.json`
- Add or reorder sections in `NewsGrid.jsx`

---

## 📌 Notes

- No backend or server logic
- Ideal for deployment on Netlify, Vercel, or GitHub Pages.
- Simple and efficient static site.
- Minimal animations for smooth UX.

---

## 👨‍💻 Developer

**Name:** Israel Paul  
**Email:** [israelpaul.k@gmail.com]  
**LinkedIn:** [https://www.linkedin.com/in/israel-paul-1b6034273/](#)  
**GitHub:** [https://github.com/I-paul](#)

---

## 📝 License

Built for internship at Frost & Sullivan.

---