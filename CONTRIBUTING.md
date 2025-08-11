# Panduan Kontribusi BekaScript

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
