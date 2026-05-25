import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

const VALUES = [
  {
    icon: "lightbulb",
    title: "Innovation first",
    desc: "We push boundaries with modern tools and creative engineering to build what's next.",
  },
  {
    icon: "shield",
    title: "Built to last",
    desc: "Every product is engineered for reliability, security, and long-term maintainability.",
  },
  {
    icon: "users",
    title: "Partners, not vendors",
    desc: "We treat your business like our own and stay invested long after launch.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Myrvo Technologies</span>
          <h1>We turn ideas into powerful digital experiences.</h1>
          <p>
            Founded to help businesses and startups transform ambitious ideas
            into shipping products — combining creativity, engineering, and
            craft.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container about-centered">
          <span className="eyebrow">Our story</span>
          <h2>From an idea to a studio.</h2>
          <p>
            Myrvo started with a simple belief: small, focused teams can build
            software that out-competes bloated engineering orgs. Today we
            partner with founders, operators, and enterprise teams to design,
            build, and scale digital products end-to-end.
          </p>
          <p>
            From AI-powered tools to mobile apps and cloud platforms — every
            project gets the same craftsmanship.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-muted)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>Our values</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title} style={{ background: "#ffffff" }}>
                <div className="icon-tile">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Want to know more?</h2>
              <p>Reach out — we'd love to talk about what you're building.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
