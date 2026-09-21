import "./Contact.css";

const github = "https://github.com/Bhavani-2005";
const linkedin =
  "https://www.linkedin.com/in/tadimalla-bhavani-03206b32b";

const email = "vasundhara.tadimalla@gmail.com";
const phone = "+917287905798";

export default function Contact() {
  return (
    <section className="page-shell contact-page">

      <div className="contact-card glass-card">

        <div className="section-kicker">
          Contact
        </div>

        <h1 className="section-title">
          Let&apos;s build something <span>useful.</span>
        </h1>

        <p className="section-subtitle">
          Have an opportunity, project, or question?
          Send me a message and I&apos;ll get back to you.
        </p>

        <div className="contact-layout">

          {/* ================= FORM ================= */}

          <form
            className="contact-form"
            action={`https://formsubmit.co/${email}`}
            method="POST"
          >

            <input
              type="hidden"
              name="_subject"
              value="Portfolio contact — new message"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="https://portfolio-6kr5.onrender.com/contact"
            />

            <label>
              Name

              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Subject

              <input
                name="subject"
                type="text"
                placeholder="Opportunity / project / question"
                required
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </label>

            <button
              className="primary-btn contact-submit"
              type="submit"
            >
              Send Message <span>↗</span>
            </button>

          </form>

          {/* ================= CONTACT DETAILS ================= */}

          <div className="contact-details">

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              className="contact-item"
            >
              <span className="contact-icon">
                @
              </span>

              <span>
                <small>Email</small>
                <strong>{email}</strong>
              </span>

              <b>↗</b>
            </a>

            {/* PHONE */}
            <a
              href={`tel:${phone}`}
              className="contact-item"
            >
              <span className="contact-icon">
                ☎
              </span>

              <span>
                <small>Phone</small>
                <strong>+91 7287905798</strong>
              </span>

              <b>↗</b>
            </a>

            {/* LINKEDIN */}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                in
              </span>

              <span>
                <small>LinkedIn</small>
                <strong>Connect with me</strong>
              </span>

              <b>↗</b>
            </a>

            {/* ONLY ONE GITHUB */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                GH
              </span>

              <span>
                <small>GitHub</small>
                <strong>View my profile</strong>
              </span>

              <b>↗</b>
            </a>

          </div>
        </div>

        <div className="contact-footer-note">
          For the message form, the first submission may require
          a one-time FormSubmit activation email.
        </div>

      </div>

    </section>
  );
}