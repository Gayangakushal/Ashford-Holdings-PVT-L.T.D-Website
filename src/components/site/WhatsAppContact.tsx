import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

/** Direct contact on every route; opening the link does not send a message. */
export function WhatsAppContact() {
  return (
    <a
      className="whatsapp-contact"
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact Ashford Holdings on WhatsApp: ${site.whatsapp}`}
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
