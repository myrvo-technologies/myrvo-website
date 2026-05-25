import { useState } from "react";
import Icon from "../components/Icon.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Please enter a message";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    // TODO: wire to your backend / Firestore / form service
    // For now we just show a success state.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
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
                <div className="form-success">
                  Thanks — we've got your message. We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={update("name")}
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={update("email")}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="textarea"
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={update("message")}
                  />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary btn-full btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
