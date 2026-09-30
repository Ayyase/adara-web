export interface Program {
  slug: string;
  nama: string;
  ringkas: string;
  ringkasan: string;
  kategori: 'Penyaluran' | 'Edukasi';
  ikon: string;
  poin: string[];
  sdg: number[];
}

export const PROGRAM_PENYALURAN: Program[] = [
  {
    slug: 'pemberdayaan-perempuan',
    nama: 'Pemberdayaan Perempuan',
    ringkas: 'Ekonom mandiri untuk perempuan Palestina',
    ringkasan:
      'Pemberdayaan perempuan dan keluarga Palestina melalui peningkatan akses dan kontrol terhadap sumber daya ekonomi, sosial, dan budaya. Program ini mendorong kemandirian finansial berkelanjutan sehingga mereka tidak lagi bergantung pada bantuan selepas masa pemulihan.',
    kategori: 'Penyaluran',
    ikon: '👩',
    poin: [
      'Pelatihan keterampilan produktif',
      'Pendampingan usaha mikro dan akses pemasaran',
      'Pendidikan literasi keuangan untuk perempuan',
    ],
    sdg: [1, 5, 8],
  },
  {
    slug: 'dekap-yatim-palestina',
    nama: 'Dekap Yatim Palestina (DYP)',
    ringkas: 'Pendampingan anak yatim di Palestina',
    ringkasan:
      'Pendampingan anak yatim di Palestina melalui santunan, pemenuhan kebutuhan dasar, serta pelatihan keterampilan. Program ini bertujuan mendukung mereka meraih mimpi meskipun melalui situasi yang sulit.',
    kategori: 'Penyaluran',
    ikon: '🧒',
    poin: [
      'Santunan rutin dan pemenuhan kebutuhan dasar',
      'Pelatihan keterampilan dan life skills',
      'Pendampingan pendidikan dan psikologis',
    ],
    sdg: [1, 3, 4],
  },
  {
    slug: 'hidupkan-ahlul-quran',
    nama: 'Hidupkan Ahlul Qur’an (HAQ)',
    ringkas: 'Beasiswa penghafal Qur’an di Gaza dan pengungsian',
    ringkasan:
      'Pendampingan penghafal Qur’an di Gaza dan pengungsian Palestina melalui pemberian beasiswa dan fasilitas pembelajaran, dengan tujuan membangun lingkungan belajar yang baik serta membentuk Generasi Qur’ani di Baitul Maqdis.',
    kategori: 'Penyaluran',
    ikon: '📖',
    poin: [
      'Beasiswa bagi penghafal Qur’an',
      'Fasilitas belajar dan perlengkapan',
      'Pendampingan guru dan tahfidz',
    ],
    sdg: [4, 10, 16],
  },
  {
    slug: 'program-darurat',
    nama: 'Program Darurat',
    ringkas: 'Bantuan cepat untuk kebutuhan mendesak',
    ringkasan:
      'Bantuan darurat merupakan upaya cepat Adara untuk memenuhi kebutuhan dasar mendesak warga Palestina. Dilakukan sejak 7 Oktober 2023, meliputi bantuan sembako, pangan, medis, hingga kebutuhan bayi dan perempuan.',
    kategori: 'Penyaluran',
    ikon: '🚑',
    poin: [
      'Sembako, pangan, dan kebutuhan bayi',
      'Bantuan medis dan obat',
      'Distribusi cepat ke wilayah terdampak',
    ],
    sdg: [1, 2, 3],
  },
  {
    slug: 'air-bersih',
    nama: 'Air Bersih',
    ringkas: 'Akses air bersih dan sanitasi layak',
    ringkasan:
      'Penyediaan akses air bersih dan sanitasi yang layak bagi warga Palestina dan pengungsian, melalui pembangunan sumur dan bantuan air bersih untuk memenuhi kebutuhan dasar mereka.',
    kategori: 'Penyaluran',
    ikon: '💧',
    poin: [
      'Pembangunan sumur air bersih',
      'Sanitasi layak bagi pengungsian',
      'Pemeliharaan infrastruktur air',
    ],
    sdg: [6, 11, 13],
  },
  {
    slug: 'bagi-bagi-qurban',
    nama: 'Bagi-Bagi Qurban (BBQ)',
    ringkas: 'Kebutuhan pangan, Palestina dan wilayah 3T',
    ringkasan:
      'Program Bagi-Bagi Qurban bertujuan membantu memenuhi kebutuhan pangan di tengah krisis kemanusiaan yang dilanda warga Palestina serta wilayah 3T (Tertinggal, Terdepan, dan Terluar) di Indonesia.',
    kategori: 'Penyaluran',
    ikon: '🐐',
    poin: [
      'Distribusi daging qurban ke wilayah terdampak',
      'Sembako untuk warga Palestina',
      'Penguatan pangan di wilayah 3T Indonesia',
    ],
    sdg: [1, 2, 12],
  },
];

