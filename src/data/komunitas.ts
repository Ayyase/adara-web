export interface Komunitas {
  nama: string;
  singkat: string;
  kota: string;
  provinsi: string;
  wilayah: 'Jawa' | 'Sumatera' | 'Bali & Nusa Tenggara' | 'Kalimantan & Sulawesi' | 'Papua';
  fokus: string;
  slug: string;
}

export const URUTAN_WILAYAH: Komunitas['wilayah'][] = [
  'Jawa',
  'Sumatera',
  'Bali & Nusa Tenggara',
  'Kalimantan & Sulawesi',
  'Papua',
];

/**
 * Daftar komunitas Adara. Sumber: halaman Komunitas Adara di situs lama.
 * Tambah entri baru cukup di sini, semua halaman otomatis terbarui.
 */
export const KOMUNITAS: Komunitas[] = [
  {
    nama: 'Aliansi Solidaritas Al Aqsha',
    singkat: 'ASA',
    kota: 'Depok',
    provinsi: 'Jawa Barat',
    wilayah: 'Jawa',
    fokus: 'Edukasi dan kajian kepalestinian',
    slug: 'asa-depok',
  },
  {
    nama: 'Assalamu’alaikum Palestina',
    singkat: 'Aspal',
    kota: 'Solo',
    provinsi: 'Jawa Tengah',
    wilayah: 'Jawa',
    fokus: 'Kajian kepalestinian dan seminar',
    slug: 'aspal-solo',
  },
  {
    nama: 'I Love Palestine Community',
    singkat: 'ILPC',
    kota: 'Depok',
    provinsi: 'Jawa Barat',
    wilayah: 'Jawa',
    fokus: 'Kampanye donasi dan pendidikan',
    slug: 'ilpc-depok',
  },
  {
    nama: 'Ibu Indonesia Peduli Palestina',
    singkat: 'IIPP',
    kota: 'Bekasi',
    provinsi: 'Jawa Barat',
    wilayah: 'Jawa',
    fokus: 'Pemberdayaan perempuan',
    slug: 'iipp-bekasi',
  },
  {
    nama: 'Komunitas Keluarga Cinta Palestina',
    singkat: 'KKCP',
    kota: 'Jakarta',
    provinsi: 'DKI Jakarta',
    wilayah: 'Jawa',
    fokus: 'Satu Rumah Satu Aqsa',
    slug: 'kkcp-jakarta',
  },
  {
    nama: 'Komunitas Muslimah Jepara Peduli Palestina',
    singkat: 'KMJPP',
    kota: 'Jepara',
    provinsi: 'Jawa Tengah',
    wilayah: 'Jawa',
    fokus: 'Edukasi anak dan remaja',
    slug: 'kmjpp-jepara',
  },
  {
    nama: 'Komunitas Muslimah Magelang Peduli Palestina',
    singkat: 'KMP2',
    kota: 'Magelang',
    provinsi: 'Jawa Tengah',
    wilayah: 'Jawa',
    fokus: 'Penguatan perempuan dan keluarga',
    slug: 'kmp2-magelang',
  },
  {
    nama: 'Komunitas Muslimah Peduli Al-Aqso',
    singkat: 'KOMPAQ',
    kota: 'Bogor',
    provinsi: 'Jawa Barat',
    wilayah: 'Jawa',
    fokus: 'Kajian dan seminar kepalestinian',
    slug: 'kompaq-bogor',
  },
  {
    nama: 'Komunitas Pecinta Al Aqsha',
    singkat: 'KPA',
    kota: 'Tangerang',
    provinsi: 'Banten',
    wilayah: 'Jawa',
    fokus: 'Aktivisme dan isu kepalestinian',
    slug: 'kpa-tangerang',
  },
  {
    nama: 'Komunitas Pecinta Al-Quds',
    singkat: 'KOTAQU',
    kota: 'Jakarta',
    provinsi: 'DKI Jakarta',
    wilayah: 'Jawa',
    fokus: 'Edukasi dan diseminasi',
    slug: 'kotaqu-jakarta',
  },
  {
    nama: 'Komunitas AlQur’an Peduli Palestina',
    singkat: 'KQPP',
    kota: 'Jakarta',
    provinsi: 'DKI Jakarta',
    wilayah: 'Jawa',
    fokus: 'Beasiswa penghafal Qur’an',
    slug: 'kqpp-jakarta',
  },
  {
    nama: 'Komunitas Sahabat Al-Quds Sumbar',
    singkat: 'KSQ',
    kota: 'Padang',
    provinsi: 'Sumatera Barat',
    wilayah: 'Sumatera',
    fokus: 'Edukasi kepalestinian',
    slug: 'ksq-sumbar',
  },
  {
    nama: 'Love For Palestine',
    singkat: 'LFP',
    kota: 'Bekasi',
    provinsi: 'Jawa Barat',
    wilayah: 'Jawa',
    fokus: 'Penyaluran donasi',
    slug: 'lfp-bekasi',
  },
  {
    nama: 'MATA PENA',
    singkat: 'MATA PENA',
    kota: 'Pangkalpinang',
    provinsi: 'Bangka Belitung',
    wilayah: 'Sumatera',
    fokus: 'Media dan jurnalisme',
    slug: 'mata-pena-pangkalpinang',
  },
  {
    nama: 'Muslimah Qur’ani Sahabat Al Aqsha',
    singkat: 'MQISA',
    kota: 'Jakarta',
    provinsi: 'DKI Jakarta',
    wilayah: 'Jawa',
    fokus: 'Kajian Muslimah dan Iqra',
    slug: 'mqisa-jakarta',
  },
  {
    nama: 'Nida’ul Aqsha',
    singkat: 'Nida’ul Aqsha',
    kota: 'Malang',
    provinsi: 'Jawa Timur',
    wilayah: 'Jawa',
    fokus: 'Edukasi dan kajian',
    slug: 'nidul-aqsha-malang',
  },
  {
    nama: 'Sahabat Muslim Peduli Al-Aqsa',
    singkat: 'SAMULA',
    kota: 'Lubuklinggau',
    provinsi: 'Sumatera Selatan',
    wilayah: 'Sumatera',
    fokus: 'Aktivisme sosial',
    slug: 'samula-lubuklinggau',
  },
  {
    nama: 'Sahabat Palestina Malang Raya',
    singkat: 'SAPA',
    kota: 'Malang',
    provinsi: 'Jawa Timur',
    wilayah: 'Jawa',
    fokus: 'Kampanye dan diseminasi',
    slug: 'sapa-malang',
  },
  {
    nama: 'Sahabat Peduli AlQuds',
    singkat: 'SPQ',
    kota: 'Bekasi',
    provinsi: 'Jawa Barat',
    wilayah: 'Jawa',
    fokus: 'Pendampingan dan donasi',
    slug: 'spq-bekasi',
  },
];

export function groupByWilayah(list: Komunitas[] = KOMUNITAS) {
  return URUTAN_WILAYAH.map((wilayah) => ({
    wilayah,
    items: list.filter((k) => k.wilayah === wilayah),
  })).filter((grup) => grup.items.length > 0);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
