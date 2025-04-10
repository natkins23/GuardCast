import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Inter and JetBrains Mono fonts
const interFontLink = document.createElement("link");
interFontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
interFontLink.rel = "stylesheet";
document.head.appendChild(interFontLink);

const jetbrainsFontLink = document.createElement("link");
jetbrainsFontLink.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap";
jetbrainsFontLink.rel = "stylesheet";
document.head.appendChild(jetbrainsFontLink);

// Add title and meta tags
const title = document.createElement("title");
title.textContent = "SecureAI - AI-Powered Security Automation";
document.head.appendChild(title);

const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "AI-powered security automation services for private security firms. Improve response times and reduce costs with real-time video analysis.";
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);
