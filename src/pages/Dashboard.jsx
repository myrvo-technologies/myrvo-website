import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const name = user?.displayName || user?.email || "there";

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span className="eyebrow">Dashboard</span>
            <h1>Welcome back, {name}.</h1>
            <p style={{ maxWidth: "640px", marginTop: "12px" }}>
              This is the protected area. It's gated by Firebase Auth and ready
              for the SaaS product you'll build on top of it — project tracking,
              AI tools, analytics, billing.
            </p>
          </div>
          <button onClick={handleLogout} className="btn btn-outline">
            Log out
          </button>
        </div>

        <div className="dash-grid">
          <div className="dash-card">
            <div className="label">Active Projects</div>
            <div className="value">—</div>
            <div className="delta" style={{ color: "var(--text-faint)" }}>
              Connect Firestore to populate
            </div>
          </div>
          <div className="dash-card">
            <div className="label">Team Members</div>
            <div className="value">—</div>
            <div className="delta" style={{ color: "var(--text-faint)" }}>
              Connect Firestore to populate
            </div>
          </div>
          <div className="dash-card">
            <div className="label">Monthly Revenue</div>
            <div className="value">—</div>
            <div className="delta" style={{ color: "var(--text-faint)" }}>
              Connect Stripe to populate
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "48px",
            padding: "28px",
            background: "var(--bg-muted)",
            borderRadius: "var(--r-xl)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Next steps</h3>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-soft)", lineHeight: 2 }}>
            <li>Show the Login + Sign Up buttons in the navbar (edit <code>src/components/Navbar.jsx</code>)</li>
            <li>Wire Firestore to persist real project data</li>
            <li>Add Stripe for subscription billing</li>
            <li>Build your admin panel and user-management UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
