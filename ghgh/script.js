// Fungsi untuk menambahkan titik setiap 3 digit
function formatRupiah(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  // Fungsi menghitung Zakat Fitrah
  function hitungZakatFitrah() {
    const jumlahOrang = document.getElementById("jumlahOrang").value;
    const zakatPerOrang = 30000; // Misalnya zakat fitrah per orang = 30.000
    if (jumlahOrang && !isNaN(jumlahOrang)) {
      const totalZakat = jumlahOrang * zakatPerOrang;
      document.getElementById("hasilFitrah").innerText = `Total Zakat Fitrah: Rp ${formatRupiah(totalZakat)}`;
    } else {
      document.getElementById("hasilFitrah").innerText = "Masukkan jumlah orang yang valid.";
    }
  }
  
  // Fungsi menghitung Zakat Harta
  function hitungZakatHarta() {
    const harta = document.getElementById("harta").value.replace(/\./g, ''); // Menghapus titik
    if (harta && !isNaN(harta)) {
      const zakatHarta = (parseInt(harta) * 2.5) / 100; // 2.5% dari harta
      document.getElementById("hasilHarta").innerText = `Zakat Harta: Rp ${formatRupiah(zakatHarta)}`;
    } else {
      document.getElementById("hasilHarta").innerText = "Masukkan jumlah harta yang valid.";
    }
  }
  
  // Fungsi menghitung Zakat Penghasilan
  function hitungZakatPenghasilan() {
    const penghasilan = document.getElementById("penghasilan").value.replace(/\./g, ''); // Menghapus titik
    if (penghasilan && !isNaN(penghasilan)) {
      const zakatPenghasilan = (parseInt(penghasilan) * 2.5) / 100; // 2.5% dari penghasilan
      document.getElementById("hasilPenghasilan").innerText = `Zakat Penghasilan: Rp ${formatRupiah(zakatPenghasilan)}`;
    } else {
      document.getElementById("hasilPenghasilan").innerText = "Masukkan penghasilan yang valid.";
    }
  }
  
  // Fungsi menghitung Pembagian Waris
  function hitungWaris() {
    const warisan = document.getElementById("warisan").value.replace(/\./g, ''); // Menghapus titik
    const anakLakiLaki = parseInt(document.getElementById("anakLakiLaki").value) || 0;
    const anakPerempuan = parseInt(document.getElementById("anakPerempuan").value) || 0;
  
    if (warisan && !isNaN(warisan) && anakLakiLaki >= 0 && anakPerempuan >= 0) {
      const totalHarta = parseInt(warisan);
      
      // Pembagian untuk Ayah (1/6 bagian)
      const bagianAyah = totalHarta / 6;
      
      // Sisa harta untuk anak-anak (5/6 bagian)
      const sisaHarta = totalHarta * 5 / 6;
      
      // Hitung bagian anak laki-laki dan anak perempuan
      const totalAnak = anakLakiLaki * 2 + anakPerempuan * 1;  // 2 bagian untuk anak laki-laki, 1 bagian untuk anak perempuan
      
      const bagianAnakLakiLaki = (anakLakiLaki * 2) / totalAnak * sisaHarta;
      const bagianAnakPerempuan = (anakPerempuan * 1) / totalAnak * sisaHarta;
      
      // Format hasil
      document.getElementById("hasilWaris").innerHTML = `
        <strong>Bagian Ayah (Kakek):</strong> Rp ${formatRupiah(bagianAyah)} (1/6)<br>
        <strong>Bagian Anak Laki-laki:</strong> Rp ${formatRupiah(bagianAnakLakiLaki)}<br>
        <strong>Bagian Anak Perempuan:</strong> Rp ${formatRupiah(bagianAnakPerempuan)}<br>
      `;
    } else {
      document.getElementById("hasilWaris").innerText = "Masukkan jumlah warisan dan ahli waris yang valid.";
    }
  }
  