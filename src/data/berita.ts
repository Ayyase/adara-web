export interface Berita {
  slug: string;
  judul: string;
  ringkas: string;
  kategori: 'Penyaluran' | 'Edukasi' | 'Komunitas' | 'Siaran Pers' | 'Laporan';
  tanggal: string;
  tanggalISO: string;
  baca: number;
  gradien: string;
  gambar: string;
  featured?: boolean;
}

/**
 * Daftar berita. Ganti dengan sumber data (WordPress REST API, Sanity, dsb.)
 * ketika website siap tayang.
 */
export const BERITA: Berita[] = [
  {
    slug: 'daftar-komunitas-adara',
    judul: 'Daftar Komunitas Adara di Seluruh Indonesia',
    ringkas:
      'Sejak 2017, komunitas Adara tumbuh menjadi penggerak edukasi kepalestinian di berbagai penjuru Nusantara.',
    kategori: 'Komunitas',
    tanggal: '30 Juli 2025',
    tanggalISO: '2025-07-30',
    baca: 4,
    gradien: 'from-emerald-600 to-teal-500',
    gambar: '/img/komunitas-hero.jpg',
    featured: true,
  },
  {
    slug: 'program-darurat-gaza',
    judul: 'Adara Distribusikan Bantuan Darurat ke Gaza',
    ringkas:
      'Bantuan darurat berupa sembako, pangan, dan kebutuhan medis untuk warga terdampak langsung.',
    kategori: 'Penyaluran',
    tanggal: '22 Juli 2025',
    tanggalISO: '2025-07-22',
    baca: 3,
    gradien: 'from-rose-600 to-orange-500',
    gambar: '/img/program-hero.jpg',
  },
  {
    slug: 'satu-rumah-satu-aqsa-keluarga',
    judul: 'Satu Rumah Satu Aqsa: Kesadaran dari Lingkup Terdekat',
    ringkas:
      'Program yang menanamkan kesadaran Baitul Maqdis dimulai dari keluarga Indonesia.',
    kategori: 'Edukasi',
    tanggal: '15 Juli 2025',
    tanggalISO: '2025-07-15',
    baca: 5,
    gradien: 'from-fuchsia-600 to-purple-500',
    gambar: '/img/edukasi-hero.jpg',
  },
  {
    slug: 'maqdis-academy-riset-terbaru',
    judul: 'Maqdis Academy Luncurkan Riset Terbaru',
    ringkas:
      'Edukasi Palestina berbasis riset yang aktual dan faktual dari Departemen Riset dan Pengembangan Adara.',
    kategori: 'Edukasi',
    tanggal: '10 Juli 2025',
    tanggalISO: '2025-07-10',
    baca: 6,
    gradien: 'from-indigo-600 to-blue-500',
    gambar: '/img/edukasi-hero.jpg',
  },
  {
    slug: 'dekap-yatim-palestina-laporan',
    judul: 'Dekap Yatim Palestina: Laporan Pendampingan Anak',
    ringkas:
      'Program pendampingan anak yatim melalui santunan, kebutuhan dasar, dan pelatihan keterampilan.',
    kategori: 'Laporan',
    tanggal: '5 Juli 2025',
    tanggalISO: '2025-07-05',
    baca: 7,
    gradien: 'from-sky-600 to-cyan-500',
    gambar: '/img/program-hero.jpg',
  },
  {
    slug: 'pemberdayaan-perempuan-palestina',
    judul: 'Perempuan Palestina Tumbuh Mandiri Secara Finansial',
    ringkas:
      'Peningkatan akses terhadap sumber daya ekonomi, sosial, dan budaya bagi perempuan Palestina.',
    kategori: 'Penyaluran',
    tanggal: '1 Juli 2025',
    tanggalISO: '2025-07-01',
    baca: 4,
    gradien: 'from-emerald-600 to-lime-500',
    gambar: '/img/program-hero.jpg',
  },
];

export const KATEGORI_BERITA = [
  'Semua',
  'Penyaluran',
  'Edukasi',
  'Komunitas',
  'Siaran Pers',
  'Laporan',
] as const;

export function beritaTerbaru(limit?: number) {
  const sorted = [...BERITA].sort((a, b) => b.tanggalISO.localeCompare(a.tanggalISO));
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}
