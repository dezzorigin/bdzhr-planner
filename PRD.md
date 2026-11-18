# PRD — Bdzhr Planner

## 1. Informasi Proyek

| Field | Nilai |
|---|---|
| Nama Proyek | Bdzhr Planner |
| Live | https://planku.pages.dev |
| Tech Stack | HTML/CSS/JavaScript murni (satu file `index.html`), tanpa build step |
| Status | Live — fungsional penuh, data lokal |
| Penanggung Jawab | Nabil Aulia Dika (dezzorigin) |
| Versi Dokumen | 2.0 (ditulis ulang 2026-11-18 agar sesuai aplikasi sebenarnya) |
| Tanggal | 2026-11-18 |

## 2. Latar Belakang

Perencana keuangan pribadi untuk satu pengguna yang butuh cara cepat mencatat uang masuk/keluar per kategori anggaran, menabung untuk target barang, dan melihat ke mana uang pergi — tanpa membuat akun, tanpa server, dan tetap bisa dibuka saat offline.

## 3. Masalah yang Diselesaikan

- Anggaran bulanan sering tercampur: saldo dan jatah tiap kategori tidak terlihat terpisah.
- Transaksi kecil (mis. makan siang) tidak tercatat, jadi bocornya uang tidak ketahuan.
- Target menabung tidak punya progres yang terlihat.
- Aplikasi keuangan umumnya butuh akun + cloud; pengguna ini mau data tetap di perangkat sendiri.

## 4. Tujuan & Sasaran

- Satu halaman yang dibuka langsung bisa dipakai: setup sekali, lalu catat transaksi dalam hitungan detik.
- Semua data tersimpan lokal (`localStorage` + IndexedDB) dan bisa diekspor (PDF/CSV).
- Bisa di-install sebagai PWA dan dibuka offline.
- Sinkronisasi antar perangkat tanpa server sendiri (WebRTC/PeerJS).

## 5. Ruang Lingkup

### In Scope (sudah ada, terverifikasi jalan)

- Landing page gaya SaaS: navbar sticky (tautan GitHub ke repo ini), hero dua kolom + pratinjau produk, grid 6 fitur, cara kerja 3 langkah, CTA band, footer; CTA ke setup; tampil pertama kali bagi pengguna baru.
- Ringkasan bulan ini di dashboard (total masuk, total keluar, jumlah transaksi).
- Tambah kategori anggaran lewat form inline di dashboard (menggantikan dialog `prompt()`).
- Setup awal: saldo awal + kategori anggaran (tambah/hapus, peringatan bila total anggaran melebihi saldo).
- Dashboard: total saldo + sisa tiap kategori.
- Transaksi: pemasukan, pengeluaran tak terduga, pengeluaran per kategori; keterangan + foto bukti opsional.
- Target menabung (wishlist): buat target, nabung bertahap, progres bar, hapus target (uang kembali ke saldo).
- Analitik: donat distribusi pengeluaran per kategori + batang arus kas 7 hari terakhir.
- Riwayat: filter tanggal, ekspor PDF dan CSV (offline).
- Tema: Dark / Light / Pink.
- PWA: manifest + service worker (precache halaman + library CDN, runtime cache font Google).
- Sinkronisasi P2P antar perangkat via PeerJS.

### Out of Scope

- Akun, login, cloud backup, multi-pengguna.
- Anggaran berulang otomatis per bulan (alokasi saat ini sekali setup, manual).
- Pengingat/jadwal, integrasi bank/e-wallet.
- Mode multi-bahasa (antarmuka Bahasa Indonesia saja).

## 6. Fitur & Persyaratan Fungsional

