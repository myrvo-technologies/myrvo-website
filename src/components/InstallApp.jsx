import { useEffect, useState } from "react";

// The browser fires `beforeinstallprompt` only ONCE per page load, and it can
// fire before React mounts. Capture it at module level and let every rendered
// InstallApp button share it.
let deferredPrompt = null;
const listeners = new Set();
const notify = () => listeners.forEach((fn) => fn());

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    notify();
  });
}

export default function InstallApp({ className = "btn btn-outline install-app-btn" }) {
  const [, rerender] = useState(0);

  useEffect(() => {
    const fn = () => rerender((n) => n + 1);
    listeners.add(fn);
    return () => listeners.delete(fn);
  }, []);

  // Unsupported browser, or app already installed
  if (!deferredPrompt) return null;

  const install = () => {
    const ev = deferredPrompt;
    deferredPrompt = null; // an event can only prompt once — hide all buttons
    notify();
    ev.prompt();
  };

  return (
    <button type="button" className={className} onClick={install}>
      <img src="/logo-badge.png" alt="" width="18" height="18" />
      Install our app
    </button>
  );
}
