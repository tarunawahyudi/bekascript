# BekaScript

> Bahasa pemrograman bercita rasa Betawi-Bekasi — bikin ngoding jadi lebih **fun**, **lokal**, dan **ngakak!**

BekaScript adalah bahasa pemrograman yang dirancang dengan nuansa lokal Bekasi dan menggunakan kosakata khas Betawi Bekasi. Tujuannya adalah untuk membuat belajar pemrograman menjadi lebih menyenangkan, mudah dipahami, dan dekat dengan budaya lokal, terutama bagi siswa atau pemula.

## Daftar Isi

* [Pengenalan](#apa-itu-bekascript)
* [Instalasi](#cara-instalasi)
* [Menjalankan Kode](#▶%ef%b8%8f-cara-menjalankan-program-bekascript)
* [Sintaks Dasar dan Contoh](#sintaks-dasar-dan-contoh)

  * [Bikin Variabel](#1-bikin-variabel)
  * [Nampilin ke Layar (Print)](#2-nampilin-ke-layar-print)
  * [Kondisional (If Else)](#3-kondisional-if-else)
  * [Perulangan (For Loop)](#4-perulangan-for-loop)
  * [Perulangan (While Loop)](#5-perulangan-while-loop)
  * [Fungsi (Function)](#6-fungsi-function)
  * [Komentar](#7-komentar)
* [Fitur Bahasa](#🧠-fitur-bahasa)
* [Kenapa BekaScript?](#✨-kenapa-bekascript)
* [Kontribusi](#🌟-kontribusi)
* [Lisensi](#📦-lisensi)
* [Dibuat oleh](#dibuat-oleh)

---

## 📝 Apa Itu BekaScript?

**BekaScript** adalah bahasa pemrograman sederhana yang ditulis menggunakan **Node.js** dan didesain dengan **bahasa lokal khas Betawi-Bekasi**. Tujuannya? Supaya belajar coding jadi lebih **dekat, ringan, dan menyenangkan**, terutama buat pemula atau siswa yang baru mulai kenal dunia programming.

---

## 🚀 Cara Instalasi

Pastikan kamu sudah menginstal **Node.js** versi terbaru.

```bash
npm install -g bekascript
```

---

## ▶️ Cara Menjalankan Program BekaScript

Buat file dengan ekstensi `.bks`, misalnya `program.bks`, lalu jalankan menggunakan perintah:

```bash
bks program.bks
```

---

## Sintaks Dasar dan Contoh

### 1. Bikin Variabel

```bks
punya umur = 25;
punya nama = "Yudi";
```

### 2. Nampilin ke Layar (Print)

```bks
nongol "Halo bray!";

punya nama = "yudi";
nongol "nama guah " + nama;
```

### 3. Kondisional (If Else)

```bks
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

```bks
ulangin i dari 0 ampe 5 {
  nongol "coba dah ini mah " + i;
}
```

### 5. Perulangan (While Loop)

```bks
anu counter = 1;
nongol "Bilangan genap dari 2-10:";
pokonya (counter <= 5) {
    nongol counter * 2;
    counter++;
}
```

### 6. Fungsi (Function)

```bks
guna sapa(nama) {
  nongol "eh mau kemana pegih si, ngopi apa mari " + nama;
}

sapa("Bang Madun");
```

### 7. Komentar

```bks
// Ini komentar kaga di jalanin woles bae
```

---

## 🧠 Fitur Bahasa

| Sintaks     | JavaScript      | Contoh                            |
| ----------- | --------------- | --------------------------------- |
| `punya`     | `const`         | `punya nama = "Ujang";`           |
| `anu`       | `let`           | `anu umur = 17;`                  |
| `nongol`    | `console.log()` | `nongol "Halo dunia!";`           |
| `kalo`      | `if`            | `kalo (umur > 17) {...}`          |
| `yakali`    | `else if`       | `yakali (umur > 10) {...}`        |
| `kalo_kaga` | `else`          | `kalo_kaga { ... }`               |
| `ulangin`   | `for` loop      | `ulangin i dari 0 ampe 5 { ... }` |
| `pokonya`   | `while` loop    | `pokonya (a < 5) { ... }`         |
| `guna`      | `function`      | `guna sapa(nama) { ... }`         |
| `balik`     | `return`        | `balik hasil;`                    |

---

## ✨ Kenapa BekaScript?

* 🧠 Bahasa yang **dekat secara budaya** untuk pemula
* 📚 Cocok untuk **pengajaran dasar programming**
* 🎉 Sintaks yang **nyeleneh tapi bermakna** dan mudah diingat
* ⚡ Dibuat dengan Node.js dan bisa dijalankan via CLI

---

## 🌟 Kontribusi

Punya ide tambahan syntax? Atau nemu bug lucu? Pull request dan issue boleh bae dah!

---

## 📦 Lisensi

MIT License

---

## Dibuat oleh

Taruna Wahyudi
[GitHub](https://github.com/tarunawahyudi) · [LinkedIn](https://www.linkedin.com/in/taruna-wahyudi-228382175/) · [Email](wahyuditaruna97@gmail.com)

---

Terima kasih udah nyobain **BekaScript!** ❤️

> "Ngoding mah jangan terlalu serius, yang penting nyambung dan ketawa!"
