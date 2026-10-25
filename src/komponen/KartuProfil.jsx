function KartuProfil({ profil }) {
  return (
    <article className="kartu-profil">
      <div className="wadah-foto">
        <img
          src={profil.foto}
          alt={`Foto ${profil.nama}`}
          className="foto-profil"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400?text=Foto+Profil";
          }}
        />
        <span className="label-minat">{profil.minat}</span>
      </div>

      <div className="isi-profil">
        <h3>
          {profil.nama}, {profil.umur}
        </h3>

        <p className="lokasi-profil">⌖ {profil.kota}</p>
        <p className="deskripsi-profil">{profil.deskripsi}</p>

        <a
          className="tombol-profil"
          href={`mailto:?subject=${encodeURIComponent(`Berkenalan dengan ${profil.nama}`)}&body=${encodeURIComponent(`Halo ${profil.nama}, saya ingin berkenalan.`)}`}
        >
          Ajak Berkenalan ♡
        </a>
      </div>
    </article>
  );
}

export default KartuProfil;