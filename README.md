# Bdzhr Planner OS 🚀

<div align="center">
  <p><strong>A Premium, Offline-First Personal Finance & Wishlist Tracker</strong></p>
</div>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-8A2BE2?style=for-the-badge&logo=pwa&logoColor=white)
![Local First](https://img.shields.io/badge/Local_First-10B981?style=for-the-badge&logo=sqlite&logoColor=white)

---

## 📌 Overview

**Bdzhr Planner** is a high-performance, single-page Personal Finance Operating System built entirely with Vanilla JavaScript, HTML5, and Tailwind CSS. Designed to be a **100% offline-first Progressive Web App (PWA)**, it requires zero backend servers to function. All your transaction history, budgets, and savings goals are securely stored locally within your browser using **IndexedDB**. 

The UI takes inspiration from premium "Bento Box" layouts, offering an incredibly smooth and responsive experience packed with dynamic micro-animations, glassmorphism elements, and robust theme support.

## ✨ Key Features

- 📱 **Progressive Web App (PWA):** Installable on Android, iOS, and Desktop. Works entirely offline using Service Workers.
- 🎨 **Dynamic Bento UI:** Sleek, modular dashboard layout featuring Light, Dark (Vantablack), and Pink (Cyber Pink) themes.
- 🗄️ **Local-First Architecture:** Powered by `IndexedDB`. Your data never leaves your device unless you want it to.
- 📊 **Smart Analytics:** Real-time Chart.js integration showing Expense Distribution and 7-Day Cashflow.
- 🎯 **Target Menabung (Wishlist):** Set specific savings goals (like buying a phone or a car), allocate funds to them directly, and track your progress through interactive progress bars.
- 🔄 **WebRTC P2P Sync:** Sync your entire financial database directly to another device over the air using PeerJS—no servers, no cloud storage needed.
- 📄 **PDF & CSV Export:** Generate beautiful offline PDF reports or export your data to CSV formats instantly using `html2pdf.js`.

## 🚀 Getting Started

Since Bdzhr Planner requires no backend dependencies or build steps, deploying or testing the app is incredibly simple.

### 1. Run Locally
To run the app locally, you just need a local server to avoid CORS issues with IndexedDB and Service Workers.
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bdzhr-planner.git
   ```
2. Open the folder and use an extension like **Live Server** in VSCode, or run a python server:
   ```bash
   python3 -m http.server 3000
   ```
3. Open `http://localhost:3000` in your browser.

### 2. Deploy to Netlify / Vercel / GitHub Pages
Deploying is as easy as dragging and dropping the project folder!
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the entire project directory.
3. Your PWA is live and ready to be installed on any device!

## 🛠️ Built With

- **Vanilla JavaScript** (No React/Vue overhead)
- **Tailwind CSS v3** (via CDN for rapid styling)
- **IndexedDB API** (Local storage engine)
- **Chart.js** (Data visualization)
- **PeerJS** (WebRTC P2P Sync)
- **html2pdf.js** (Client-side PDF rendering)

## 🔒 Privacy First

**Your data is yours.** The application makes zero HTTP requests to external databases. Everything is stored locally via `IndexedDB`. The WebRTC synchronization feature establishes a direct peer-to-peer connection to transfer data strictly between your authorized devices.

---

<div align="center">
  <p>Designed and Built by <strong>J.A.R.V.I.S / Antigravity</strong></p>
</div>