| # | Fitur | Perilaku yang diverifikasi |
|---|---|---|
| 0 | Landing page | Navbar sticky + ikon GitHub, hero dua kolom + pratinjau produk, grid 6 fitur, cara kerja 3 langkah, CTA band, footer; CTA "Mulai Atur Uang" menuju setup; pengguna lama langsung masuk dashboard |
| 1 | Setup awal | Saldo awal wajib > 0; dua kategori bawaan (Kebutuhan Pokok, Transportasi); peringatan bila total anggaran > saldo |
| 2 | Dashboard | Saldo tampil `Rp` format Indonesia; kartu tiap kategori menampilkan sisa anggarannya; ringkasan bulan ini (masuk/keluar/jumlah) dihitung dari riwayat; tambah kategori via form inline |
| 3 | Tambah transaksi | Nominal wajib > 0 dan jenis wajib dipilih; pengeluaran mengurangi saldo + sisa kategori; pemasukan menambah saldo |
| 4 | Riwayat | Transaksi tersimpan di IndexedDB dan tampil terbaru dulu; filter tanggal mempersempit daftar |
| 5 | Wishlist | Target wajib punya nama + nominal > 0; nabung mengurangi saldo utama; capai 100% → status "Target Tercapai!" |
| 6 | Analitik | Donat memakai data pengeluaran nyata; batang menampilkan pemasukan vs pengeluaran 7 hari terakhir; tanpa data tampil placeholder |
| 7 | Ekspor PDF | Laporan berisi saldo akhir, total masuk/keluar, dan tabel transaksi periode yang dipilih |
| 8 | Ekspor CSV | Header `ID,Tanggal,Waktu,Keterangan,Kategori,Tipe,Nominal`; unduhan 100% offline |
| 9 | Sync P2P | Perangkat A membuat ID, perangkat B menghubungkan ID itu; seluruh state + riwayat terkirim dan diterapkan di penerima |
| 10 | Tema | Tiga tema tersimpan di `localStorage` dan bertahan setelah reload |
| 11 | PWA install | Manifest + ikon lokal 192/512; service worker terdaftar; halaman bisa dibuka offline setelah satu kunjungan online |
| 12 | Reset data | Konfirmasi dulu; menghapus `localStorage` + seluruh transaksi IndexedDB |

## 7. Persyaratan Non-Fungsional

- **Offline-first:** setelah satu kunjungan online, halaman + library CDN + font sudah di-cache dan aplikasi terbuka tanpa internet.
- **Privasi:** tidak ada pelacakan, tidak ada akun, tidak ada data yang dikirim ke server mana pun kecuali saat pengguna sendiri memakai sync P2P (data langsung antar perangkat; pensinyalan memakai broker publik PeerJS).
- **Performa:** satu file HTML ±90 KB + CDN; tanpa build; muat cepat di jaringan normal.
- **Maintainability:** satu file `index.html` (markup + CSS + JS) — disengaja, supaya mudah dibaca dan diedit tanpa toolchain.
- **Portabilitas:** jalan di browser modern (Chrome/Edge/Firefox/Safari); PWA install paling lengkap di Chrome/Edge Android & desktop.

## 8. Arsitektur & Tech Stack

Lihat [docs/architecture.md](docs/architecture.md): diagram alur, model data (`localStorage` + IndexedDB), strategi cache service worker, dan keterbatasan yang diketahui.

## 9. Milestone / Roadmap

| Fase | Status |
|---|---|
| Inisialisasi & scaffolding | ✅ (2026-11-05) |
| Pengembangan fitur inti | ✅ (setup, transaksi, wishlist, analitik, ekspor, sync) |
| Testing & QA | ✅ (alur end-to-end terverifikasi di browser + audit Lighthouse PWA) |
| Deployment | ✅ (Cloudflare Pages — https://planku.pages.dev) |
| Dokumentasi | ✅ (README + PRD + `docs/architecture.md`, 2026-11-18) |

Yang belum diputuskan (bukan janji):

- Anggaran bulanan berulang otomatis.
- Cloud backup opsional (butuh keputusan soal privasi/server).

## 10. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Data hilang bila browser di-reset / perangkat berganti | Ekspor PDF/CSV berkala; sync P2P untuk pindah perangkat |
| CDN down saat kunjungan pertama | Library di-precache service worker setelah kunjungan pertama; kunjungan pertama butuh internet |
| Foto bukti base64 membengkak di `localStorage`/IndexedDB | Foto bersifat opsional; tidak ada kompresi — jangan unggah foto besar |
| Sync P2P gagal | Kedua perangkat harus online bersamaan + broker PeerJS harus terjangkau; tidak ada antrean pesan |
| Library CDN usang (versi ter-pin) | Versi di-pin di `index.html`; audit berkala sebelum menaikkan versi |

## 11. Kriteria Keberhasilan

- Aplikasi berjalan tanpa error di lingkungan dev maupun di situs live.
- Alur setup → transaksi → analitik → ekspor terverifikasi end-to-end di browser.
- Audit Lighthouse kategori PWA ≥ 0,90 di CI.
- README & PRD lengkap dan sesuai aplikasi sebenarnya.
- Tidak ada secret yang ter-commit.

## 12. Lampiran

- Arsitektur: [docs/architecture.md](docs/architecture.md)
- Diagram alur: [docs/diagrams/app-flow.svg](docs/diagrams/app-flow.svg)
- Lisensi: MIT (LICENSE)
