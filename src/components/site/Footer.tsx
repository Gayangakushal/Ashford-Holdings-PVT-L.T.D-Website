import { AppLink } from "@/components/site/Buttons";
import { Logo } from "@/components/site/Logo";
import { disciplines } from "@/data/disciplines";
import { addressOneLine, navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-x">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="t-small mt-6 max-w-sm">{site.shortDescription}</p>
          </div>
          <nav aria-label="Footer" className="footer-col">
            <p className="t-tech">Navigate</p>
            <ul>
              {navigation.map((n) => (
                <li key={n.to}>
                  <AppLink href={n.to}>{n.label}</AppLink>
                </li>
              ))}
              <li>
                <AppLink href="/products">Equipment</AppLink>
              </li>
            </ul>
          </nav>
          <nav aria-label="Solutions" className="footer-col">
            <p className="t-tech">Solutions</p>
            <ul>
              {disciplines.map((d) => (
                <li key={d.slug}>
                  <AppLink href={`/solutions/${d.slug}`}>{d.title}</AppLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-col">
            <p className="t-tech">Contact</p>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={site.emailHref}>{site.email}</a>
              </li>
              <li className="t-small">{addressOneLine}</li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {site.whatsapp}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-5">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p className="footer-credit">
            Developed by{" "}
            <a href="https://share.google/ghvEWdoY52yWD0uXs" target="_blank" rel="noopener noreferrer">
              Novonex Software Solusions
            </a>
          </p>
          <p className="flex gap-5">
            <AppLink href="/privacy">Privacy</AppLink>
            <AppLink href="/terms">Terms</AppLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
