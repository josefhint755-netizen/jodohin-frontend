function KepalaHalaman() {
  return (
    <header className="kepala">
      <a href="#beranda" className="logo">
        Jodoh<span>in.</span>
      </a>

      <nav>
        <a href="#beranda">Beranda</a>
        <a href="#profil">Cari Pasangan</a>
        <a href="#tambah-profil">Tambah Profil</a>
      </nav>

      <a href="#profil" className="tombol-mulai">
        Mulai Cari
      </a>
    </header>
  );
}

export default KepalaHalaman;