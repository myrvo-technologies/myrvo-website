import { useState } from "react";
import Icon from "../components/Icon.jsx";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Client-side validation
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Please enter a message";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    // Defensive check: env var missing means form is broken
    if (!ACCESS_KEY) {
      setSubmitError(
        "Contact form isn't configured yet. Please email us directly at info@myrvo.tech."
      );
      return;
    }

    setSubmitting(true);
    try {
      // Build FormData from the form element directly. This naturally handles
      // the honeypot checkbox: when unchecked, it isn't included in FormData
      // at all. Real users never tick it; bots that auto-fill all fields do,
      // and Web3Forms blocks those submissions.
      const payload = new FormData(e.target);
      payload.append("access_key", ACCESS_KEY);
      payload.append("from_name", "Myrvo Website Contact Form");
      payload.append("subject", `New message from ${form.name} via myrvo.tech`);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSubmitError(
          data.message ||
            "Something went wrong sending your message. Please try again, or email us directly at info@myrvo.tech."
        );
      }
    } catch (err) {
      setSubmitError(
        "Network error — your message didn't send. Please check your connection and try again, or email us directly at info@myrvo.tech."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Let's start a conversation</h1>
          <p>
            Tell us about your project, your goals, or just say hi. We typically
            reply within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon-tile">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@myrvo.tech</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-tile">
                  <Icon name="mapPin" size={20} />
                </div>
                <div>
                  <h4>Office</h4>
                  <p>Leamington Spa, United Kingdom</p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "16px",
                  padding: "20px",
                  background: "var(--bg-muted)",
                  borderRadius: "var(--r-lg)",
                }}
              >
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: "6px" }}>
                  Response time
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-soft)", margin: 0 }}>
                  We aim to reply to every message within 24 hours, Monday to Friday.
                </p>
              </div>
            </div>

            <div className="contact-form">
              {sent && (
                <div className="form-success" role="status">
                  Thanks — we've got your message. We'll be in touch within one
                  business day.
                </div>
              )}

              {submitError && !sent && (
                <div
                  className="form-success"
                  role="alert"
                  style={{
                    background: "#fee2e2",
                    borderColor: "#fecaca",
                    color: "#991b1b",
                  }}
                >
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot: hidden from real users via inline styles + aria-hidden.
                    Bots fill all fields including this one; Web3Forms rejects them. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 0,
                    height: 0,
                    opacity: 0,
                  }}
                />

                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={update("name")}
                    disabled={submitting}
                    autoComplete="name"
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={update("email")}
                    disabled={submitting}
                    autoComplete="email"
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea"
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={update("message")}
                    disabled={submitting}
                  />
                  {errors.message && (
                    <div className="form-error">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full btn-lg"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