export const PROGRAM_EDUKASI: Program[] = [
  {
    slug: 'maqdis-academy',
    nama: 'Maqdis Academy',
    ringkas: 'Edukasi Palestina berbasis riset, aktual, dan faktual',
    ringkasan:
      'Platform edukasi Baitul Maqdis dan Palestina di bawah naungan Departemen Riset dan Pengembangan Adara Relief International. Maqdis Academy membagikan edukasi berbasis riset yang aktual dan faktual.',
    kategori: 'Edukasi',
    ikon: '🎓',
    poin: ['Riset dan publikasi berkala', 'Kursus online untuk publik', 'Pustaka materi edukasi'],
    sdg: [4, 16, 17],
  },
  {
    slug: 'al-aqsa-berkisah',
    nama: 'Al-Aqsa Berkisah',
    ringkas: 'Edukasi Masjid Al-Aqsa sejak dini',
    ringkasan:
      'Program edukasi Masjid Al-Aqsa yang dikemas menarik untuk menanamkan cinta dan semangat membela Al-Aqsa sejak dini. Dilengkapi Training for Trainer berupa pelatihan berkisah Al-Aqsa untuk guru-guru di sekolah.',
    kategori: 'Edukasi',
    ikon: '🕌',
    poin: ['Kelas anak dan remaja', 'Training for Trainer untuk guru', 'Materi berkisah Al-Aqsa'],
    sdg: [4, 10, 17],
  },
  {
    slug: 'kajian-kepalestinian',
    nama: 'Kajian Kepalestinian',
    ringkas: 'Kajian komprehensif untuk masyarakat Indonesia',
    ringkasan:
      'Rangkaian kajian komprehensif bertema Palestina untuk mengedukasi masyarakat Indonesia. Pada setiap sesi diundang pembicara yang ahli di bidangnya, meliputi dosen, praktisi, ustadz, hingga syeikh yang didatangkan langsung dari Palestina.',
    kategori: 'Edukasi',
    ikon: '📢',
    poin: ['Pembicara ahli dan relevan', 'Kajian rutin di berbagai kota', 'Materi riset terverifikasi'],
    sdg: [4, 16, 17],
  },
  {
    slug: 'satu-rumah-satu-aqsa',
    nama: 'Satu Rumah Satu Aqsa',
    ringkas: 'Kesadaran Baitul Maqdis dari lingkup keluarga',
    ringkasan:
      'Kegiatan untuk menanamkan kesadaran akan pentingnya Baitul Maqdis dimulai dari lingkup terdekat, yaitu keluarga Indonesia. Program ini juga telah diperkenalkan di kancah internasional melalui forum global.',
    kategori: 'Edukasi',
    ikon: '🏡',
    poin: [
      'Kampanye keluarga dan masjid',
      'Keterlibatan forum global',
      'Edukasi wakaf dan wakaf produktivitas',
    ],
    sdg: [4, 11, 17],
  },
  {
    slug: 'palestine-festival',
    nama: 'Palestine Festival',
    ringkas: 'Seni dan budaya Palestina, tahunan',
    ringkasan:
      'Acara tahunan untuk memperkenalkan seni dan budaya Palestina melalui pertunjukan, pameran, serta lelang amal. Kegiatan ini diharapkan dapat menggugah kesadaran masyarakat terhadap isu kemanusiaan di Palestina.',
    kategori: 'Edukasi',
    ikon: '🎪',
    poin: ['Pameran seni dan budaya', 'Pertunjukan musik dan tari', 'Lelang amal dan bazar'],
    sdg: [4, 10, 17],
  },
  {
    slug: 'peringatan-peristiwa-bersejarah',
    nama: 'Peringatan Peristiwa Bersejarah Palestina',
    ringkas: 'Seminar dan webinar pada hari peringatan',
    ringkasan:
      'Adara rutin menyelenggarakan kegiatan seminar dan webinar pada setiap hari peringatan bersejarah Palestina, bertujuan untuk mengkaji lebih lanjut latar belakang peristiwa tersebut dan mengeksplorasi langkah yang bisa dilakukan saat ini.',
    kategori: 'Edukasi',
    ikon: '🕯️',
    poin: ['Seminar hari peringatan', 'Webinar publik', 'Kajian historis mendalam'],
    sdg: [4, 16, 17],
  },
];

