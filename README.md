# Harninder Singh – Portfolio

A modern, responsive, single-page portfolio web app built with React.  
Showcases education, skills, experience, and projects with a clean, professional UI and dark mode support.

---

## ✨ Features

- **Single Page Application:** All resume sections (Header, About, Skills, Projects, Contact) on one page.
- **Reusable Components:** Modular React components for each section.
- **Props & State:** Data passed via props; UI behavior (dark mode, show/hide) managed with state.
- **Conditional Rendering:** Toggle project visibility and theme.
- **Dynamic Lists:** Skills and projects rendered using `.map()`.
- **CSS Modules:** Modular, scoped styling for maintainability.
- **Shared Styles:** Common section styles in `Section.module.css`.
- **Dark Mode:** Fully themeable with CSS variables.
- **Responsive Design:** Mobile-friendly layout.
- **Easy Deployment:** Ready for Vercel or similar platforms.

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/HarninderSingh/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run locally:**
   ```sh
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🌓 Dark Mode

Toggle between light and dark themes using the button in the header.  
All colors and backgrounds update automatically.

---

## 🛠️ Project Structure

```
src/
  ├── Component/
  │     ├── About.jsx / About.module.css
  │     ├── Contact.jsx / Contact.module.css
  │     ├── Header.jsx / Header.module.css
  │     ├── Projects.jsx / Projects.module.css
  │     ├── Skills.jsx / Skills.module.css
  │     └── Section.module.css
  ├── App.js / App.module.css
  ├── index.js / index.css
```

---

## 📄 License

MIT License

---

**Made with ❤️ by Harninder Singh**
