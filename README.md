# BekaScript

> Bahasa pemrograman bercita rasa Betawi-Bekasi - bagen biar kata kaga danta ge, yang penting belajar ngoding jadi **gampang** dan **gurih** bray

<p align="center">
  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/bekascript" target="_blank">
    <img src="https://img.shields.io/npm/v/bekascript?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Version" />
  </a>

  <!-- NPM Downloads -->
  <a href="https://www.npmjs.com/package/bekascript" target="_blank">
    <img src="https://img.shields.io/npm/dt/bekascript?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Downloads" />
  </a>

  <!-- VS Code Extension Version -->
  <a href="https://marketplace.visualstudio.com/items?itemName=tarunawahyudi.bekascript" target="_blank">
    <img src="https://img.shields.io/visual-studio-marketplace/v/tarunawahyudi.bekascript?style=for-the-badge&logo=visual-studio-code&color=007ACC" alt="VS Code Extension Version" />
  </a>

  <!-- License -->
  <a href="https://github.com/tarunawahyudi/bekascript/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/tarunawahyudi/bekascript?style=for-the-badge&color=007ACC" alt="License" />
  </a>
</p>

## Daftar Isi

* [📝 Apa Itu BekaScript?](#-apa-itu-bekascript)
* [🚀 Cara Instalasi](#-cara-instalasi)
* [▶️ Cara Menjalankan Program BekaScript](#️-cara-menjalankan-program-bekascript)
* [🧑‍💻 Sintaks Dasar dan Contoh](#-sintaks-dasar-dan-contoh)
  * [1. Bikin Variabel](#1-bikin-variabel)
  * [2. Nampilin ke Layar (Print)](#2-nampilin-ke-layar-print)
  * [3. Kondisional (If Else)](#3-kondisional-if-else)
  * [4. Perulangan (For Loop)](#4-perulangan-for-loop)
  * [5. Perulangan (While Loop)](#5-perulangan-while-loop)
  * [6. Fungsi (Function)](#6-fungsi-function)
  * [7. Komentar](#7-komentar)
* [🧠 Fitur Bahasa](#-fitur-bahasa)
* [✨ Kenapa BekaScript?](#-kenapa-bekascript)
* [🔌 Instalasi VS Code Extension](#-instalasi-vs-code-extension)
* [🌟 Kontribusi](#-kontribusi)
* [📦 Lisensi](#-lisensi)
* [👨‍💻 Dibuat oleh](#-dibuat-oleh)

---

## 📝 Apa Itu BekaScript?

**BekaScript** adalah bahasa pemrograman sederhana yang ditulis menggunakan **Node.js** dan didesain dengan **bahasa lokal khas Betawi-Bekasi**. Tujuannya? Supaya belajar coding jadi lebih **dekat, ringan, dan menyenangkan**, terutama buat pemula atau siswa yang baru mulai kenal dunia programming.

---

## 🚀 Cara Instalasi

Pastikan kamu sudah menginstal **Node.js** versi terbaru di komputermu.

Setelah itu, buka terminal atau Command Prompt dan jalankan perintah ini:

```bash
npm install -g bekascript
```

---

## 🔌 Instalasi VS Code Extension

Untuk pengalaman ngoding yang lebih nyaman, kamu bisa install ekstensi VS Code BekaScript. Ekstensi ini menyediakan:

-   **Syntax Highlighting:** Agar kode BekaScript-mu berwarna-warni dan mudah dibaca.
-   **Auto-completion:** Membantu kamu menulis kode lebih cepat.
-   **Snippets:** Menawarkan cuplikan kode yang sering digunakan.

Silakan cari di [VS Code Marketplace: **BekaScript**](https://marketplace.visualstudio.com/items?itemName=tarunawahyudi.bekascript)

---

## ▶️ Cara Menjalankan Program BekaScript

1. Buat file baru dengan ekstensi `.bks`, contohnya `program.bks`.
2. Tulis kode BekaScript-mu di dalam file tersebut.
3. Buka terminal di direktori yang sama dengan file-mu.
4. Jalankan program menggunakan perintah:

```bash
bks program.bks
```

---

## 🧑‍💻 Sintaks Dasar dan Contoh

### 1. Bikin Variabel

Gunakan `punya` untuk konstanta dan `anu` untuk variabel yang bisa diubah.

```js
punya umur = 25; // Konstanta (tidak bisa diubah)
anu nama = "Yudi"; // Variabel (bisa diubah)
```

### 2. Nampilin ke Layar (Print)

Gunakan `nongol` untuk menampilkan pesan ke konsol.

```js
nongol "Halo bray!";

punya nama = "yudi";
nongol "nama guah " + nama;
```

### 3. Kondisional (If Else)

Gunakan `kalo`, `yakali`, dan `kalo_kaga`.

```js
punya umur = 30;

kalo (umur < 2) {
  nongol "masih orok ini mah";
} yakali (umur < 5) {
  nongol "lah ini mah udah gede tong";
} kalo_kaga {
  nongol "tua amat umur lu bray";
}
```

### 4. Perulangan (For Loop)

Gunakan `ulangin` untuk perulangan dengan jumlah yang sudah ditentukan.

```js
ulangin i dari 0 ampe 5 {
  nongol "coba dah ini mah " + i;
}
```

### 5. Perulangan (While Loop)

Gunakan `pokonya` untuk perulangan selama kondisi terpenuhi.

```js
anu counter = 1;
nongol "Bilangan genap dari 2-10:";
pokonya (counter <= 5) {
  nongol counter * 2;
  counter++;
}
```

### 6. Fungsi (Function)

Gunakan `guna` untuk membuat fungsi. `balik` digunakan untuk mengembalikan nilai.

```js
guna sapa(nama) {
  nongol "eh mau kemana pegih si, ngopi apa mari " + nama;
}

sapa("Bang Madun");
```

### 7. Komentar

Gunakan `//` untuk komentar satu baris, seperti bahasa C++.

```js
// Ini komentar kaga di jalanin woles bae
```

---

## 🧠 Fitur Bahasa

| Sintaks     | Deskripsi                               | Contoh                                  |
| ----------- | --------------------------------------- | --------------------------------------- |
| `punya`     | Konstanta (mirip `const` di JS)         | `punya nama = "Ujang";`                 |
| `anu`       | Variabel (mirip `let` di JS)            | `anu umur = 17;`                        |
| `nongol`    | Mencetak ke konsol (mirip `console.log`)  | `nongol "Halo dunia!";`                 |
| `kalo`      | Kondisional (`if`)                      | `kalo (umur > 17) {...}`                |
| `yakali`    | Kondisional (`else if`)                 | `yakali (umur > 10) {...}`              |
| `kalo_kaga` | Kondisional (`else`)                    | `kalo_kaga { ... }`                     |
| `ulangin`   | Perulangan (`for`)                      | `ulangin i dari 0 ampe 5 { ... }`       |
| `pokonya`   | Perulangan (`while`)                    | `pokonya (a < 5) { ... }`               |
| `guna`      | Fungsi (`function`)                     | `guna sapa(nama) { ... }`               |
| `balik`     | Mengembalikan nilai (`return`)          | `balik hasil;`                          |

---

## 🌟 Kontribusi

Punya ide untuk sintaks baru? Menemukan bug? Atau ingin menambahkan fitur keren? Kontribusi sangat diharapkan!

Berikut langkah-langkah kontribusi yang direkomendasikan:

1. **Buka Issue terlebih dahulu**
   - Gunakan tab [Issues](https://github.com/tarunawahyudi/bekascript/issues) untuk menyampaikan ide, bug, atau usulan fitur.
   - Jelaskan secara jelas dan ringkas, sertakan contoh jika perlu.

2. **Fork repositori ini**
   - Klik tombol **Fork** di pojok kanan atas, lalu clone hasil fork ke lokal:
     ```bash
     git clone https://github.com/username-anda/bekascript.git
     ```

3. **Buat branch baru**
   - Gunakan nama yang deskriptif untuk branch kamu:
     ```bash
     git checkout -b fitur/sintaks-baru
     ```

4. **Lakukan perubahan**
   - Pastikan kode kamu bersih, terdokumentasi, dan mengikuti struktur yang ada.
   - Tambahkan tes jika memungkinkan.

5. **Commit perubahan**
   - Gunakan pesan commit yang jelas:
     ```bash
     git commit -m "feat: menambahkan sintaks baru untuk perulangan"
     ```

6. **Push ke GitHub**
   ```bash
   git push origin fitur/sintaks-baru
   ```

7. **Buat Pull Request**
   - Kembali ke repositori asal, dan buka **Pull Request** dari branch yang kamu buat.

---

### 💡 Tips Tambahan
- Pastikan kode kamu lolos pengecekan (`lint`, format, dsb.).
- Jika perubahanmu besar, diskusikan dulu lewat Issue sebelum memulai.
- Gunakan gaya penulisan kode yang konsisten dengan proyek ini.

---

## 📦 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

---

## 👨‍💻 Dibuat oleh

**Taruna Wahyudi**
[GitHub](https://github.com/tarunawahyudi) · [LinkedIn](https://www.linkedin.com/in/taruna-wahyudi-228382175/) · [Email](mailto:wahyuditaruna97@gmail.com)

---

Terima kasih udah nyobain **BekaScript!** ❤️

> "Ngoding mah ora pusing, yang pusing mah bayar cicilan abis nerima gajian, ekekekeke"
