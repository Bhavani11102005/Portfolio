# Bhavani Final Portfolio

Recruiter-ready React portfolio for Tadimalla Bhavani.

## Included
- Home, About, Experience, Skills, Projects, Resume and Contact
- Four role-specific resumes
- GitHub links for all six projects
- Primary GitHub profile: https://github.com/Bhavani-2005
- Click-to-call phone link
- Click-to-email link
- Contact form using FormSubmit
- Responsive layout

## Run locally

```bash
npm install
npm start
```

Build for deployment:

```bash
npm run build
```

## Render

Recommended settings for this Create React App project:
- Build command: `npm install && npm run build`
- Publish directory: `build`
- Branch: `main`
- Static Site

## Contact form

The Contact page uses FormSubmit to send messages to `vasundhara.tadimalla@gmail.com` without exposing an email-service API key in the React frontend.

On the first submission, FormSubmit may send a one-time activation email to the destination inbox. Activate it once, then future messages can be delivered through the form.

If the Render URL changes, update the hidden `_next` value in `src/pages/Contact.jsx`.
