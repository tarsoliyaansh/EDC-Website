# E-Cell Website

A fully responsive, static website for your college Entrepreneurship Cell built with HTML, CSS, and vanilla JavaScript.

## Structure

- `index.html` – main page with sections: Hero, About, Initiatives, Events, Gallery, Team, Sponsors, Testimonials, Newsletter, Contact
- `assets/css/style.css` – styles, responsive grid, components
- `assets/js/main.js` – mobile nav, event filters, gallery lightbox, forms
- `assets/img/logo.svg` – placeholder logo

## Quick start

1. Open `index.html` directly in a browser, or run a lightweight server:
   - VS Code: Live Server extension → "Open with Live Server"
   - Node: `npx serve` (or `npx http-server`)
2. Edit the content in `index.html` (replace placeholder names, dates, emails, sponsors).
3. Replace `ecell@example.edu` with your official email in the Contact section.

## Customize branding

- Logo: replace `assets/img/logo.svg` with your logo (keep the same filename or adjust path in `index.html`).
- Colors: adjust CSS variables at the top of `assets/css/style.css` (e.g., `--primary`).
- Fonts: swap the Google Fonts link in `index.html` if needed.

## Forms

- Newsletter and Contact use demo (client-side) submissions. To connect to a backend or form service:
  - Replace the simulated timeouts in `assets/js/main.js` with a `fetch('YOUR_ENDPOINT', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })` call.
  - Or connect to services like Formspree, Google Forms (Apps Script), or your campus server.

## Deploy

- GitHub Pages:
  - Commit this folder to a repo → Settings → Pages → Deploy from `main`/`root`.
- Netlify / Vercel:
  - Drag-and-drop the folder to Netlify, or import repo to Vercel (no build step needed).

## Accessibility & responsiveness

- Mobile-first layout with flexible grids and accessible controls.
- Reduced motion friendly: keep transitions minimal or add `@media (prefers-reduced-motion: reduce)` rules as needed.

## Maintenance checklist

- Update Events regularly under the `#events` section.
- Keep Team, Sponsors, and Testimonials current.
- Verify external image links or host your own images in `assets/`.

## License

MIT – feel free to adapt for your E-Cell.
