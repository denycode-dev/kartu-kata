# 🃏 Kartu Kata

Aplikasi web interaktif untuk menghasilkan pertanyaan seru yang membantu mencairkan suasana saat nongkrong dengan teman atau memperdalam hubungan dengan pasangan.

🌐 **Live Demo**: [https://kartu-kata.vercel.app](https://kartu-kata.vercel.app)

## ✨ Fitur

- 🎴 **200+ Pertanyaan Unik** untuk mode Teman dan Pasangan
- 🎨 **UI Glassmorphism** dengan animasi 3D card flip yang smooth
- 🔄 **Random Question** setiap kali diklik
- 📱 **Responsive Design** - Optimal di semua device
- ⚡ **Performance Optimized** dengan React Compiler dan GPU acceleration
- ♿ **Accessibility** dengan reduced motion support
- 🌍 **SEO Optimized** dengan structured data dan metadata lengkap

## 🎯 Mode Permainan

### 👥 Mode Teman
Pertanyaan santai dan fun untuk:
- Ice breaker di gathering
- Nongkrong santai
- Truth or dare
- Team building

### 💑 Mode Pasangan
Pertanyaan deep talk untuk:
- Date night yang berkesan
- Memperdalam hubungan
- Mengenal pasangan lebih dalam
- Quality time berkualitas

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/denycode-dev/kartu-kata.git

# Install dependencies
cd kartu-kata
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
kartu-kata/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout dengan metadata
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles
│   │   └── sitemap.ts          # Dynamic sitemap
│   ├── components/
│   │   ├── GameCard.tsx        # Card flip component
│   │   └── StructuredData.tsx  # JSON-LD schema
│   ├── lib/
│   │   ├── questions.ts        # Question server actions
│   │   └── utils.ts            # Utility functions
│   └── db/
│       ├── friends.json        # Questions for friends mode
│       └── couples.json        # Questions for couples mode
├── public/
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
└── package.json
```

## 🎨 Customization

### Menambah Pertanyaan Baru

1. Buka file JSON yang sesuai di `src/db/`
2. Tambahkan pertanyaan ke array `questions`
3. Pertanyaan akan otomatis muncul saat random selection

```json
{
  "questions": [
    "Pertanyaan baru kamu di sini",
    "..."
  ]
}
```

### Menambah Mode Baru

1. Update type union di `GameCard.tsx`
2. Tambahkan button di `page.tsx` dengan gradient unik
3. Buat file JSON baru di `src/db/`
4. Update logic di `src/lib/questions.ts`

## 🎭 Animasi

- **Card Flip**: Spring physics dengan stiffness 200, damping 25
- **Question Transition**: Slide animation dari bawah dengan scale effect
- **Reduced Motion**: Animasi disederhanakan untuk accessibility

## 🔍 SEO Features

- ✅ Comprehensive metadata (title, description, keywords)
- ✅ Open Graph tags untuk social sharing
- ✅ Twitter Card support
- ✅ Structured Data (JSON-LD) untuk rich snippets
- ✅ Dynamic sitemap
- ✅ Robots.txt optimized
- ✅ PWA manifest
- ✅ Canonical URLs

## 📊 Performance

- **React Compiler** untuk auto-optimization
- **GPU Acceleration** untuk smooth animations
- **CSS optimizations** dengan specific transitions
- **Reduced motion support** untuk accessibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Deni Irawan Nugraha**

- Website: [https://kartu-kata.vercel.app](https://kartu-kata.vercel.app)

## 🙏 Acknowledgments

- Next.js team untuk amazing framework
- Framer Motion untuk powerful animation library
- Vercel untuk hosting yang reliable

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
