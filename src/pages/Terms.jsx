export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-doc">
          <p>
            Welcome to Myrvo Technologies. These terms ("Terms") govern your use
            of our website and services. By accessing or using our website, you
            agree to be bound by these Terms.
          </p>

          <h2>1. About us</h2>
          <p>
            Myrvo Technologies Ltd is a company registered in England &amp; Wales
            (company number 17034685), with registered office at Chandos Business
            Centre, Warwick Street, Leamington Spa, CV32 4RJ.
          </p>

          <h2>2. Use of our website</h2>
          <p>
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul>
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorised access to any part of the website</li>
            <li>Use the website to transmit harmful code, malware, or spam</li>
            <li>Scrape, copy, or reproduce content without our permission</li>
          </ul>

          <h2>3. Intellectual property</h2>
          <p>
            All content on this website — including text, graphics, logos,
            images, and code — is the property of Myrvo Technologies Ltd or its
            licensors and is protected by UK and international copyright laws.
            You may not reproduce, distribute, or modify any content without our
            prior written permission.
          </p>

          <h2>4. Accounts</h2>
          <p>
            If you create an account on our platform, you are responsible for
            maintaining the confidentiality of your credentials and for any
            activity that occurs under your account. Notify us immediately at{" "}
            <a href="mailto:info@myrvo.tech">info@myrvo.tech</a> of any
            unauthorised use.
          </p>

          <h2>5. Services</h2>
          <p>
            Specific services we provide (web development, mobile development,
            AI systems, etc.) will be governed by separate service agreements
            signed between us and the client. These Terms cover only the use of
            this website.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Myrvo Technologies Ltd is
            not liable for any indirect, incidental, or consequential damages
            arising from your use of the website. Nothing in these Terms
            excludes liability for death, personal injury caused by negligence,
            or fraud.
          </p>

          <h2>7. Third-party links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for the content or practices of these external sites.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of our website is also governed by our Privacy Policy,
            which forms part of these Terms.
          </p>

          <h2>9. Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. The "last updated" date
            above reflects when changes were made. Continued use of the website
            after changes constitutes acceptance.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These Terms are governed by the laws of England &amp; Wales. Any
            disputes will be subject to the exclusive jurisdiction of the courts
            of England &amp; Wales.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these Terms?{" "}
            <a href="mailto:info@myrvo.tech">info@myrvo.tech</a>.
          </p>

          <div className="legal-note">
            <strong>Note:</strong> This is a starter template. Before launching
            paid services or signing client contracts, have these Terms (and
            your service agreements) reviewed by a qualified solicitor.
          </div>
        </div>
      </section>
    </>
  );
}
