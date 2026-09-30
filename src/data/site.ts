/**
 * Konfigurasi global situs.
 * Ubah nilai di sini untuk mengganti nama, kontak, domain, dan statistik.
 */
export const SITE = {
  name: 'Adara Relief International',
  shortName: 'Adara',
  legalName: 'Yayasan Adara Relief Internasional',
  tagline: 'Pemberdayaan Perempuan & Penyaluran Bantuan untuk Anak-Anak Palestina',
  description:
    'Adara Relief International adalah lembaga kemanusiaan yang dibentuk dari inisiasi perempuan Indonesia untuk membantu kelompok rentan, yaitu anak dan perempuan, di Palestina.',
  url: 'https://adararelief.com',
  locale: 'id_ID',
  founded: '2008',
  foundedDate: '14 Februari 2008',
  founders: 'Alm. Yoyoh Yusroh, S.Pd.I. & Dra. Siti Zainab, M.A.',
  email: 'info@adararelief.com',
  phone: '+62 856-9295-6689',
  phoneHref: 'https://wa.me/6285692956689',
  address:
    'Jl. Moh. Kahfi 1, RT.6/RW.1, Cipedak, Kec. Jagakarsa, Jakarta Selatan, DKI Jakarta 12630',
  addressShort: 'Cipedak, Jagakarsa, Jakarta Selatan 12630',
  mapUrl: 'https://maps.app.goo.gl/Vn5Mp5ThmcgdkvzR9',
  donateUrl: 'https://adaradonation.com/',
} as const;

export const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Komunitas', href: '/komunitas' },
  { label: 'Program', href: '/program' },
  { label: 'Berita', href: '/berita' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const SOCIALS = [
  { label: 'Telegram', href: 'http://t.me/adararelief', icon: 'telegram' },
  { label: 'Instagram', href: 'https://www.instagram.com/adararelief/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://web.facebook.com/AdaraReliefInternational/', icon: 'facebook' },
  { label: 'X (Twitter)', href: 'https://twitter.com/adararelief', icon: 'x' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/AdaraReliefInternational', icon: 'youtube' },
  { label: 'WhatsApp', href: 'https://wa.me/6285692956689', icon: 'whatsapp' },
] as const;

export const REK_ONGKOS = [
  { bank: 'Bank Muamalat', no: '3090002717' },
  { bank: 'Bank Mandiri', no: '070-000-5658799' },
  { bank: 'Bank Syariah Indonesia', no: '3092055120' },
  { bank: 'Bank BCA', no: '5520749723' },
] as const;

/** Statistik sorotan di beranda. `prefix` dipakai untuk tahun, `suffix` untuk pembulatan. */
export const STATS = [
  { value: 19, suffix: '+', label: 'Komunitas Adara', hint: 'tersebar di 9 provinsi' },
  { value: 2008, prefix: 'tahun ', label: 'Berdiri', hint: 'izin resmi sejak 2009' },
  { value: 40, suffix: 'K+', label: 'Penerima manfaat', hint: 'per tahun' },
  { value: 8, label: ' SDGs tercapai', hint: 'dari 17 tujuanglobal' },
] as const;

/** Kata kunci untuk meta SEO (dipakai di BaseLayout). */
export const SEO_KEYWORDS = [
  'Adara Relief International',
  'yayasan Adara',
  'bantuan Palestina',
  'program swallowers Palestine',
  'komunitas Palestina Indonesia',
  'edukasi kepalestinian',
  'pemberdayaan perempuan Palestina',
  'donasi Palestina',
  'satu rumah satu Aqsa',
  'dekap yatim Palestina',
  'humanitarian aid Indonesia',
];
