# 💸 Bdzhr Planner (PWA)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-success)
![License](https://img.shields.io/badge/license-MIT-green)

Bdzhr Planner is a blazing-fast, Offline-First Progressive Web Application (PWA) designed for precise personal finance tracking and dynamic budget allocation. Built with Vanilla JavaScript and Tailwind CSS, it prioritizes speed, local data security, and seamless mobile UX without the overhead of heavy frameworks.

## ✨ Key Features

- **Offline-First Architecture:** Powered by Service Workers and IndexedDB. Your financial data stays on your device. Zero loading screens, zero network latency.
- **Dynamic Bucket Budgeting:** Create custom budget categories on the fly. The system automatically prevents budget over-allocation based on the initial balance.
- **Comprehensive Analytics:** Integrated with Chart.js to provide real-time Doughnut Charts (Expense Distribution) and Bar Charts (Cash Flow Trends).
- **Export Capabilities:** \* **PDF Generation:** Clean, professional-grade financial reports generated purely on the client side using `html2pdf.js`.
  - **CSV Export:** One-click data export using native Blob APIs for deep data analysis in Excel/Sheets.
- **Dark Mode Ready:** A sleek, cyberpunk-inspired dark theme and a clean light theme, fully responsive for all screen sizes.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript (ES6+), Tailwind CSS (via CDN).
- **Storage:** IndexedDB (Transaction History), LocalStorage (State Management).
- **Libraries:** `html2pdf.js` (PDF Generation), `Chart.js` (Data Visualization).

## 🚀 Local Installation

Since Bdzhr Planner is a static, serverless application, running it locally is incredibly straightforward:

1. Clone the repository:

   ```bash
   git clone [https://github.com/yourusername/bdzhr-planner.git](https://github.com/yourusername/bdzhr-planner.git)

    Navigate to the project directory:
    Bash

    cd bdzhr-planner

    Run it using any local server (e.g., VS Code Live Server, Python HTTP server):
    Bash

    python -m http.server 8000

    Open http://localhost:8000 in your browser.
   ```

📱 PWA Installation (Mobile)

To install this app on your mobile device natively:

    Visit the live deployment URL via Chrome (Android) or Safari (iOS).

    Tap the browser menu and select "Add to Home Screen".

    The app will now function independently, fully offline, directly from your app drawer.

📄 License

This project is licensed under the MIT License.

## Built with ❤️ by (Nabil A. Dika).
