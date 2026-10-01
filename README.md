# CyborgTest website

Static, dependency-free website scaffold for CyborgTest.

## Pages

- `/` — product overview
- `/report-server/` — Report Server landing page
- `/manual-step/` — Manual Step landing page
- `/reporter/` — Reporter landing page
- `/docs/` — documentation hub linking to the existing technical docs

## Preview locally

Run any static HTTP server from the repository root, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

The site uses relative links and works when hosted at a domain root or under a GitHub Pages repository path.
