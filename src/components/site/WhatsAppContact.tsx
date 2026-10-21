import { useEffect, useState } from "react";
import { site } from "@/data/site";

const prompts = [
  {
    label: "Chat with us",
    message: "Hello! I'd like to learn more about Ashford Holdings' services.",
  },
  {
    label: "Get a quotation",
    message: "Hello! I'd like to get a quotation for my project. Could we discuss the details?",
  },
  {
    label: "Need help?",
    message: "Hello! I need help choosing the right solution for my requirements.",
  },
] as const;

/** Direct contact on every route; opening the link does not send a message. */
export function WhatsAppContact() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (hovered || focused) return;
    const timer = window.setInterval(() => {
      setPromptIndex((index) => (index + 1) % prompts.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [hovered, focused]);

  const prompt = prompts[promptIndex] ?? prompts[0];

  return (
    <a
      className="whatsapp-contact"
      href={`${site.whatsappHref}?text=${encodeURIComponent(prompt.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${prompt.label} — Contact Ashford Holdings on WhatsApp: ${site.whatsapp}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <span key={promptIndex} className="whatsapp-contact-prompt" aria-hidden="true">
        {prompt.label}
      </span>
      <img src="/whatsapp.png" width={60} height={60} alt="" aria-hidden="true" />
    </a>
  );
}
