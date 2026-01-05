# 🚀 Deployment Guide - Kartu Kata

## Production URL
🌐 **Live**: https://kartu-kata.vercel.app

## Pre-Deployment Checklist

### ✅ SEO Configuration Complete
- [x] Comprehensive metadata (title, description, keywords)
- [x] Open Graph tags untuk social media sharing
- [x] Twitter Card support
- [x] Structured Data (JSON-LD) untuk search engine rich snippets
- [x] Dynamic sitemap di `/sitemap.xml`
- [x] Robots.txt optimized
- [x] PWA manifest.json
- [x] Canonical URLs
- [x] SVG placeholders (og-image.svg, icon-512.svg)

### ✅ Performance Optimizations
- [x] React Compiler enabled
- [x] GPU acceleration untuk animations
- [x] useReducedMotion untuk accessibility
- [x] Specific CSS transitions (bukan `transition: all`)
- [x] Code splitting otomatis via Next.js

### ✅ Build Verification
```bash
npm run build
# Status: ✓ Compiled successfully
# All routes: Static prerendered
```

## Deployment Steps

### Via Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: Complete SEO implementation"
   git push origin main
   ```

2. **Connect to Vercel**
   - Login ke [vercel.com](https://vercel.com)
   - Import repository
   - Auto-deploy akan trigger setiap push ke main

3. **Verify Domain**
   - Pastikan domain: `https://kartu-kata.vercel.app`
   - Check Custom Domain settings jika pakai domain sendiri

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Post-Deployment Verification

### 1. SEO Testing
- [ ] Google Search Console: Submit sitemap
- [ ] Meta Tags Validator: https://metatags.io/
- [ ] Open Graph Debugger: https://www.opengraph.xyz/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator

### 2. Performance Testing
- [ ] Lighthouse Score (Target: 90+ all categories)
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Web Vitals: Check Core Web Vitals

### 3. Functionality Testing
- [ ] Landing page loads correctly
- [ ] Mode selection (Teman/Pasangan) works
- [ ] Card flip animation smooth
- [ ] Random questions generated
- [ ] Back navigation works
- [ ] Mobile responsive

### 4. PWA Testing
- [ ] Install prompt muncul di mobile
- [ ] Manifest.json loaded correctly
- [ ] Icons displayed properly
- [ ] Offline fallback (optional, bisa ditambah service worker)

## Environment Variables

**Note**: Project ini tidak memerlukan environment variables karena menggunakan JSON files lokal.

## Custom Domain Setup (Optional)

Jika ingin custom domain:

1. **Di Vercel Dashboard**
   - Settings → Domains
   - Add custom domain
   - Follow DNS configuration

2. **Update Files**
   - Update `metadataBase` di `src/app/layout.tsx`
   - Update sitemap URL di `public/robots.txt`
   - Update `url` di `src/components/StructuredData.tsx`

## Monitoring

### Analytics (Optional)
Tambahkan Google Analytics atau Vercel Analytics:

```bash
npm install @vercel/analytics
```

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Error Tracking (Optional)
Setup Sentry untuk production error monitoring:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## SEO Submission

### Google Search Console
1. Verify ownership: https://search.google.com/search-console
2. Submit sitemap: `https://kartu-kata.vercel.app/sitemap.xml`
3. Request indexing untuk homepage

### Bing Webmaster Tools
1. Verify ownership: https://www.bing.com/webmasters
2. Submit sitemap
3. Submit URL

## Update Strategy

### Content Updates (Questions)
1. Edit JSON files di `src/db/`
2. Commit & push
3. Auto-deploy via Vercel

### Feature Updates
1. Develop locally
2. Test dengan `npm run build`
3. Push ke GitHub
4. Verify production deployment

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next
npm run build
```

### Missing Images
- Pastikan SVG files di `/public/`
- Check file permissions
- Verify paths di metadata

### SEO Not Working
- Wait 24-48 hours untuk indexing
- Force recrawl via Search Console
- Check robots.txt tidak block

## Performance Benchmarks

Target metrics:
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms

## Security

- [x] No sensitive data dalam code
- [x] No API keys required
- [x] Static generation (no server vulnerabilities)
- [x] HTTPS enforced by Vercel

## Backup & Recovery

Vercel auto-saves deployments:
- Rollback available via Dashboard → Deployments
- Git history sebagai backup code
- JSON files version controlled

---

**Last Updated**: 2025
**Status**: ✅ Production Ready
**Build**: Successful
**Deployment**: Vercel
