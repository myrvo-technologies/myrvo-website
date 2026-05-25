import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

const SERVICES = [
  {
    icon: "code",
    title: "Web Development",
    desc: "Modern, fast, secure websites built with the latest frameworks. We deliver pixel-perfect designs that convert visitors into customers.",
    points: ["React, Next.js, and Vite expertise", "SEO-ready and accessible by default", "Performance-optimised builds"],
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android. From MVP to scale-ready apps with millions of users.",
    points: ["React Native and Flutter", "App Store and Play Store publishing", "Push notifications and offline support"],
  },
  {
    icon: "brain",
    title: "AI Systems",
    desc: "Custom AI integrations, chatbots, and automation tools that genuinely solve business problems — not buzzword-driven.",
    points: ["LLM integrations and RAG pipelines", "AI chatbots and copilots", "Workflow automation"],
  },
  {
    icon: "cloud",
    title: "Cloud SaaS",
    desc: "End-to-end SaaS platforms with authentication, billing, dashboards, and scaling baked in from day one.",
    points: ["Multi-tenant architecture", "Stripe billing and subscriptions", "Auto-scaling on AWS / GCP / Azure"],
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    desc: "Beautiful, usable interfaces. From wireframes to design systems, we craft experiences that feel intentional.",
    points: ["Design systems in Figma", "User research and prototyping", "Brand and visual identity"],
  },
  {
    icon: "robot",
    title: "Automation Tools",
    desc: "Custom automation to remove busywork — internal tools, integrations, and pipelines that save hours every week.",
    points: ["Internal admin panels", "API integrations and webhooks", "Scheduled jobs and reporting"],
  },
];

// Some icons in the array above use names not yet in our Icon set ("brain")
// We'll fall back to existing icons. Map non-existent ones to safe alternatives:
const ICON_FALLBACK = { brain: "robot" };

function safeIcon(name) {
  return ICON_FALLBACK[name] || name;
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">What we offer</span>
          <h1>Services built for shipping</h1>
          <p>
            From web and mobile to AI and SaaS — every service ships with the
            same standard of craft, security, and reliability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES.map((s, i) => (
            <div className="service-row" key={s.title}>
              <div className="service-row-text">
                <div className="icon-tile">
                  <Icon name={safeIcon(s.icon)} size={26} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-visual">
                <div style={{ textAlign: "center", color: "var(--text-faint)", padding: "24px" }}>
                  <Icon name={safeIcon(s.icon)} size={72} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Ready to start a project?</h2>
              <p>Tell us about your idea — we usually respond within a day.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
