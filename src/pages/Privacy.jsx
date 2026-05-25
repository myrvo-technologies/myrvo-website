import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-doc">
          <p>
            Myrvo Technologies Ltd ("we", "us", "our") is committed to protecting
            and respecting your privacy. This policy explains how we collect and
            use personal information when you visit our website or contact us.
          </p>

          <h2>1. Who we are</h2>
          <p>
            Myrvo Technologies Ltd is a company registered in England &amp; Wales
            (company number 17034685). Our registered office is at Chandos
            Business Centre, Warwick Street, Leamington Spa, CV32 4RJ. For any
            privacy queries, email <a href="mailto:info@myrvo.tech">info@myrvo.tech</a>.
          </p>

          <h2>2. What information we collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Contact information</strong> — name, email address, and message content when you fill in our contact form.</li>
            <li><strong>Account information</strong> — if you create an account, your email and a hashed password (handled by Firebase Authentication).</li>
            <li><strong>Technical data</strong> — IP address, browser type, device information, and pages visited via standard server logs and analytics.</li>
          </ul>

          <h2>3. How we use your information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to enquiries and provide the services you've requested</li>
            <li>Manage and authenticate user accounts</li>
            <li>Improve our website and services</li>
            <li>Send you relevant updates (only if you've opted in)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Legal basis</h2>
          <p>
            Under UK GDPR, we process your data on the basis of: (a) your consent,
            (b) the legitimate interest of running our business, and (c) where
            necessary to fulfil a contract with you.
          </p>

          <h2>5. Sharing your information</h2>
          <p>
            We do not sell your data. We may share it with trusted service
            providers (such as Google / Firebase for authentication, Vercel for
            hosting) who are contractually bound to protect it. We may also
            disclose information if required by law.
          </p>

          <h2>6. Your rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict our processing</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a></li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:info@myrvo.tech">info@myrvo.tech</a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            For details on how we use cookies, see our{" "}
            <Link to="/cookies">Cookie Policy</Link>.
          </p>

          <h2>8. Data retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes
            described above, or as required by law.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The "last updated" date
            above will reflect any changes.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about this policy?{" "}
            <a href="mailto:info@myrvo.tech">info@myrvo.tech</a> or via our{" "}
            <Link to="/contact">contact page</Link>.
          </p>

          <div className="legal-note">
            <strong>Note:</strong> This policy is a starting template. Before
            production launch, have it reviewed by a qualified legal
            professional to ensure full compliance with UK GDPR, the Data
            Protection Act 2018, and your specific business processes.
          </div>
        </div>
      </section>
    </>
  );
}
