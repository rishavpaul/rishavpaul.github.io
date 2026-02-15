# Rishav Paul - Professional Portfolio

A modern, SEO-optimized portfolio and blog built with Astro and Tailwind CSS, designed for discoverability by recruiters and AI agents.

## 🚀 Live Site

- **Production:** https://rishavpaul.dev
- **Staging:** https://rishavpaul.github.io

## 🎨 Design System

Built with Tailwind CSS v4 featuring:
- Modern, professional color palette (Blues, Cyans, Purples)
- Responsive design (mobile-first)
- Smooth animations and transitions
- Accessibility-focused components
- Sticky navigation with backdrop blur

## 📄 Pages

### Homepage (`/`)
- Hero section with gradient text effect
- Capabilities showcase (3-column grid)
- Social links (GitHub, LinkedIn, Email)
- Featured work CTA section

### About (`/about`)
- Professional background section
- Areas of expertise breakdown
- Technologies & tools grid
- Personal interests

### Projects (`/projects`)
- Project showcase cards
- Technology tags
- Links to GitHub/demos/case studies
- Open source contributions section

### Resume (`/resume`)
- Structured work experience timeline
- Technical skills categorization
- Education section
- Downloadable PDF link (add your PDF to `/public/resume.pdf`)
- JSON-LD structured data for machine reading

### Blog (`/blog`)
- Markdown-based blog posts
- RSS feed auto-generated
- SEO-optimized post pages

## 🔍 SEO & Discoverability Features

### For Search Engines
- ✅ Semantic HTML throughout
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Canonical URLs
- ✅ Sitemap auto-generated
- ✅ robots.txt configured
- ✅ Fast page load (static site)

### For AI Agents & Recruiters
- ✅ JSON-LD structured data (Person schema)
- ✅ Machine-readable resume data
- ✅ Keywords in content for tech stack discovery
- ✅ Clear semantic structure
- ✅ Professional metadata

## 🛠 Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS v4
- **Hosting:** GitHub Pages
- **Domain:** Cloudflare DNS
- **Analytics:** (Add your preferred analytics)

## 📝 Content Customization

Replace placeholder content in:

1. **`src/consts.ts`** - Update social links, job title, keywords
2. **Homepage** - Fill in your intro, capabilities descriptions
3. **About page** - Add your background, expertise, tech stack
4. **Projects page** - Add your actual projects with links
5. **Resume page** - Add work experience, education, skills
6. **Blog posts** - Write technical articles in `/src/content/blog/`

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

Automatic deployment via GitHub Actions to GitHub Pages on every push to `main`.

## 🎯 Next Steps

1. **Personalize content** - Replace all `[placeholder]` text
2. **Add projects** - Showcase your best work
3. **Write blog posts** - Share technical insights
4. **Add resume PDF** - Place in `/public/resume.pdf`
5. **Configure analytics** - Add Google Analytics or Plausible
6. **Update social links** - Add your actual GitHub/LinkedIn URLs
7. **Add testimonials** (optional) - Create a new section
8. **Add case studies** (optional) - Deep dives into major projects

## 📊 Analytics & Tracking

To add analytics:
- Google Analytics: Add to `src/components/BaseHead.astro`
- Plausible: Add script tag to BaseHead
- Fathom: Follow Fathom setup docs

## 🔗 Important Links

- Astro Docs: https://docs.astro.build
- Tailwind Docs: https://tailwindcss.com/docs
- GitHub Pages: https://pages.github.com
- Schema.org (Structured Data): https://schema.org

---

Built with Astro 🚀 | Styled with Tailwind CSS 💙
