import { useState } from "react";
import KepalaHalaman from "./komponen/KepalaHalaman";
import RingkasanProfil from "./komponen/RingkasanProfil";
import FormTambahProfil from "./komponen/FormTambahProfil";
import DaftarProfil from "./komponen/DaftarProfil";
import "./App.css";

const dataAwalProfil = [
  {
    id: 1,
    nama: "Alya",
    umur: 21,
    kota: "Bandung",
    minat: "Musik",
    deskripsi: "Suka mendengarkan musik dan mencari tempat menarik.",
    foto: "https://i.pravatar.cc/400?img=47",
  },
  {
    id: 2,
    nama: "Raka",
    umur: 23,
    kota: "Jakarta",
    minat: "Fotografi",
    deskripsi: "Senang memotret pemandangan dan menjelajahi tempat baru.",
    foto: "https://i.pravatar.cc/400?img=12",
  },
  {
    id: 3,
    nama: "Nadia",
    umur: 22,
    kota: "Yogyakarta",
    minat: "Membaca",
    deskripsi: "Suka membaca buku dan menikmati suasana kafe yang tenang.",
    foto: "https://i.pravatar.cc/400?img=44",
  },
  {
    id: 4,
    nama: "Dimas",
    umur: 24,
    kota: "Bandung",
    minat: "Olahraga",
    deskripsi: "Gemar berolahraga dan mencoba kegiatan baru.",
    foto: "https://i.pravatar.cc/400?img=13",
  },
];

function App() {
  const [daftarProfil, aturDaftarProfil] = useState(dataAwalProfil);
  const [kataPencarian, aturKataPencarian] = useState("");
  const [kotaPilihan, aturKotaPilihan] = useState("Semua Kota");

  function tambahProfil(profilBaru) {
    aturDaftarProfil((profilSebelumnya) => [
      profilBaru,
      ...profilSebelumnya,
    ]);
  }

  const profilDitampilkan = daftarProfil.filter((profil) => {
    const cocokPencarian =
      `${profil.nama} ${profil.kota} ${profil.minat}`
        .toLowerCase()
        .includes(kataPencarian.toLowerCase());

    const cocokKota =
      kotaPilihan === "Semua Kota" || profil.kota === kotaPilihan;

    return cocokPencarian && cocokKota;
  });

  const daftarKota = [
    "Semua Kota",
    ...new Set(daftarProfil.map((profil) => profil.kota)),
  ];

  return (
    <div className="aplikasi">
      <KepalaHalaman />

      <main>
        <section id="beranda" className="bagian-utama">
          <div className="konten-utama">
            <span className="label-bagian">
              TEMUKAN KONEKSI BARU
            </span>

            <h1>
              Setiap Pertemuan
              <br />
              Punya <span>Cerita.</span>
            </h1>

            <p>
              Kenali orang baru, temukan kesamaan, dan mulai
              cerita menarikmu bersama Jodohin.
            </p>

            <a href="#profil" className="tombol-utama">
              Temukan Pasangan ♡
            </a>

            <div className="statistik-utama">
              <div>
                <strong>{daftarProfil.length}+</strong>
                <span>Profil tersedia</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Mulai dari sini</span>
              </div>
            </div>
          </div>

          <div className="ilustrasi-utama">
            <div className="hiasan hiasan-satu">♡</div>
            <div className="hiasan hiasan-dua">✦</div>

            <div className="kartu-sambutan">
              <div className="simbol-hati">♥</div>
              <h3>Temukan Kecocokanmu</h3>
              <p>Semua cerita indah dimulai dari perkenalan.</p>
            </div>
          </div>
        </section>

        <section id="profil" className="bagian-profil">
          <div className="judul-bagian">
            <span className="label-bagian">DAFTAR PROFIL</span>
            <h2>Kenali Mereka Lebih Dekat</h2>
            <p>
              Temukan orang dengan minat yang sama denganmu.
            </p>
          </div>

          <RingkasanProfil jumlah={daftarProfil.length} />

          <div className="alat-pencarian">
            <input
              type="search"
              placeholder="Cari nama, kota, atau minat..."
              value={kataPencarian}
              onChange={(e) => aturKataPencarian(e.target.value)}
            />

            <select
              value={kotaPilihan}
              onChange={(e) => aturKotaPilihan(e.target.value)}
            >
              {daftarKota.map((kota) => (
                <option key={kota} value={kota}>
                  {kota}
                </option>
              ))}
            </select>
          </div>

          <DaftarProfil daftarProfil={profilDitampilkan} />
        </section>

        <FormTambahProfil tambahProfil={tambahProfil} />
      </main>

      <footer className="kaki-halaman">
        <a href="#beranda" className="logo">
          Jodoh<span>in.</span>
        </a>
        <p>Temukan cerita baru, mulai dari sebuah perkenalan.</p>
        <p>© 2026 Jodohin. Dibuat dengan React.</p>
      </footer>
    </div>
  );
}

export default App;