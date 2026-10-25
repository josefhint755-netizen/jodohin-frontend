import KartuProfil from "./KartuProfil";

function DaftarProfil({ daftarProfil }) {
  if (daftarProfil.length === 0) {
    return (
      <div className="pesan-kosong">
        <div className="ikon-kosong">♡</div>
        <h3>Belum ada profil yang cocok</h3>
        <p>Coba kata pencarian lain atau tambahkan profil baru.</p>
      </div>
    );
  }

  return (
    <div className="daftar-profil">
      {daftarProfil.map((profil) => (
        <KartuProfil key={profil.id} profil={profil} />
      ))}
    </div>
  );
}

export default DaftarProfil;