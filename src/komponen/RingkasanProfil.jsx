function RingkasanProfil({ jumlah }) {
  return (
    <div className="ringkasan">
      <div>
        <span className="ikon-ringkasan">♡</span>
        <div>
          <h3>{jumlah} Profil</h3>
          <p>Profil yang tersedia</p>
        </div>
      </div>
      <span className="status-aktif">Temukan kecocokanmu</span>
    </div>
  );
}

export default RingkasanProfil;