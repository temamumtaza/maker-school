# Maker School LMS

Learning workspace pribadi untuk menavigasi dan tracking course Maker School dari Google Drive.

## Local development

```bash
npm install
npm run validate:course
npm run typecheck
npm run lint
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Production: https://temamumtaza.github.io/maker-school/

Setiap push ke branch `main` menjalankan validasi manifest, lint, typecheck, build, lalu deploy otomatis ke GitHub Pages.

## Scope

UI dan alur belajar mengikuti baseline LMS Akademi Creator: sidebar Course → Bab → Subbab folder Drive → Topik video, halaman ringkasan, pencarian, status selesai, progress per bab/subbab/course, embed video Google Drive, serta export/import progress JSON.

Progress disimpan di `localStorage` browser tanpa login, backend, atau database. Materi non-video dibuka dari link Drive.

## Course source

Source folder: https://drive.google.com/drive/folders/1wetJ3HiT1pwIwyiE_Tc1rD3h6CPHwRZW

Manifest saat ini mencakup 4 bab, 98 subbab folder Drive, 234 video, dan 237 materi tambahan. File promosi `Watch Order.pdf` dan `10,000$ Courses Free Download.pdf` untuk Beyond The Horizon sengaja dikeluarkan dari manifest.
