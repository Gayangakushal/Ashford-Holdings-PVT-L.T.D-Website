import { useEffect, useState } from "react";
import { AppLink } from "@/components/site/Buttons";

const storageKey = "ashford-cookie-choice";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(storageKey);
      setVisible(choice !== "all" && choice !== "essential");
    } catch {
      setVisible(true);
    }
  }, []);

  function saveChoice(choice: "all" | "essential") {
    try {
      localStorage.setItem(storageKey, choice);
    } catch {
      // Dismiss for this visit even if browser storage is unavailable.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <section className="cookie-consent" role="region" aria-labelledby="cookie-title">
      <p className="cookie-eyebrow">YOUR PRIVACY</p>
      <h2 id="cookie-title">Cookies</h2>
      <div className="cookie-copy">
        <h3>What are cookies?</h3>
        <p>Cookies are small files saved on your device that help websites work and remember your preferences.</p>
        <h3>Why do we use cookies?</h3>
        <p>We use browser storage to remember your cookie choice. This website currently has no analytics, advertising or tracking cookies.</p>
        {settings && (
          <div id="cookie-settings" className="cookie-settings">
            <h3>Types of cookies we use</h3>
            <p><strong>Essential preferences — always active.</strong> Your choice is saved on this device so we can remember it on your next visit.</p>
            <p>No optional cookies are currently configured.</p>
          </div>
        )}
        <AppLink href="/privacy" className="cookie-policy">Read our privacy policy</AppLink>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-accept" onClick={() => saveChoice("all")}>Accept all cookies</button>
        {settings ? (
          <button type="button" className="cookie-secondary" onClick={() => saveChoice("essential")}>Save essential only</button>
        ) : (
          <button type="button" className="cookie-secondary" aria-expanded={settings} aria-controls="cookie-settings" onClick={() => setSettings(true)}>Cookie settings</button>
        )}
        {!settings && <button type="button" className="cookie-essential" onClick={() => saveChoice("essential")}>Essential only</button>}
      </div>
    </section>
  );
}
