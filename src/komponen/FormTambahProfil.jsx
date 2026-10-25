import { useState } from "react";

function FormTambahProfil({ tambahProfil }) {
  const [nama, aturNama] = useState("");
  const [umur, aturUmur] = useState("");
  const [kota, aturKota] = useState("");
  const [minat, aturMinat] = useState("");
  const [deskripsi, aturDeskripsi] = useState("");
  const [foto, aturFoto] = useState("");

  function kirimFormulir(peristiwa) {
    peristiwa.preventDefault();

    if (
      !nama.trim() ||
      !umur ||
      !kota.trim() ||
      !minat.trim() ||
      Number(umur) < 18 ||
      Number(umur) > 100
    ) {
      return;
    }

    tambahProfil({
      id: Date.now(),
      nama: nama.trim(),
      umur: Number(umur),
      kota: kota.trim(),
      minat: minat.trim(),
      deskripsi: deskripsi.trim() || "Sedang ingin berkenalan.",
      foto:
        foto.trim() ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=fce7f3&color=9d174d`,
    });

    aturNama("");
    aturUmur("");
    aturKota("");
    aturMinat("");
    aturDeskripsi("");
    aturFoto("");
  }

  return (
    <section id="tambah-profil" className="bagian-formulir">
      <div className="judul-bagian">
        <span className="label-bagian">BERGABUNG BERSAMA KAMI</span>
        <h2>Tambahkan Profilmu</h2>
        <p>Kenalkan dirimu dan temukan teman baru.</p>
      </div>

      <form className="formulir-profil" onSubmit={kirimFormulir}>
        <label>
          Nama
          <input
            value={nama}
            onChange={(e) => aturNama(e.target.value)}
            placeholder="Masukkan nama"
            required
          />
        </label>

        <label>
          Umur
          <input
            type="number"
            value={umur}
            onChange={(e) => aturUmur(e.target.value)}
            placeholder="Minimal 18 tahun"
            min="18"
            max="100"
            required
          />
        </label>

        <label>
          Kota
          <input
            value={kota}
            onChange={(e) => aturKota(e.target.value)}
            placeholder="Contoh: Bandung"
            required
          />
        </label>

        <label>
          Minat
          <input
            value={minat}
            onChange={(e) => aturMinat(e.target.value)}
            placeholder="Contoh: Musik, film"
            required
          />
        </label>

        <label className="kolom-penuh">
          Deskripsi
          <textarea
            value={deskripsi}
            onChange={(e) => aturDeskripsi(e.target.value)}
            placeholder="Ceritakan sedikit tentang dirimu"
            rows="3"
          />
        </label>

        <label className="kolom-penuh">
          Tautan Foto (opsional)
          <input
            type="url"
            value={foto}
            onChange={(e) => aturFoto(e.target.value)}
            placeholder="https://contoh.com/foto.jpg"
          />
        </label>

        <button className="tombol-utama kolom-penuh" type="submit">
          + Tambahkan Profil
        </button>
      </form>
    </section>
  );
}

export default FormTambahProfil;