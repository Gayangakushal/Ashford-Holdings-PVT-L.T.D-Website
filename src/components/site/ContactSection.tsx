import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/site/Buttons";
import { SectionLabel } from "@/components/site/SectionLabel";
import { disciplines } from "@/data/disciplines";
import { addressOneLine, site } from "@/data/site";

/**
 * Enquiry form. The project has no form backend, so submitting prepares an email
 * to the company address in the visitor's mail client rather than silently
 * discarding the enquiry.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const type = String(f.get("type") || "General enquiry");
    const subject = `Project enquiry — ${type}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Company: ${f.get("company") || "-"}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Project type: ${type}`,
      "",
      String(f.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form id="enquiry" onSubmit={submit} className="form" noValidate={false}>
      <div className="form-grid">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Company" name="company" autoComplete="organization" />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <div className="field field-full">
          <label htmlFor="f-type">Project type</label>
          <select id="f-type" name="type" defaultValue="">
            <option value="" disabled>
              Select a discipline
            </option>
            {disciplines.map((d) => (
              <option key={d.slug} value={d.title}>
                {d.title}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="f-message">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="f-message"
            name="message"
            rows={5}
            required
            placeholder="Facility, process, size, current problem, timeline…"
          />
        </div>
      </div>
      <div className="form-foot">
        <button type="submit" className="btn btn-primary">
          <span className="btn-label">Send enquiry</span>
          <Arrow />
        </button>
        <p className="t-tech max-w-xs" role="status">
          {sent
            ? "Your email app should now open with the enquiry prepared."
            : "Submitting opens your email app with the enquiry prepared."}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `f-${name}`;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} />
    </div>
  );
}

export function ContactDetails() {
  return (
    <dl className="contact-details">
      <div>
        <dt className="t-tech">Phone</dt>
        <dd>
          <a href={site.phoneHref}>{site.phone}</a>
        </dd>
      </div>
      <div>
        <dt className="t-tech">Email</dt>
        <dd>
          <a href={site.emailHref}>{site.email}</a>
        </dd>
      </div>
      <div>
        <dt className="t-tech">WhatsApp</dt>
        <dd>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            {site.whatsapp}
          </a>
        </dd>
      </div>
      <div>
        <dt className="t-tech">Address</dt>
        <dd>
          <address className="not-italic">{addressOneLine}</address>
        </dd>
      </div>
      <div>
        <dt className="t-tech">Follow</dt>
        <dd className="flex gap-5">
          {site.social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener">
              {s.label}
            </a>
          ))}
        </dd>
      </div>
    </dl>
  );
}

export function ContactSection({
  index = "14",
  headingLevel = "h2",
}: {
  index?: string;
  headingLevel?: "h1" | "h2";
}) {
  const H = headingLevel;
  return (
    <section className="section-y contact" aria-labelledby="contact-title">
      <div className="container-x">
        <SectionLabel index={index}>Contact</SectionLabel>
        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <H id="contact-title" className="t-h2">
              Talk to our
              <br />
              engineers.
            </H>
            <p className="t-body mt-6 max-w-md">
              Share the facility, the process and the problem. An engineer will review the
              requirement and respond.
            </p>
            <div className="mt-12">
              <ContactDetails />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
