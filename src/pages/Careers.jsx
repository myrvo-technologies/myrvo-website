import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

const FUTURE_AREAS = [
  { icon: "code", label: "Engineering" },
  { icon: "palette", label: "Design" },
  { icon: "robot", label: "AI / ML" },
  { icon: "cloud", label: "DevOps" },
];

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Join the team</span>
          <h1>Build the future with Myrvo</h1>
          <p>
            We're a small, focused studio that ships fast and treats craft
            seriously. If that sounds like home, we'd love to hear from you —
            even if no role is open today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* Empty state */}
          <div
            style={{
              background: "var(--bg-muted)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-xl)",
              padding: "48px 36px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                margin: "0 auto 18px",
                borderRadius: 14,
                background: "var(--brand-soft)",
                color: "var(--brand)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon name="users" size={26} />
            </div>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              No open positions right now
            </h2>
            <p style={{ maxWidth: "480px", margin: "0 auto 24px" }}>
              We're growing carefully and will be opening roles soon. If you'd
              like to be considered when we start hiring, send us a note.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get In Touch
            </Link>
          </div>

          {/* Future hiring areas */}
          <div style={{ marginTop: "56px", textAlign: "center" }}>
            <span className="eyebrow">Where we'll be hiring</span>
            <h3 style={{ fontSize: "1.25rem", margin: "8px 0 24px" }}>
              Areas we plan to grow in
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "14px",
              }}
            >
              {FUTURE_AREAS.map((a) => (
                <div
                  key={a.label}
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--r-lg)",
                    padding: "20px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div className="icon-tile" style={{ marginBottom: 0 }}>
                    <Icon name={a.icon} size={20} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