export const SEMUA_PROGRAM = [...PROGRAM_PENYALURAN, ...PROGRAM_EDUKASI];

export const SDG_LIST = [
  { no: 1, name: 'Tanpa Kemiskinan', full: 'Mengentaskan kemiskinan' },
  { no: 2, name: 'Tanpa Kelaparan', full: 'Mengatasi kelaparan dan ketahanan pangan' },
  { no: 3, name: 'Kesehatan & Sejahtera', full: 'Menjamin hidup sehat dan kesejahteraan' },
  { no: 4, name: 'Pendidikan Berkualitas', full: 'Pendidikan berkualitas untuk semua' },
  { no: 5, name: 'Kesetaraan Gender', full: 'Hilangkan kesenjangan gender dan percepat kesetaraan' },
  { no: 6, name: 'Air Bersih & Sanitasi', full: 'Air bersih dan sanitasi layak' },
  { no: 8, name: 'Pekerjaan Layak', full: 'Pekerjaan layak dan pertumbuhan ekonomi' },
  { no: 10, name: 'Berkurangnya Kesenjangan', full: 'Mengurangi kesenjangan sosial' },
  { no: 11, name: 'Kota & Komunitas Berkelanjutan', full: 'Kota dan komunitas berkelanjutan' },
  { no: 12, name: 'Konsumsi Bertanggung Jawab', full: 'Konsumsi dan produksi bertanggung jawab' },
  { no: 13, name: 'Aksi Iklim', full: 'Aksi terhadap perubahan iklim' },
  { no: 16, name: 'Damai & Keadilan', full: 'Damai, keadilan, dan lembaga kuat' },
  { no: 17, name: 'Kemitraan', full: 'Kemitraan untuk mencapai tujuan' },
];

export const VISI =
  'Menjadi lembaga yang memperjuangkan kemerdekaan Palestina, dengan memastikan kebutuhan atau keperluan mendasar masyarakat dapat terpenuhi terutama anak-anak dan perempuan.';

export const MISI = [
  'Menjadi lembaga yang terdepan, unggul, dan tercepat dalam memberikan edukasi dan informasi tentang Palestina.',
  'Menjadi lembaga yang mampu memfasilitasi sumber daya untuk memperluas manfaat dalam perjuangan Palestina.',
  'Memperluas dan memperkuat jaringan kerja sama berbagai pihak baik dalam maupun luar negeri untuk membela Palestina.',
  'Menjadi lembaga yang memiliki sistem manajemen kerja yang transparan dan akuntabel.',
  'Menjadi lembaga dengan value yang kuat dalam mengembangkan organisasi yang tangguh dan modern.',
];

export const LEGALITAS = {
  notaris: [
    'Akta Pendirian No. 2, Notaris Eva Junaida, 3 November 2008',
    'Akta Perubahan No. 193, 19 Juli 2018',
    'Akta Perubahan No. 10, 30 Juli 2020',
    'Akta Perubahan No. 1, 1 April 2021',
  ],
  kemkumham: [
    'SK Pengesahan Akta Pendirian AHU-97 AH 01.04, 2009',
    'SK Kemenkumham AHU-000552 AH.01.05, 2018',
    'SK Kemenkumham AHU. AH.01.06-0019308, 2020',
    'SK Kemenkumham AHU-000552 AH.01.05, 2021',
  ],
  izin: ['SK No. 1/F.8/3/-1.848/e/2021 — Izin pengumpulan uang dan/atau barang'],
  audit: [
    '00081/2.0883/AU.2/11/08341/1/VII/2023 — Ahmad Toha, CPA',
    '00127/2.0883/AU.2/11/19071/1/XII/2023 — Muhammad Rizqon, CPA',
    '00163/2.0883/AU.2/11/19072/1/XII/2024 — Muhammad Rizqon, CPA',
    '00104/2.0883/AU.2/11/19073/1/VII/2025 — Muhammad Rizqon, CPA',
  ],
};

export const MAKNA = {
  sansekerta: 'Dalam Bahasa Sansekerta, Adara memiliki arti indah, penghormatan, dan belas kasih.',
  arab: 'Dalam Bahasa Arab, Adara berarti mengelola, berasal dari kata ‘daro’ yang memiliki arti mengorbit.',
  logo:
    'Simbol hati menjadi visualisasi seorang ibu yang sedang mendekap anaknya. Warna toska melambangkan ketenangan, kepercayaan, dan profesionalisme.',
};
