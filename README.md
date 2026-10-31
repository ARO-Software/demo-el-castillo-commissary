# El Castillo Commissary: website concept

A bilingual (English / Español) website concept for **El Castillo Commissary**, a City of Houston–approved, 24/7 food truck commissary at 6345 Skyline Dr, Houston, TX. Built by ARO Solutions.

**Live:** https://aro-software.github.io/demo-el-castillo-commissary/

## What's in it

- **Night-shift hero:** a live Houston clock ("It's 2:14 AM in Houston") that flips between night and day shift with the local time, plus a rotating city-approved stamp.
- **Pick an hour, we're open:** a 24-hour dial. Drag through the day and see what operators are doing at that hour; the sign always says OPEN. It starts on the current Houston hour.
- **Answer-first sections** for search and AI tools: what a commissary is, Houston's rules, services, plans, FAQ.
- **Services grid** with a flashlight hover, **plans with published pricing**, a blueprint-style **truck builds** section, real Google reviews and a stylized location map.
- **Reserve form** that turns the request into a prefilled text message to the commissary's number (the visitor still taps send).
- **EN / ES toggle** on every element, remembered per visitor; `?lang=es` opens it in Spanish.
- Phone: sticky Call · Directions · Reserve bar.
- Structured data (LocalBusiness, services, FAQ), `llms.txt`, sitemap. The page is `noindex` so the demo never competes with the real site.

## Before going live

Values to confirm with El Castillo: membership price (shown as a blank), the exact hours (the yard vs. the store), plan contents, Spanish-speaking staff, and the truck-build offer.

## Run locally

Any static server works:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.
