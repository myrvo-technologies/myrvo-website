import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

const FEATURES = [
  {
    icon: "lightbulb",
    title: "Innovative Solutions",
    desc: "We use the latest technologies to build scalable and future-ready solutions.",
  },
  {
    icon: "shield",
    title: "Quality & Reliability",
    desc: "We are committed to delivering high-quality products that our clients can rely on.",
  },
  {
    icon: "users",
    title: "Customer Focused",
    desc: "Our clients are at the heart of everything we do. Your success is our priority.",
  },
  {
    icon: "globe",
    title: "Global Vision",
    desc: "We aim to create a global impact through technology, innovation and excellence.",
  },
];

const SERVICES = [
  {
    icon: "code",
    title: "Web Development",
    desc: "We build fast, secure and modern websites that represent your brand.",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    desc: "We create powerful mobile apps for Android and iOS platforms.",
  },
  {
    icon: "monitor",
    title: "Software Development",
    desc: "Custom software solutions built to streamline your business operations.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly designs that provide great user experiences.",
  },
  {
    icon: "headset",
    title: "IT Consulting",
    desc: "We provide expert advice to help you make the right technology decisions.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Innovate. Build. Deliver.</span>
            <h1>Building Digital Solutions for a Better Tomorrow</h1>
            <p className="lead">
              Myrvo Technologies is a forward-thinking technology company
              delivering innovative software, web, and mobile solutions that
              empower businesses to grow and succeed.
            </p>
            <div className="hero-cta">
              <Link to="/services" className="btn btn-primary btn-lg">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Modern dashboard on laptop"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <div className="icon-tile">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">About Myrvo Technologies</span>
            <h2>We turn ideas into powerful digital experiences.</h2>
            <p>
              Myrvo Technologies was founded with a mission to help businesses
              and startups transform their ideas into powerful digital products.
              We combine creativity, innovation and technical expertise to
              deliver solutions that make a difference.
            </p>
            <Link to="/about" className="btn btn-primary">
              Read More About Us
            </Link>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern Myrvo office space"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>What We Do</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="icon-tile">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Let's build something great together</h2>
              <p>Have a project in mind? We'd love to hear about it.</p>
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
