import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Cookie Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-doc">
          <p>
            This Cookie Policy explains how Myrvo Technologies Ltd uses cookies
            and similar tracking technologies on our website.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember your preferences and how you
            use the site.
          </p>

          <h2>2. Cookies we use</h2>

          <h3>Essential cookies</h3>
          <p>
            Required for the website to function. These include authentication
            cookies (set by Firebase) when you sign in to a protected area. You
            cannot opt out of essential cookies — the site won't work without
            them.
          </p>

          <h3>Functional cookies</h3>
          <p>
            Remember your preferences (such as language or display settings) to
            improve your experience. We currently set none, but may do so in
            future.
          </p>

          <h3>Analytics cookies (optional)</h3>
          <p>
            If we add analytics in future (for example, Google Analytics or
            Plausible), they help us understand which pages are visited most so
            we can improve them. These will only be set with your consent.
          </p>

          <h2>3. Third-party services</h2>
          <p>Our website may use the following third-party services that set cookies:</p>
          <ul>
            <li><strong>Firebase (Google)</strong> — for authentication when you sign in</li>
            <li><strong>Vercel</strong> — for hosting and basic anonymous traffic analytics</li>
            <li><strong>Google Fonts</strong> — for serving the Inter typeface</li>
          </ul>

          <h2>4. How to control cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers
            allow you to:
          </p>
          <ul>
            <li>See what cookies are stored and delete them</li>
            <li>Block third-party cookies</li>
            <li>Block all cookies (this may break parts of the site)</li>
            <li>Clear cookies when you close the browser</li>
          </ul>
          <p>
            Useful links:{" "}
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Chrome</a>,{" "}
            <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a>,{" "}
            <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noreferrer">Firefox</a>,{" "}
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Edge</a>.
          </p>

          <h2>5. Changes to this policy</h2>
          <p>
            We may update this Cookie Policy from time to time. The "last
            updated" date at the top reflects when changes were made.
          </p>

          <h2>6. Related policies</h2>
          <p>
            See also our <Link to="/privacy">Privacy Policy</Link> and{" "}
            <Link to="/terms">Terms of Service</Link>.
          </p>

          <h2>7. Contact</h2>
          <p>
            Questions about cookies?{" "}
            <a href="mailto:info@myrvo.tech">info@myrvo.tech</a>.
          </p>

          <div className="legal-note">
            <strong>Note:</strong> This template covers the basics. If you add
            analytics, advertising, or session-recording tools, you'll need a
            consent banner (cookie banner) to comply with UK PECR and GDPR.
            Have a solicitor review before adding tracking.
          </div>
        </div>
      </section>
    </>
  );
}
