# 🚀 Core-Chat-Engine-Client 

**A high-performance, real-time messaging interface built with React 19.** This repository houses the frontend "Engine" for a full-stack group chat application, featuring a premium Glassmorphism UI and low-latency bi-directional communication.

---

## ✨ Key Features

* **💎 Modern UI/UX:** Bento-grid layout with advanced Glassmorphism effects (Backdrop Blur, Semi-transparent borders).
* **⚡ Real-Time Core:** Powered by Socket.io-client for instant message delivery and typing indicators.
* **🔐 Secure Auth:** Integrated JWT (JSON Web Token) handling with private route protection.
* **🛠️ Modular Architecture:** logic-separated Service Layer (`axios` interceptors) and Custom Hooks (`useSocket`, `useChatScroll`).
* **📱 Responsive Design:** Fully adaptive sidebar and chat window optimized for desktop and mobile users.

---

## 🏗️ Technical Architecture

This project follows a "Service-Hook-Component" pattern to ensure the core engine remains scalable.



* **Context API:** Manages global state for `Auth` and `Chat` synchronization.
* **Service Layer:** Centralized API calls using Axios instances to handle base URLs and headers.
* **Socket lifecycle:** Managed via `useRef` to prevent redundant connection cycles.

---

## 🚀 Getting Started

### 1. Prerequisites
* **Node.js** (v18 or higher)
* **Core-Chat-Engine-Server** (The companion Node.js/Express backend)

### 2. Installation
```bash
# Clone the repository
git clone (https://github.com/Jackson-tj74/core-chat-engine-client-group-chat-client.git)

# Install dependencies
npm install