# Contacts App

Contacts App adalah aplikasi manajemen kontak sederhana yang dibangun menggunakan React. Aplikasi ini memungkinkan pengguna untuk menambahkan, mengedit, menghapus, dan mencari kontak.

## Fitur

- **Tambah Kontak**: Pengguna dapat menambahkan kontak baru dengan mengisi nama dan username.
- **Edit Kontak**: Pengguna dapat mengedit informasi kontak yang sudah ada.
- **Hapus Kontak**: Pengguna dapat menghapus kontak yang tidak diperlukan.
- **Pencarian Kontak**: Pengguna dapat mencari kontak berdasarkan nama atau username.
- **Validasi Form**: Formulir memastikan bahwa nama dan username tidak kosong sebelum menambahkan atau menyimpan kontak.
- **Notifikasi**: Menampilkan notifikasi ketika kontak berhasil ditambahkan, diedit, atau dihapus, serta ketika validasi form gagal.

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **CSS**: Untuk styling aplikasi.
- **HTML**: Struktur dasar aplikasi.

## Struktur Proyek
└── 📁contacts-app
    └── 📁public
        └── contact-icon.svg
    └── 📁src
        └── 📁components
            └── ContactApp.jsx
            └── ContactInput.jsx
            └── ContactItem.jsx
            └── ContactItemBody.jsx
            └── ContactItemImage.jsx
            └── ContactList.jsx
            └── DeleteButton.jsx
        └── index.jsx
        └── 📁styles
            └── styles.css
        └── 📁utils
            └── data.js
    └── index.html
    └── package.json
    └── README.md

##  Cara Menjalankan Proyek
1. **Clone repository ini**:
    ```bash
    git clone https://github.com/naenmad/contacts-app.git
    ```
2. **Install dependensi**:
    ```bash
    npm install
    ```
3. **Jalankan aplikasi**:
    ```bash
    npm start
    ```
4. **Buka aplikasi di browser**
    Lihat dimana aplikasi berjalan lalu jalankan.

## Cara Menggunakan

1. **Tambah Kontak**:
    - Isi nama dan username di formulir tambah kontak.
    - Klik tombol "Add Contact".
    - Kontak baru akan ditambahkan ke daftar kontak.

2. **Edit Kontak**:
    - Klik tombol "Edit" pada kontak yang ingin diedit.
    - Ubah informasi kontak di formulir edit.
    - Klik tombol "Save".
    - Informasi kontak akan diperbarui.

3. **Hapus Kontak**:
    - Klik tombol "Delete" pada kontak yang ingin dihapus.
    - Kontak akan dihapus dari daftar kontak.

4. **Cari Kontak**:
    - Ketik nama atau username di kotak pencarian.
    - Daftar kontak akan difilter berdasarkan kata kunci pencarian.


## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request dengan perubahan Anda.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file LICENSE untuk informasi lebih lanjut.