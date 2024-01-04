// Daftar gambar dan jawabannya
const daftarGambar = [
    { imgSrc: 'gambar1.jpg', jawaban: 'kucing' },
    { imgSrc: 'gambar2.jpg', jawaban: 'mobil' },
    // Tambahkan gambar dan jawaban baru di sini
  ];
  
  // Memilih gambar secara acak dari daftarGambar
  function pilihGambar() {
    const randomIndex = Math.floor(Math.random() * daftarGambar.length);
    return daftarGambar[randomIndex];
  }
  
  // Menampilkan gambar yang dipilih ke halaman web
  function tampilkanGambar() {
    const gambar = pilihGambar();
    document.getElementById('gambarTebak').src = gambar.imgSrc;
    return gambar.jawaban.toLowerCase();
  }
  
  // Memeriksa jawaban yang dimasukkan oleh pengguna
  function cekJawaban() {
    const jawaban = document.getElementById('jawaban').value.toLowerCase();
    const jawabanBenar = tampilkanGambar();
  
    if (jawaban === jawabanBenar) {
      document.getElementById('hasil').innerText = 'Jawaban Benar!';
    } else {
      document.getElementById('hasil').innerText = 'Jawaban Salah, coba lagi.';
    }
  }
  
  // Event listener saat tombol cek jawaban ditekan
  document.getElementById('btnCek').addEventListener('click', cekJawaban);
  
  // Menampilkan gambar pertama saat halaman dimuat
  tampilkanGambar();
  
