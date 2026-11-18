# Changelog

Semua perubahan penting pada proyek ini didokumentasikan di sini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
dan proyek ini mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-18

Program "P1 jadi P0": repo dirapikan sampai standar proper.

### Added

- CI GitHub Actions: audit Lighthouse PWA + validasi HTML + cek tautan dokumen.
- `docs/architecture.md` + diagram alur `docs/diagrams/app-flow.svg`.
- Tangkapan layar dari situs live (`docs/screenshots/`) dan video demo satu alur (`docs/demo/demo.mp4`).
- Ikon PWA lokal `icon-192.png` dan `icon-512.png` (maskable) — menggantikan ikon eksternal Flaticon di `manifest.json`.
- `aria-label` pada tombol yang hanya berisi ikon (tambah target, tutup modal/pengaturan, tombol sync).
- Meta description di `index.html`.

### Changed

- `sw.js` v2: precache halaman + library CDN (Tailwind, Font Awesome, html2pdf.js, Chart.js, PeerJS, font Inter) dan runtime cache untuk font Google, supaya mode offline benar-benar jalan; cache lama dibersihkan saat aktivasi.
- README ditulis ulang agar sesuai aplikasi sebenarnya (sebelumnya menyebut `npm install` / `npm run dev`, padahal tidak ada `package.json`).
- PRD ditulis ulang (v2.0) agar mendeskripsikan fitur yang benar-benar ada.
- CHANGELOG ini ditulis ulang: entri lama menyebut Vite + React + Supabase, padahal aplikasi ini HTML statis satu file.
- `.gitignore` dibersihkan dari pola duplikat dan pola regex yang tidak berlaku di gitignore.
- `manifest.json`: `start_url`/`scope`/`id` jadi `./`, tambah deskripsi.

### Fixed

- Fungsi `toggleTheme()` lama yang mati (merujuk elemen `#themeTextIcon` yang tidak ada) dihapus; mesin tema yang aktif adalah `setTheme()` di akhir skrip.

## [1.0.0] - 2026-11-05

### Added

- PWA statis satu file: `index.html` + `manifest.json` + `sw.js`.
- Setup awal: saldo awal + kategori anggaran.
- Dashboard saldo dan sisa anggaran per kategori.
- Transaksi pemasukan/pengeluaran (dengan keterangan dan foto bukti opsional).
- Target menabung (wishlist) dengan progres dan top-up.
- Analitik: donat distribusi pengeluaran + batang arus kas 7 hari terakhir.
- Riwayat transaksi dengan filter tanggal; ekspor PDF dan CSV.
- Sinkronisasi antar perangkat via PeerJS/WebRTC.
- Tema Dark / Light / Pink.
