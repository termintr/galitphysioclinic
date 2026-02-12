## Galit Physio Clinic – Website

A single-page React application for **Galit Richter – Physiotherapy**, focused on:

- **Pelvic floor physiotherapy for women**
- **Vestibular rehabilitation (dizziness / BPPV and related conditions)**
- Clear **clinic information, testimonials, and contact options** (phone, WhatsApp, Facebook, and map).

The site is built with **React + TypeScript + Vite** and is optimized for Hebrew, accessibility, and SEO.

---

### Features

- **Hero section** with image carousel and clear clinic branding.
- **“About” section** describing Galit, training, and specialties.
- **Services sections** for:
  - Pelvic floor conditions and treatments.
  - Vestibular (dizziness) assessment and rehabilitation.
- **Treatment techniques** list with expandable details.
- **Testimonials carousel** with patient recommendations.
- **Contact section** with:
  - Accessible contact form (name, email, message).
  - Integration with **EmailJS** for sending messages.
  - Quick actions: phone call, WhatsApp link, Facebook page, and embedded Google Map.
- **Accessibility & UX**
  - Semantic HTML, ARIA attributes, and keyboard-friendly controls.
  - Right‑to‑left layout for Hebrew content where appropriate.
  - Lazy‑loaded images where possible.
- **Basic analytics hooks** via `trackContent`, `trackForm`, and `trackExternalLink` utilities.

---

### Tech stack

- **Framework**: React + TypeScript
- **Build tool**: Vite
- **Styling**: CSS (with responsive layout and RTL support)
- **Email delivery**: [EmailJS](https://www.emailjs.com/)
- **Analytics hooks**: custom utilities in `src/utils/analytics`

---

### Getting started (development)

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   By default, Vite runs on `http://localhost:5173` (or the next free port).

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview the production build locally**

   ```bash
   npm run preview
   ```

---

### EmailJS configuration

The contact form in `MainPage.tsx` uses EmailJS:

- **Service ID**: `service_galitclinic`
- **Template ID**: `template_contact_clinic`
- **Public key**: configured directly in the component.

To use your own EmailJS account:

- Create an EmailJS service and email template.
- Replace the service ID, template ID, and public key in `MainPage.tsx` where `emailjs.send` is called.
- Make sure the template fields (`from_name`, `from_email`, `message`, `to_email`) match what you configure in EmailJS.

For better security in the future, you may want to move these IDs/keys to environment variables and read them from `import.meta.env`.

---

### Project structure (high level)

- `src/main.tsx` – Application entry point.
- `src/components/MainPage.tsx` – Main single-page layout for the clinic:
  - Hero carousel, about, services, techniques, testimonials, contact form, and map.
- `src/components/Footer.tsx` – Site footer.
- `src/utils/analytics.ts` – Tracking helpers for content interactions, form events, and external links.
- `public/assets/` – Images for carousel, about section, and testimonials.

---

### Deployment

The app is a static site after `npm run build`, so you can deploy the contents of the `dist` folder to any static hosting provider, for example:

- Netlify
- Vercel
- GitHub Pages
- Any static web server (e.g., Nginx, Apache, S3 + CloudFront)

Follow your host’s instructions to point to the `dist` folder as the build output.

---

### Contact

- **Clinic**: Galit Physio Clinic – Galit Richter
- **Phone**: `052‑6598076`
- **WhatsApp**: `https://wa.me/972526598076`
- **Facebook**: see link in the site’s contact section

For any issues with the site itself (bugs, content changes, etc.), open an issue in this repository or contact the developer directly.
