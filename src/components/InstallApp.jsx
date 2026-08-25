import { useEffect, useState } from "react";

export default function InstallApp() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    const onPrompt = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };
    const onInstalled = () => setPromptEvent(null);

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  // Browser hasn't offered install (unsupported, or app already installed)
  if (!promptEvent) return null;

  const install = async () => {
    promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
  };

  return (
    <button type="button" className="btn btn-outline install-app-btn" onClick={install}>
      <img src="/logo-badge.png" alt="" width="18" height="18" />
      Install our app
    </button>
  );
}
