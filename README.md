# Adara Relief International — Website Statis

Website **Adara Relief International** yang dibangun ulang menggunakan **Astro 7 + Tailwind CSS v4**.

- ⚡ Static site — super cepat, skor Core Web Vitals tinggi
- 📱 Responsif penuh (mobile → desktop) & aksesibel (WCAG-minded)
- 🔍 SEO lengkap (Open Graph, Twitter Card, JSON-LD, sitemap, robots)
- 🌍 Siap multi-bahasa (struktur konten sudah dipisahkan)
- 🚀 Deploy 1-klik ke Vercel / Netlify / Cloudflare Pages / GitHub Pages

---

## Struktur Proyek

```
adara-web/
├─ public/                 # Aset statis (logo, gambar, robots, manifest)
│  └─ img/
├─ src/
│  ├─ components/          # Komponen (Header, Footer, KartuProgram, dll.)
│  ├─ data/                # ⚙️ SEMUA KONTEN ada di sini
│  │  ├─ site.ts           #    nama, kontak, sosial, statistik, SEO
│  │  ├─ komunitas.ts      #    daftar komunitas (19 entri)
│  │  ├─ program.ts        #    program, visi-misi, legalitas, SDG
│  │  ├─ berita.ts         #    berita & laporan
│  │  └─ faq.ts            #    pertanyaan yang sering diajukan
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/               # index, komunitas, program, berita, tentang, faq, 404
│  └─ styles/global.css    # tema & komponen Tailwind v4
├─ astro.config.mjs
├─ netlify.toml
├─ vercel.json
└─ .github/workflows/      # GitHub Pages Actions
```

## Cara Menjalankan Lokal

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # hasil build di ./dist
npm run preview    # pratinjau build
```

## Cara Mengedit Konten

**Tidak perlu menyentuh halaman.** Semua konten diatur lewat file di `src/data/`:

| Ingin mengubah… | Edit file | Contoh |
|---|---|---|
| Nama, alamat, kontak, sosmed | `src/data/site.ts` | `SITE.address`, `SOCIALS` |
| Statistik beranda | `src/data/site.ts` | `STATS` |
| Daftar komunitas | `src/data/komunitas.ts` | tambah objek di `KOMUNITAS` |
| Program & visi-misi | `src/data/program.ts` | `PROGRAM_PENYALURAN`, `MISI` |
| Berita | `src/data/berita.ts` | tambah objek di `BERITA` |
| FAQ | `src/data/faq.ts` | tambah objek di `FAQ` |
| Logo / gambar | `public/img/` | ganti file dengan nama sama |

Setelah mengubah file data, `npm run build` akan otomatis meregenerate semua halaman.

> **Tips integrasi CMS:** file `src/data/*.ts` bisa diganti dengan fetch ke WordPress REST API
> (`https://adararelief.com/wp-json/wp/v2/...`) atau Sanity/Contentful. Struktur statis ini
> membuat migrasi tersebut mudah karena semua halaman membaca dari satu sumber data.

## Deploy

### Vercel (paling cepat)
1. Push repo ke GitHub/GitLab
2. Import di https://vercel.com/new → pilih repo `adara-web`
3. Vercel mendeteksi Astro otomatis. **Selesai.**

### Netlify
1. Import repo → build command `npm run build`, output dir `dist`
2. (Sudah tersedia `netlify.toml`)

### Cloudflare Pages
Build command: `npm run build` · Output dir: `dist` · Node versi 22.

### GitHub Pages
Repo → **Settings → Pages** → Source: *GitHub Actions*
(workflow `deploy.yml` sudah disiapkan).

## Kustomisasi Tema

Warna, font, dan animasi diatur di `src/styles/global.css` (blok `@theme`).
Palet default: **toska/teal** (`brand`) + **amber** untuk aksi — sesuai warna logo Adara.

## Catatan Domain

Domain & SITE URL diatur di `src/data/site.ts` (`SITE.url`) dan `astro.config.mjs`.
Ganti keduanya jika deploy di domain berbeda.