export interface FaqItem {
  q: string;
  a: string;
  grup: 'umum' | 'donasi' | 'program' | 'komunitas';
}

export const GRUP_FAQ: Record<FaqItem['grup'], { label: string; ikon: string }> = {
  umum: { label: 'Tentang Adara', ikon: '🏛️' },
  donasi: { label: 'Donasi & Rekening', ikon: '💳' },
  program: { label: 'Program & Bantuan', ikon: '📦' },
  komunitas: { label: 'Komunitas & Relawan', ikon: '🤝' },
};

/** Pertanyaan yang sering diajukan. Sumber: halaman Tentang Adara (FAQ). */
export const FAQ: FaqItem[] = [
  {
    grup: 'umum',
    q: 'Apa itu Adara Relief International?',
    a: 'Adara Relief International merupakan lembaga kemanusiaan yang dibentuk dari inisiasi perempuan Indonesia dalam rangka membantu kelompok rentan, yaitu anak dan perempuan.',
  },
  {
    grup: 'umum',
    q: 'Kapan Adara didirikan?',
    a: 'Adara Relief International didirikan pada 14 Februari 2008 atas inisiasi Alm. Yoyoh Yusroh, S.Pd.I., dan Dra. Siti Zainab, M.A.',
  },
  {
    grup: 'umum',
    q: 'Bagaimana legalitas Adara?',
    a: 'Adara memiliki akta pendirian dari Notaris Eva Junaida (No. 2, 3 November 2008) dengan beberapa akta perubahan, pengesahan Kemenkumham, izin pengumpulan uang dan/atau barang (SK No. 1/F.8/3/-1.848/e/2021), serta opini audit tahunan dari Kantor Akuntan Publik Ahmad Raharjo Utomo.',
  },
  {
    grup: 'umum',
    q: 'Apa makna nama Adara?',
    a: 'Dalam Bahasa Sansekerta, Adara memiliki arti indah, penghormatan, dan belas kasih. Dalam Bahasa Arab, Adara berarti mengelola, berasal dari kata ‘daro’ yang memiliki arti mengorbit.',
  },
  {
    grup: 'umum',
    q: 'Apa makna logo Adara?',
    a: 'Simbol hati pada logo Adara menjadi visualisasi seorang ibu yang sedang mendekap anaknya. Warna toska melambangkan ketenangan, kepercayaan, dan profesionalisme.',
  },
  {
    grup: 'umum',
    q: 'Di mana lokasi kantor Adara?',
    a: 'Kantor Adara berada di Jl. Moh. Kahfi 1, RT.6/RW.1, Cipedak, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12630.',
  },
  {
    grup: 'umum',
    q: 'Apa saja kontribusi Adara terhadap SDGs?',
    a: 'Adara berkontribusi pada 8 SDGs, yaitu Tanpa Kemiskinan, Tanpa Kelaparan, Kehidupan Sehat dan Sejahtera, Pendidikan Berkualitas, Air Bersih dan Sanitasi Layak, Pekerjaan Layak dan Pertumbuhan Ekonomi, Berkurangnya Kesenjangan, serta Kemitraan untuk Mencapai Tujuan.',
  },
  {
    grup: 'donasi',
    q: 'Bagaimana cara berdonasi lewat Adara?',
    a: 'Donasi dapat dilakukan lewat rekening resmi Adara, lalu mohon konfirmasi transfer ke WhatsApp Adara. Detail rekening tersedia di halaman Program.',
  },
  {
    grup: 'donasi',
    q: 'Apakah donasi saya bisa diverifikasi?',
    a: 'Setiap transfer mohon dikonfirmasi ke WhatsApp Adara agar dapat dicatat dan dilaporkan secara transparan. Laporan penyaluran juga dipublikasikan secara berkala.',
  },
  {
    grup: 'program',
    q: 'Apa saja program bantuan Adara?',
    a: 'Program bantuan Adara meliputi Pemberdayaan Perempuan, Dekap Yatim Palestina (DYP), Hidupkan Ahlul Qur’an (HAQ), Program Darurat, Air Bersih, dan Bagi-Bagi Qurban (BBQ).',
  },
  {
    grup: 'program',
    q: 'Apa saja program edukasi Adara?',
    a: 'Program edukasi Adara meliputi Maqdis Academy, Al-Aqsa Berkisah, Kajian Kepalestinian, Satu Rumah Satu Aqsa, Palestine Festival, dan Peringatan Peristiwa Bersejarah Palestina.',
  },
  {
    grup: 'komunitas',
    q: 'Apa itu Komunitas Adara?',
    a: 'Komunitas Adara pertama kali diinisiasi pada tahun 2017 dan kini tumbuh sebagai penggerak edukasi kepalestinian yang tersebar di seluruh Indonesia. Saat ini terdapat 19 komunitas aktif di 9 provinsi.',
  },
  {
    grup: 'komunitas',
    q: 'Bagaimana cara bergabung menjadi komunitas Adara?',
    a: 'Anda dapat mengajukan pembentukan komunitas Palestina di daerah Anda di bawah bimbingan Adara. Hubungi tim kami melalui WhatsApp untuk konsultasi lebih lanjut.',
  },
  {
    grup: 'komunitas',
    q: 'Apakah ada program volunteer?',
    a: 'Adara membuka kesempatan kepada masyarakat untuk menjadi volunteer dan ikut berbagai program. Silakan hubungi tim kami melalui WhatsApp untuk informasi opportunities terbaru.',
  },
  {
    grup: 'komunitas',
    q: 'Bagaimana cara menghubungi Adara?',
    a: 'Anda dapat menghubungi Adara melalui WhatsApp, Telegram, Instagram, Facebook, X, atau surel. Nomor WhatsApp resmi: +62 856-9295-6689.',
  },
];
