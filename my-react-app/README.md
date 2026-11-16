# Portofolio Romario Katagame

Website portofolio satu halaman yang dibuat dengan React, Vite, dan CSS biasa.
Tidak ada dependensi UI tambahan yang perlu dipasang. Ilustrasi potret disimpan
secara lokal di `src/assets/romario-portrait.svg`; Google Fonts membutuhkan
koneksi internet agar font Playfair Display dan DM Sans dapat dimuat.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Periksa hasil produksi dan aturan ESLint dengan:

```bash
npm run build
npm run lint
```

## Mengubah data portofolio

Konten nama, keahlian, proyek, pendidikan, dan tautan disimpan terpisah dari
komponen di `src/data/portfolioData.js`. Ganti URL demo dan repositori yang
masih kosong dengan tautan proyek yang benar. Isi `contact.email` dan
`contact.linkedinUrl` saat alamat kontak tersedia. Form saat ini membuka
aplikasi email melalui `mailto:` setelah alamat email dikonfigurasi; form belum
mengirim data ke backend.

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Impor repository tersebut di Vercel dan atur **Root Directory** ke
   `my-react-app`.
3. Gunakan **Build Command** `npm run build` dan **Output Directory** `dist`.
   Vercel akan mendeteksi Vite secara otomatis.
4. Deploy. Setiap push berikutnya ke branch yang terhubung akan memicu deploy
   baru.
