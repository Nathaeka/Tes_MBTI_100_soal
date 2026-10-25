/**
 * Comprehensive descriptive data for all 16 MBTI Personality Types in Indonesian.
 * Ditulis secara mendalam, gamblang, dan sangat ramah untuk orang awam tanpa istilah membingungkan.
 */

export const PERSONALITY_GROUPS = {
  ANALYSTS: { 
    name: 'Para Analis (NT)', 
    title: 'Analis',
    textColor: 'text-purple-600', 
    accentBg: 'bg-purple-100', 
    badge: 'bg-purple-100 text-purple-700 border-purple-200',
    cardBorder: 'border-purple-200/80',
    primaryButton: 'bg-purple-600 hover:bg-purple-700 shadow-purple-200',
    gradient: 'from-purple-600 to-indigo-600',
    lightGradient: 'from-purple-50/90 to-indigo-50/50',
    iconBg: 'bg-purple-100 text-purple-700',
    typeBadge: 'bg-purple-50 border-purple-200 text-purple-800'
  },
  DIPLOMATS: { 
    name: 'Para Diplomat (NF)', 
    title: 'Diplomat',
    textColor: 'text-emerald-600', 
    accentBg: 'bg-emerald-100', 
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    cardBorder: 'border-emerald-200/80',
    primaryButton: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200',
    gradient: 'from-emerald-600 to-teal-600',
    lightGradient: 'from-emerald-50/90 to-teal-50/50',
    iconBg: 'bg-emerald-100 text-emerald-700',
    typeBadge: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  SENTINELS: { 
    name: 'Para Pengawal (SJ)', 
    title: 'Pengawal',
    textColor: 'text-blue-600', 
    accentBg: 'bg-blue-100', 
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
    cardBorder: 'border-blue-200/80',
    primaryButton: 'bg-blue-600 hover:bg-blue-700 shadow-blue-200',
    gradient: 'from-blue-600 to-cyan-600',
    lightGradient: 'from-blue-50/90 to-sky-50/50',
    iconBg: 'bg-blue-100 text-blue-700',
    typeBadge: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  EXPLORERS: { 
    name: 'Para Penjelajah (SP)', 
    title: 'Penjelajah',
    textColor: 'text-amber-600', 
    accentBg: 'bg-amber-100', 
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    cardBorder: 'border-amber-200/80',
    primaryButton: 'bg-amber-500 hover:bg-amber-600 shadow-amber-200',
    gradient: 'from-amber-500 to-orange-500',
    lightGradient: 'from-amber-50/90 to-orange-50/50',
    iconBg: 'bg-amber-100 text-amber-800',
    typeBadge: 'bg-amber-50 border-amber-200 text-amber-900'
  }
};

export const PERSONALITY_TYPES = {
  // ==========================================
  // PARA ANALIS (NT) - Ungu
  // ==========================================
  INTJ: {
    code: 'INTJ',
    name: 'Sang Arsitek Strategis',
    category: 'ANALYSTS',
    groupName: 'Para Analis (NT)',
    tagline: 'Segala hal selalu bisa ditingkatkan melalui strategi cerdas dan pemikiran mendalam.',
    description: 'INTJ adalah pemikir mandiri dengan visi jangka panjang yang sangat terarah. Anda memandang dunia seperti papan catur raksasa: setiap langkah memiliki sebab dan akibat, dan Anda selalu merancang rencana tiga langkah lebih maju dari orang lain. Anda tidak mudah puas dengan jawaban "karena memang dari dulu sudah begitu", melainkan selalu mencari cara yang lebih efisien, logis, dan elegan.',
    overview: [
      'Sebagai seorang INTJ (Introvert, Intuitive, Thinking, Judging), Anda mengumpulkan energi dari ketenangan berpikir sendiri, melihat pola masa depan di balik kejadian, mengambil keputusan berdasarkan logika dingin, serta menyukai rencana hidup yang tersusun rapi.',
      'Dalam kehidupan nyata, Anda adalah orang yang sangat menghargai waktu dan benci pemborosan energi. Anda lebih memilih memiliki 1-2 sahabat karib yang bisa diajak diskusi bermutu daripada 50 kenalan basa-basi. Jika dihadapkan pada masalah besar, Anda tidak akan panik; Anda akan menyepi sejenak, membedah akar masalahnya, dan keluar dengan solusi sistematis yang matang.'
    ],
    howOthersSeeYou: 'Orang lain sering memandang Anda sebagai sosok yang tenang, cerdas, berwibawa, dan mandiri. Namun, bagi yang belum kenal dekat, Anda kadang terkesan pendiam atau susah ditebak karena jarang mengumbar emosi di tempat umum.',
    strengths: [
      'Pemikiran Strategis Jangka Panjang: Mampu memprediksi arah tren dan risiko sebelum orang lain menyadarinya.',
      'Mandiri & Percaya Diri: Memiliki keyakinan teguh pada hasil analisis sendiri tanpa mudah goyah oleh omongan orang.',
      'Orientasi Efisiensi Tinggi: Sangat benci ketidakefektifan, selalu berusaha merampingkan proses yang rumit menjadi ringkas.',
      'Kemauan Belajar Tak Terbatas: Rasa ingin tahu intelektual yang kuat untuk terus menguasai keahlian baru secara mendalam.',
      'Standar Kualitas Unggul: Tidak mau bekerja setengah-setengah; apa yang Anda buat harus rapi, tepat, dan berfungsi optimal.'
    ],
    growthAreas: [
      'Bisa Terkesan Terlalu Menghakimi: Terkadang kurang sabar saat rekan kerja lambat memahami konsep logis yang bagi Anda sudah jelas.',
      'Perfeksionisme Ekstrem: Sering merasa tidak puas jika kenyataan di lapangan tidak 100% sejalan dengan konsep ideal di kepala.',
      'Kerap Mengabaikan Sisi Emosional: Perlu melatih empati bahwa manusia sering digerakkan oleh perasaan, bukan sekadar logika murni.'
    ],
    communicationStyle: 'Lugas, langsung ke inti permasalahan (to-the-point), hemat kata, dan sangat menghargai data faktual daripada gosip atau obrolan basa-basi.',
    decisionMaking: 'Objektif tanpa bias emosional, menimbang risiko untung-rugi secara terukur, dan memproyeksikan dampaknya hingga beberapa tahun ke depan.',
    workStyle: 'Paling produktif saat diberi kebebasan dan otonomi penuh tanpa mikromanajemen; menyukai target yang jelas dengan jadwal yang terencana.',
    careerPaths: ['Software Architect', 'Konsultan Strategi Bisnis', 'Data Scientist / AI Specialist', 'Akademisi / Peneliti', 'Perencana Keuangan'],
    dailyTips: [
      'Luangkan 5 menit untuk menyapa atau mengapresiasi orang lain secara sederhana sebelum langsung membahas urusan teknis.',
      'Ingatlah bahwa "selesai dengan baik" sering kali lebih berharga daripada "sempurna tapi tidak kunjung dirilis".',
      'Istirahatkan otak Anda dari menganalisis segala hal saat malam hari agar kualitas tidur tetap terjaga.'
    ]
  },

  INTP: {
    code: 'INTP',
    name: 'Sang Pemikir Logis & Konseptor',
    category: 'ANALYSTS',
    groupName: 'Para Analis (NT)',
    tagline: 'Mencari kebenaran hakiki dan membongkar rahasia bagaimana dunia bekerja.',
    description: 'INTP adalah penjelajah ide sejati yang tidak pernah berhenti penasaran. Pikiran Anda seperti laboratorium intelektual: Anda gemar membongkar konsep, mencari kelemahan dalam argumen, dan menemukan hubungan unik antara dua hal yang tampaknya sama sekali tidak berkaitan.',
    overview: [
      'Sebagai seorang INTP, Anda menyukai ruang hening untuk merenung, haus akan pengetahuan baru, mengandalkan penalaran logis, dan lebih menyukai pilihan yang fleksibel daripada jadwal kaku yang mengikat.',
      'Dalam pergaulan sehari-hari, Anda adalah pribadi yang santai, tidak suka menghakimi gaya hidup orang lain, dan memiliki selera humor cerdas yang khas. Anda mungkin tampak linglung karena pikiran Anda sedang berkelana memikirkan teori menarik, namun saat topik yang Anda sukai dibahas, mata Anda akan berbinar dan penjelasan Anda sangat mendalam.'
    ],
    howOthersSeeYou: 'Orang di sekitar Anda mengagumi kecerdasan orisinal Anda dan sering meminta pendapat ketika menghadapi teka-teki rumit. Anda dipandang ramah dan santai, meski kadang dianggap penyendiri yang asyik dengan dunianya sendiri.',
    strengths: [
      'Pikiran Analitis & Orisinal: Mampu melihat celah logika yang luput dari pandangan orang kebanyakan.',
      'Sangat Terbuka pada Sudut Pandang Baru: Tidak dogmatis, selalu siap mengubah kesimpulan jika disajikan data baru yang lebih sahih.',
      'Kejujuran Intelektual: Menilai kebenaran apa adanya tanpa terpengaruh oleh gengsi, pangkat, atau popularitas.',
      'Kemampuan Pemecahan Masalah Abstrak: Piawai merumuskan solusi kreatif untuk problem konseptual yang belum pernah dipecahkan orang.'
    ],
    growthAreas: [
      'Jebakan Analisis Berlebihan (Overthinking): Sering terlalu lama merenungkan semua kemungkinan hingga lambat mengambil aksi nyata.',
      'Cepat Bosan pada Hal Rutin: Begitu konsep utamanya sudah Anda pahami, Anda cenderung malas mengerjakan detail administratifnya.',
      'Menunda Eksekusi (Prokrastinasi): Mudah tergoda melompat ke topik baru yang lebih seru sebelum proyek lama benar-benar tuntas.'
    ],
    communicationStyle: 'Hati-hati dalam memilih kosakata agar benar-benar akurat, suka menggunakan analogi konseptual, dan gemar melontarkan pertanyaan reflektif.',
    decisionMaking: 'Membedah permasalahan dari prinsip paling mendasar (first principles), mencari konsistensi logika, dan meminimalkan bias emosional.',
    workStyle: 'Membutuhkan lingkungan kerja yang santai, minim birokrasi, dan memberi keleluasaan waktu untuk bereksplorasi secara mendalam.',
    careerPaths: ['Software Engineer / System Designer', 'Fisikawan / Matematikawan', 'Analis Kebijakan / Riset', 'Filosof / Esais', 'Game Designer'],
    dailyTips: [
      'Terapkan aturan "Action First": Mulailah melangkah dengan solusi yang 80% bagus daripada menunggu solusi 100% sempurna yang tak kunjung selesai.',
      'Gunakan catatan to-do list harian kecil agar ide-ide brilian Anda tidak hilang menguap begitu saja.',
      'Sediakan waktu untuk berolahraga ringan atau jalan santai di alam untuk mengistirahatkan pikiran yang berputar non-stop.'
    ]
  },

  ENTJ: {
    code: 'ENTJ',
    name: 'Sang Komandan Pemimpin Visioner',
    category: 'ANALYSTS',
    groupName: 'Para Analis (NT)',
    tagline: 'Memimpin perubahan dengan tekad baja, visi berani, dan eksekusi presisi.',
    description: 'ENTJ adalah sosok penggerak alami yang memiliki energi besar, ketegasan luar biasa, dan kemampuan melihat gambaran masa depan dengan sangat jelas. Di mana ada kekacauan atau ketidakpastian, di situlah Anda hadir untuk menata arah, membagi peran, dan membawa semua orang menuju kemenangan bersama.',
    overview: [
      'Sebagai ENTJ, Anda mendapatkan energi dari memimpin dan berinteraksi dengan orang banyak, berpikir visioner tentang potensi pertumbuhan, mengambil keputusan berdasarkan fakta dan angka, serta menyukai struktur yang rapi dan terorganisir.',
      'Bagi Anda, rintangan bukanlah alasan untuk berhenti melainkan tantangan yang memacu adrenalin. Anda percaya bahwa dengan strategi yang tepat dan kemauan kerja keras, tidak ada target yang mustahil untuk dicapai.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai pemimpin yang karismatik, percaya diri tinggi, dan sangat bisa diandalkan dalam situasi genting. Anda adalah sosok "problem solver" yang tidak ragu mengambil tanggung jawab ketika orang lain takut melangkah.',
    strengths: [
      'Kepemimpinan Alami & Karismatik: Mampu membakar semangat tim dan menyatukan energi banyak orang demi satu visi besar.',
      'Pengambilan Keputusan Cepat & Tegas: Tidak plin-plan; Anda berani menimbang risiko dan memutuskannya secara lugas.',
      'Keahlian Manajemen Sistem: Sangat mahir mengatur alur kerja, mendelegasikan tugas, dan mengawasi target agar tercapai tepat waktu.',
      'Pantang Menyerah Menghadapi Tekanan: Semakin sulit keadaannya, semakin tajam fokus Anda untuk menemukan jalan keluar.'
    ],
    growthAreas: [
      'Terkadang Terlalu Keras / Tidak Sabar: Bisa membuat orang lain merasa terintimidasi jika ritme kerja mereka tidak secepat Anda.',
      'Kurang Peka pada Perasaan Subjektif: Sering menganggap keluhan emosional sebagai tanda kelemahan, padahal itu bagian dari dinamika manusiawi.',
      'Beban Kerja Berlebihan (Workaholic): Sering lupa istirahat karena terlalu terpaku mengejar target pencapaian berikutnya.'
    ],
    communicationStyle: 'Tegas, percaya diri, langsung mengarahkan tindakan, terstruktur, dan tidak suka berputar-putar pada hal yang tidak produktif.',
    decisionMaking: 'Sangat rasional, berorientasi hasil jangka panjang, mengutamakan efisiensi biaya dan waktu, serta berani mengambil risiko kalkulatif.',
    workStyle: 'Sangat dominan di kursi kepemimpinan, menyukai proyek berskala besar, menetapkan standar performa tinggi untuk diri sendiri dan tim.',
    careerPaths: ['CEO / Direktur Perusahaan', 'Manajer Operasional', 'Venture Capitalist / Investor', 'Pengacara Korporasi', 'Konsultan Manajemen'],
    dailyTips: [
      'Berikan waktu mendengar keluh kesah anggota tim sebelum langsung melontarkan koreksi atau perintah.',
      'Ingat bahwa tidak semua hal dalam hidup adalah kompetisi; nikmati momen kebersamaan santai tanpa agenda target.',
      'Latih diri mendelegasikan kepercayaan penuh tanpa perlu memeriksa ulang detail-detail kecil secara berlebihan.'
    ]
  },

  ENTP: {
    code: 'ENTP',
    name: 'Sang Inovator & Katalisator Ide',
    category: 'ANALYSTS',
    groupName: 'Para Analis (NT)',
    tagline: 'Selalu ada sudut pandang baru yang belum pernah dijelajahi siapa pun.',
    description: 'ENTP adalah pribadi yang gesit secara mental, humoris, dan gemar menantang cara berpikir lama. Anda melihat kemungkinan di mana-mana dan senang menjadi orang yang memantik ide-ide baru yang segar, orisinal, dan mendobrak kebiasaan kuno.',
    overview: [
      'Sebagai ENTP, Anda menyukai pergaulan dinamis, memandang hidup penuh dengan potensi terobosan, menggunakan logika untuk menguji segala hal, dan menyukai kebebasan spontan tanpa batasan aturan kaku.',
      'Anda sangat menikmati obrolan seru dan debat sehat untuk menguji argumen dari berbagai sudut pandang. Di pesta atau ruang rapat, kehadiran Anda selalu menghidupkan suasana karena Anda penuh dengan cerita menarik, ide kreatif, dan celetukan cerdas.'
    ],
    howOthersSeeYou: 'Teman-teman memandang Anda sebagai sosok yang asyik, berpikiran terbuka, berwawasan luas, dan tidak pernah membosankan. Anda sering dijuluki "pabrik ide" yang selalu punya jawaban tak terduga untuk setiap masalah.',
    strengths: [
      'Kreativitas & Daya Cipta Luar Biasa: Mampu merancang ide-ide segar yang tidak terpikirkan oleh orang kebanyakan.',
      'Kemampuan Komunikasi & Persuasi: Pandai berbicara di depan umum, memikat audiens, dan meyakinkan orang lain.',
      'Kemampuan Beradaptasi Cepat: Sangat fleksibel, tidak panik saat rencana berubah, dan cepat menemukan alternatif baru.',
      'Keberanian Berinovasi: Tidak takut gagal mencoba hal baru yang belum terbukti selama memiliki potensi terobosan besar.'
    ],
    growthAreas: [
      'Sulit Menyelesaikan Apa yang Dimulai: Sering sangat bersemangat di awal proyek, namun mudah kehilangan minat saat masuk tahap detail rutin.',
      'Bisa Terkesan Suka Membantah: Terkadang gemar berdebat hanya demi menguji argumen, yang bisa disalahpahami sebagai sikap tidak kooperatif.',
      'Membuat Terlalu Banyak Komitmen: Sering menyanggupi banyak ajakan atau proyek sekaligus hingga kewalahan sendiri.'
    ],
    communicationStyle: 'Cepat, ceria, kaya analogi dan metafora jenaka, suka memicu tukar pikiran aktif, dan tidak sungkan mengajukan sudut pandang kontras.',
    decisionMaking: 'Menjelajahi beragam skenario kemungkinan, menguji kelayakan logisnya, dan memilih opsi yang membuka ruang gerak paling luas.',
    workStyle: 'Bekerja terbaik di lingkungan yang penuh kebebasan berkreasi, minim rutinitas harian yang monoton, dan mengapresiasi inovasi.',
    careerPaths: ['Startup Founder', 'Creative Director', 'Spesialis Inovasi Produk', 'Strategic Negotiator', 'Jurnalis Investigasi'],
    dailyTips: [
      'Pilihlah 1 atau 2 proyek utama yang WAJIB dituntaskan hingga garis finis sebelum Anda memulai ide baru yang menggoda.',
      'Sadari kapan saatnya berdebat santai dan kapan saatnya menahan diri demi menjaga keharmonisan perasaan orang lain.',
      'Gunakan sistem pengingat atau pasangan kerja yang disiplin untuk membantu mengurus detail teknis administrasi.'
    ]
  },

  // ==========================================
  // PARA DIPLOMAT (NF) - Hijau
  // ==========================================
  INFJ: {
    code: 'INFJ',
    name: 'Sang Advokat Bijak & Visioner Hati',
    category: 'DIPLOMATS',
    groupName: 'Para Diplomat (NF)',
    tagline: 'Mendedikasikan hidup untuk menciptakan harmoni mendalam dan kebaikan bersama.',
    description: 'INFJ adalah salah satu tipe kepribadian paling istimewa: perpaduan langka antara idealisme yang tulus dan tekad kuat untuk mewujudkannya menjadi nyata. Anda memiliki empati mendalam yang mampu merasakan suasana hati dan niat orang lain, bahkan sebelum mereka mengucapkannya dengan kata-kata.',
    overview: [
      'Sebagai INFJ, Anda mengisi kembali energi dalam keheningan batin, memiliki intuisi tajam mengenai dinamika psikologi manusia, mendasarkan keputusan pada nilai-nilai moral, dan menyukai keteraturan hidup yang terencana.',
      'Anda bukan sekadar pemimpi; Anda memiliki dorongan batin yang kuat untuk meninggalkan dunia dalam keadaan yang lebih baik dari saat Anda menemukannya. Anda sangat selektif dalam memilih lingkaran pertemanan, namun jika Anda sudah mempercayai seseorang, kesetiaan dan ketulusan Anda tidak ada tandingannya.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai pendengar setia yang menenangkan, bijaksana melampaui usia, dan memiliki integritas yang teguh. Anda sering menjadi tempat curhat utama bagi orang-orang terdekat saat mereka menghadapi badai hidup.',
    strengths: [
      'Intuisi Emosional yang Tajam: Sangat peka terhadap motivasi tersembunyi dan perasaan orang lain tanpa perlu banyak bertanya.',
      'Integritas & Prinsip Moral Kokoh: Berdiri teguh membela kebenaran dan keadilan sosial bahkan ketika itu tidak populer.',
      'Kemampuan Menginspirasi Sesama: Mampu menyampaikan pesan-pesan bermakna yang menyentuh hati dan mengubah cara pandang orang.',
      'Fokus & Dedikasi Tinggi: Bekerja dengan sepenuh hati pada misi atau proyek yang memiliki dampak kemanusiaan nyata.'
    ],
    growthAreas: [
      'Rentan Mengalami Burnout Emosional: Sering menyerap kesedihan orang lain seolah itu beban pribadi Anda sendiri.',
      'Terlalu Tertutup: Sangat sulit membuka kerentanan pribadi kepada orang lain, sehingga menanggung kesedihan sendirian.',
      'Perfeksionis pada Diri Sendiri: Cenderung merasa bersalah jika belum mampu menolong semua orang di sekitar Anda.'
    ],
    communicationStyle: 'Lembut, penuh empati, berbobot, memilih kata dengan sangat hati-hati, dan lebih menyukai obrolan mendalam empat mata dibanding keramaian.',
    decisionMaking: 'Memadukan nilai-nilai moral fundamental, kata hati nurani, serta dampaknya bagi kebahagiaan dan martabat sesama manusia.',
    workStyle: 'Fokus pada pekerjaan yang memiliki tujuan mulia, menyukai ruang kerja yang tenang, serta mengapresiasi hubungan kerja yang saling menghormati.',
    careerPaths: ['Psikolog / Konselor Kehidupan', 'Penulis / Editor Buku', 'Pengembang Organisasi Sosial', 'Pengajar / Dosen Humaniora', 'HR People Specialist'],
    dailyTips: [
      'Belajarlah menetapkan batasan emosional yang sehat: Anda berhak berkata "tidak" tanpa perlu merasa bersalah.',
      'Sisihkan waktu khusus setiap minggu untuk me-time total tanpa interaksi pesan digital guna mengisi ulang energi batin.',
      'Bagikan kegundahan Anda pada satu sahabat terpercaya; Anda tidak harus selalu menjadi sosok yang kuat bagi semua orang.'
    ]
  },

  INFP: {
    code: 'INFP',
    name: 'Sang Mediator yang Tulus & Puitis',
    category: 'DIPLOMATS',
    groupName: 'Para Diplomat (NF)',
    tagline: 'Tetap setia pada suara hati dan menyebarkan kebaikan tanpa syarat.',
    description: 'INFP adalah pribadi berjiwa lembut, penuh imajinasi, dan sangat menghargai keaslian diri (otentisitas). Anda memiliki dunia batin yang kaya akan nilai-nilai kebaikan, mimpi indah, dan empati tulus bagi mereka yang tertindas atau tersisihkan.',
    overview: [
      'Sebagai INFP, Anda mendapatkan ketenangan dari waktu menyendiri, melihat makna simbolik di balik peristiwa sehari-hari, menimbang segala hal dengan perasaan hati yang peka, dan menyukai kebebasan berekspresi tanpa aturan mengekang.',
      'Anda adalah sosok yang tidak suka kepura-puraan. Dalam pergaulan, Anda tidak peduli pada status sosial atau harta kekayaan; Anda lebih peduli pada ketulusan hati seseorang. Kerap kali Anda mengekspresikan kedalaman rasa melalui tulisan, seni, musik, atau perbuatan baik sederhana yang dilakukan secara diam-diam.'
    ],
    howOthersSeeYou: 'Teman-teman melihat Anda sebagai sosok yang hangat, tidak suka menghakimi, kreatif, dan sangat menerima kekurangan orang lain apa adanya. Anda adalah sahabat yang aman untuk menjadi diri sendiri tanpa rasa takut dihakimi.',
    strengths: [
      'Empati yang Amat Dalam: Mampu merasakan kepedihan orang lain dan memberikan pelukan emosional yang tulus dan menghibur.',
      'Keaslian Diri yang Sejati: Tidak mau hidup berpura-pura demi menyenangkan orang lain; setia pada nilai-nilai batin sendiri.',
      'Kreativitas & Imajinasi Puitis: Piawai merangkai kata, cerita, atau karya seni yang sarat makna dan sentuhan jiwa.',
      'Pikiran Terbuka & Penuh Toleransi: Menerima keberagaman manusia dan selalu memberi kesempatan kedua bagi orang yang berbuat salah.'
    ],
    growthAreas: [
      'Terlalu Memasukkan Hal ke Hati (Baper): Rentan merasa terluka oleh kritik kecil yang sebenarnya bermaksud membangun.',
      'Kerap Menghindar dari Kenyataan Praktis: Sering melarikan diri ke dunia lamunan saat menghadapi urusan keuangan atau konflik nyata.',
      'Sulit Mengambil Tindakan Disiplin: Kadang menunda pekerjaan penting hanya karena "lagi tidak ada mood".'
    ],
    communicationStyle: 'Rendah hati, hangat, reflektif, menyimak dengan penuh perhatian, dan memilih kata-kata yang tidak menyinggung perasaan siapa pun.',
    decisionMaking: 'Sangat dipandu oleh nilai batin dan keselarasan moral: "Apakah pilihan ini sesuai dengan hati nurani saya yang paling jujur?"',
    workStyle: 'Berkembang pesat di tempat kerja yang menghargai fleksibilitas, mendukung kreativitas personal, dan memiliki misi kemanusiaan.',
    careerPaths: ['Penulis Kreatif / Copywriter', 'Terapis Seni / Konselor', 'Penerjemah / Linguis', 'Desainer Grafis', 'Pekerja Kemanusiaan'],
    dailyTips: [
      'Jangan menunggu "mood sempurna" untuk mulai berkarya; mulailah 5 menit pertama, biasanya inspirasi akan menyusul di tengah jalan.',
      'Ingatlah bahwa kritik terhadap hasil kerja Anda bukan berarti orang tersebut membenci pribadi Anda.',
      'Tetapkan rutinitas kecil yang konsisten untuk membereskan urusan keuangan dan jadwal harian Anda.'
    ]
  },

  ENFJ: {
    code: 'ENFJ',
    name: 'Sang Protagonis Inspiratif & Pengayom',
    category: 'DIPLOMATS',
    groupName: 'Para Diplomat (NF)',
    tagline: 'Melihat potensi terbaik dalam diri setiap orang dan membimbing mereka meraihnya.',
    description: 'ENFJ adalah sosok pengayom yang karismatik, hangat, dan memiliki kemampuan alami untuk menggerakkan orang lain menuju kebaikan bersama. Anda memiliki bakat istimewa dalam mengenali bakat terpendam orang di sekitar Anda dan dengan tulus membantu mereka mengembangkannya.',
    overview: [
      'Sebagai ENFJ, Anda berenergi saat berada di tengah komunitas, membayangkan masa depan yang lebih harmonis, mengambil keputusan dengan mempertimbangkan kesejahteraan bersama, serta menyukai rencana aksi yang tertata rapi.',
      'Di tempat kerja, sekolah, maupun keluarga, Anda sering menjadi perekat sosial yang menyatukan orang-orang dengan latar belakang berbeda. Senyuman tulus dan perhatian hangat Anda membuat siapa pun merasa dihargai dan termotivasi untuk menjadi versi terbaik dari diri mereka.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai sosok yang sangat ramah, penuh perhatian, berjiwa pemimpin, dan dapat dipercaya. Anda sering dijadikan tempat bersandar dan dipercaya memimpin acara karena kepedulian Anda yang nyata pada setiap peserta.',
    strengths: [
      'Karisma & Kepemimpinan Emosional: Mampu menginspirasi dan mempersatukan kelompok dengan komunikasi yang menggugah hati.',
      'Kepedulian Tulus pada Sesama: Bahagia melihat keberhasilan orang lain dan selalu siap memberikan dukungan moral maupun nyata.',
      'Keterampilan Komunikasi Luar Biasa: Piawai berbicara di depan umum sekaligus lihai membaca suasana hati lawan bicara secara peka.',
      'Organisator yang Handal: Mampu merancang acara atau program kemasyarakatan dengan rapi, tepat waktu, dan berkesan.'
    ],
    growthAreas: [
      'Terlalu Memikirkan Masalah Orang Lain: Kerap menguras energi diri sendiri demi membereskan urusan hidup orang lain yang belum tentu meminta bantuan.',
      'Sangat Terpukul oleh Penolakan / Konflik: Cenderung cemas berlebihan jika ada orang dalam kelompok yang tidak menyukai Anda.',
      'Mengabaikan Kebutuhan Pribadi: Sering menaruh kebahagiaan orang lain di atas kesehatan dan kenyamanan diri sendiri.'
    ],
    communicationStyle: 'Antusias, hangat, memotivasi, melibatkan semua orang dalam diskusi, dan selalu menyisipkan kata-kata apresiasi tulus.',
    decisionMaking: 'Mempertimbangkan dampak moral bagi semua pihak, mengutamakan keharmonisan relasi, dan berusaha menciptakan solusi menang-menang (win-win).',
    workStyle: 'Sangat menyukai kolaborasi tim, lingkungan yang saling menyemangati, serta peran-peran yang melibatkan pembimbingan atau pelayanan publik.',
    careerPaths: ['Trainer / Motivator Pembelajaran', 'Kepala HRD / Culture Specialist', 'Pengajar / Kepala Sekolah', 'Hubungan Masyarakat (PR)', 'Konselor Keluarga'],
    dailyTips: [
      'Ingat bahwa Anda tidak bertanggung jawab atas kebahagiaan semua orang; biarkan orang lain belajar memecahkan masalah mereka sendiri.',
      'Jadwalkan "waktu untuk diri sendiri" tanpa melayani permintaan bantuan orang lain agar baterai emosional Anda tidak jebol.',
      'Terimalah bahwa ketidaksepakatan atau konflik kecil adalah bagian wajar dari hubungan yang sehat.'
    ]
  },

  ENFP: {
    code: 'ENFP',
    name: 'Sang Juru Kampanye Ceria & Kreatif',
    category: 'DIPLOMATS',
    groupName: 'Para Diplomat (NF)',
    tagline: 'Hidup adalah petualangan magis yang penuh dengan kemungkinan tanpa batas.',
    description: 'ENFP adalah jiwa bebas yang berenergi tinggi, penuh senyuman, dan memiliki rasa ingin tahu yang tak pernah padam. Bagi Anda, hidup ini terlalu kaya dan menarik untuk dijalani dengan rutinitas membosankan. Anda selalu melihat potensi cerah di setiap orang dan peristiwa.',
    overview: [
      'Sebagai ENFP, Anda mendapatkan semangat meluap dari interaksi sosial, gemar mengeksplorasi ide-ide baru yang tak terduga, dipandu oleh rasa empati yang hangat, serta menyukai kebebasan spontan tanpa kekangan aturan kaku.',
      'Anda adalah sosok yang mudah akrab dengan siapa saja. Dalam hitungan menit setelah berkenalan, Anda sudah bisa mengobrol akrab dari topik paling konyol hingga makna terdalam kehidupan. Imajinasi Anda bagaikan kembang api yang tak henti-hentinya meluncurkan ide seru.'
    ],
    howOthersSeeYou: 'Teman-teman menganggap Anda sebagai pembawa keceriaan, hangat, sangat kreatif, dan tidak pernah kehabisan cerita seru. Kehadiran Anda selalu ditunggu-tunggu karena Anda selalu berhasil membuat suasana menjadi meriah dan menyenangkan.',
    strengths: [
      'Kreativitas & Antusiasme Menular: Mampu membangkitkan semangat orang-orang yang lesu dengan energi positif yang Anda pancarkan.',
      'Kecerdasan Sosial yang Hebat: Sangat luwes berbaur di berbagai kalangan dan mahir membangun hubungan akrab dalam sekejap.',
      'Pikiran Terbuka & Solutif: Mampu melihat jalan keluar yang segar di saat orang lain merasa jalan buntu.',
      'Tulus & Menghargai Orang Lain: Selalu berusaha melihat sisi baik dari setiap orang tanpa memandang remeh siapa pun.'
    ],
    growthAreas: [
      'Cepat Kehilangan Fokus: Terlalu banyak hal baru yang menarik perhatian Anda, sehingga proyek yang sudah dimulai sering tidak diselesaikan.',
      'Sangat Tidak Suka Hal Administratif: Cenderung malas mengurus berkas, data angka, atau pekerjaan rumah tangga yang berulang.',
      'Bisa Mengalami Kelelahan Sosial Mendadak: Mengira energi sosialnya tak terbatas, lalu tiba-tiba drop dan butuh menyendiri total.'
    ],
    communicationStyle: 'Ekspresif, jenaka, penuh warna, cepat melompat dari satu topik seru ke topik lainnya, dan sangat hangat menatap lawan bicara.',
    decisionMaking: 'Mengandalkan intuisi perasaan dan antusiasme: "Apakah ini hal yang membahagiakan dan selaras dengan nilai kebebasan saya?"',
    workStyle: 'Optimal di tempat kerja yang fleksibel, dinamis, mengapresiasi inovasi out-of-the-box, dan minim aturan birokrasi kaku.',
    careerPaths: ['Content Creator / Creative Conceptor', 'Event Conceptor / Promoter', 'Konsultan Branding & Media', 'Psikolog Komunitas', 'Wirausahawan Sosial'],
    dailyTips: [
      'Tuliskan ide-ide baru Anda di buku catatan khusus, tapi berjanjilah untuk menuntaskan pekerjaan saat ini dulu sebelum memulai yang baru.',
      'Gunakan bantuan alarm atau aplikasi kalender sederhana untuk mengingat janji temu dan batas waktu penting.',
      'Sediakan waktu tenang tanpa handphone di malam hari untuk menenangkan pikiran yang melompat-lompat.'
    ]
  },

  // ==========================================
  // PARA PENGAWAL (SJ) - Biru
  // ==========================================
  ISTJ: {
    code: 'ISTJ',
    name: 'Sang Logistik yang Teliti & Berintegritas',
    category: 'SENTINELS',
    groupName: 'Para Pengawal (SJ)',
    tagline: 'Keandalan, ketelitian, dan integritas adalah fondasi dari segala keberhasilan.',
    description: 'ISTJ adalah tiang penyangga yang kokoh dalam keluarga, masyarakat, dan tempat kerja. Anda dikenal karena dedikasi yang pantang ingkar janji, ketelitian memperhatikan detail-detail nyata, serta rasa hormat yang mendalam pada aturan, fakta, dan metode yang sudah terbukti berhasil.',
    overview: [
      'Sebagai ISTJ, Anda mengisi tenaga dari ketenangan suasana privat, memproses informasi berdasarkan fakta konkret dan bukti nyata, mengambil keputusan secara logis objektif, serta menyukai hidup yang tertib, terencana, dan terjadwal rapi.',
      'Anda bukan orang yang suka banyak bicara atau pamer prestasi; Anda membuktikan nilai diri Anda melalui tindakan nyata, keandalan kerja, dan ketepatan waktu. Jika Anda sudah berjanji menyelesaikan suatu tugas, orang lain tidak perlu cemas lagi karena tugas itu pasti beres dengan standar terbaik.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai sosok yang sangat bertanggung jawab, tenang, jujur, dan tidak goyah oleh drama. Anda adalah orang pertama yang dicari ketika seseorang membutuhkan bantuan nyata yang praktis dan terpercaya.',
    strengths: [
      'Sangat Dapat Diandalkan & Disiplin: Pantang ingkar janji dan selalu menuntaskan kewajiban tepat waktu sesuai standar.',
      'Ketelitian Luar Biasa: Memiliki mata elang untuk menemukan kesalahan dalam data, jadwal, keuangan, atau dokumen penting.',
      'Tenang di Bawah Tekanan: Tidak mudah panik saat terjadi kekacauan, mengutamakan langkah demi langkah berdasarkan fakta logis.',
      'Integritas & Loyalitas Tinggi: Setia kawan, jujur apa adanya, dan memegang teguh komitmen moral dalam jangka panjang.'
    ],
    growthAreas: [
      'Bisa Bersikap Terlalu Kaku: Cenderung menolak perubahan baru atau metode yang belum teruji, meski metode itu berpotensi lebih cepat.',
      'Kurang Peka Menilai Perasaan Emosional: Sering menganggap curhat orang lain sebagai masalah teknis yang harus langsung diberi solusi.',
      'Cenderung Memendam Beban Sendiri: Merasa wajib mengerjakan segala hal sendiri karena khawatir orang lain tidak se-teliti dirinya.'
    ],
    communicationStyle: 'Runtut, faktual, tenang, minim basa-basi, menggunakan data nyata, dan menekankan kejelasan prosedur serta batas waktu (deadline).',
    decisionMaking: 'Berdasarkan pengalaman masa lalu yang sahih, bukti tertulis konkret, dan kepatuhan pada standar operasional yang berlaku.',
    workStyle: 'Metodis, terencana rapi dari awal hingga akhir, sangat menghargai ketertiban, kejelasan job description, dan ketepatan waktu.',
    careerPaths: ['Auditor / Akuntan Publik', 'Manajer Operasional & Kepatuhan', 'Sistem Administrasi / Database', 'Perwira Militer / Polisi', 'Ahli Farmasi / Laboratorium'],
    dailyTips: [
      'Cobalah terbuka mencoba satu cara kerja baru yang disarankan rekan, tidak ada salahnya bereksperimen kecil.',
      'Ketika pasangan atau teman curhat, dengarkan saja dulu dengan hangat tanpa langsung menyodorkan daftar solusi logis.',
      'Belajarlah mendelegasikan tugas-tugas kecil kepada orang lain dan terimalah jika hasilnya berbeda sedikit dari standar Anda.'
    ]
  },

  ISFJ: {
    code: 'ISFJ',
    name: 'Sang Pelindung yang Setia & Berhati Hangat',
    category: 'SENTINELS',
    groupName: 'Para Pengawal (SJ)',
    tagline: 'Kebaikan paling berharga sering kali dilakukan dalam diam tanpa meminta balasan.',
    description: 'ISFJ adalah penjaga kehangatan yang teliti, penuh pengabdian, dan berhati lembut. Anda memiliki daya ingat yang tajam tentang hal-hal kecil mengenai orang-orang terdekat dan selalu sigap memberikan bantuan nyata untuk memastikan kenyamanan dan keselamatan semua orang.',
    overview: [
      'Sebagai ISFJ, Anda menyukai kedamaian suasana rumah, sangat peka pada kebutuhan praktis di sekitar, mengambil keputusan dengan mempertimbangkan perasaan orang yang Anda sayangi, serta menyukai kebiasaan hidup yang teratur dan stabil.',
      'Anda bekerja dengan sangat rajin di balik layar tanpa menuntut pengakuan atau tepuk tangan panggung. Bagi Anda, kebahagiaan sejati adalah melihat orang-orang yang Anda cintai berada dalam keadaan aman, sehat, dan tercukupi.'
    ],
    howOthersSeeYou: 'Teman dan keluarga memandang Anda sebagai sosok yang sangat baik hati, penyabar, tulus, dan tidak pernah lupa hari ulang tahun atau makanan kesukaan orang terdekat. Anda adalah benteng kedamaian di rumah dan tempat kerja.',
    strengths: [
      'Pengabdian & Loyalitas Tanpa Batas: Selalu ada untuk orang-orang terdekat, setia dalam suka maupun duka.',
      'Ketelitian Praktis yang Mengagumkan: Ingatan tajam mengenai detail kebutuhan, tradisi keluarga, dan prosedur harian.',
      'Sikap Rendah Hati & Penuh Kasih: Tidak sombong, selalu mendahulukan kenyamanan orang lain di atas kepentingan pribadi.',
      'Keteraturan & Kerapian Kerja: Sangat teliti dalam menyelesaikan tugas-tugas rutin hingga semuanya rapi dan tertata harmonis.'
    ],
    growthAreas: [
      'Sulit Berkata "Tidak" (People Pleaser): Kerap menyanggupi semua permintaan orang lain hingga kelelahan fisik dan batin sendiri.',
      'Sering Memendam Keluhan Sendiri: Menyimpan rasa kecewa demi menghindari pertengkaran sampai akhirnya menumpuk menjadi beban berat.',
      'Cemas Menghadapi Perubahan Mendadak: Butuh waktu adaptasi lebih lama ketika rutinitas yang sudah nyaman tiba-tiba diubah orang lain.'
    ],
    communicationStyle: 'Sopan, santun, lembut, penuh perhatian, selalu memastikan lawan bicara merasa nyaman dan didengarkan dengan baik.',
    decisionMaking: 'Mempertimbangkan dampak nyata terhadap keharmonisan keluarga atau kelompok serta rasa hormat pada nilai tradisi yang berlaku.',
    workStyle: 'Konsisten, telaten dalam pekerjaan detail, sangat menyukai lingkungan kerja yang harmonis, stabil, dan minim persaingan saling sikut.',
    careerPaths: ['Perawat / Tenaga Kesehatan', 'Guru Pendidikan Dasar', 'Customer Care Specialist', 'Manajer Administrasi Kantor', 'Pekerja Sosial'],
    dailyTips: [
      'Latih diri untuk berani berkata "Maaf, saat ini jadwalku sedang padat" ketika orang lain meminta tolong hal di luar kesanggupan Anda.',
      'Ingatlah bahwa merawat diri sendiri bukanlah sikap egois; Anda tidak bisa menuangkan air dari teko yang sudah kosong.',
      'Sampaikan perasaan kecewa Anda secara jujur dan tenang sebelum rasa itu menumpuk menjadi kepahitan batin.'
    ]
  },

  ESTJ: {
    code: 'ESTJ',
    name: 'Sang Eksekutif Pengatur Handal',
    category: 'SENTINELS',
    groupName: 'Para Pengawal (SJ)',
    tagline: 'Aturan ditegakkan, target diselesaikan, dan keteraturan dijaga bersama.',
    description: 'ESTJ adalah organisator handal yang memegang teguh kejujuran, ketertiban, dan fakta nyata. Anda adalah sosok yang sigap mengambil inisiatif di tengah kekacauan, membagi tugas dengan jelas kepada semua orang, dan memastikan proyek selesai tepat waktu sesuai standar kualitas terbaik.',
    overview: [
      'Sebagai seorang ESTJ (Extrovert, Sensing, Thinking, Judging), Anda mendapatkan semangat dari bekerja bersama banyak orang di lapangan, fokus pada fakta dan bukti yang bisa diukur, mengambil keputusan dengan logika aturan baku, serta sangat menyukai keteraturan, jadwal pasti, dan kejelasan alur kerja.',
      'Dalam kehidupan sehari-hari, Anda adalah orang yang tidak bisa diam jika melihat ada hal yang berantakan atau tidak efisien. Anda adalah sosok yang paling cepat mengorganisir kepanitiaan, mengatur anggaran belanja secara disiplin, dan memastikan semua anggota keluarga atau tim mematuhi komitmen yang telah disepakati bersama.'
    ],
    howOthersSeeYou: 'Orang di sekitar Anda memandang Anda sebagai figur pemimpin yang tegas, adil, pekerja keras, dan tidak berbelit-belit. Mereka tahu bahwa di bawah arahan Anda, tidak akan ada pekerjaan yang terbengkalai atau janji yang diabaikan.',
    strengths: [
      'Kepemimpinan Operasional yang Sangat Efektif: Lihai membagi tugas, menetapkan target terukur, dan mengawasi eksekusi sampai tuntas.',
      'Tegas, Jujur, & Berterus Terang: Tidak bermain intrik di belakang layar; apa yang Anda katakan adalah apa yang sebenarnya Anda maksudkan.',
      'Disiplin & Etos Kerja Kuat: Menghargai waktu, menepati janji, dan selalu menunjukkan dedikasi total pada tanggung jawabnya.',
      'Piawai Mengelola Sumber Daya Nyata: Mahir mengatur anggaran dana, waktu pengerjaan, dan logistik agar tidak ada pemborosan.'
    ],
    growthAreas: [
      'Bisa Terkesan Terlalu Otoriter: Terkadang tanpa sengaja memaksakan standar pribadi kepada orang lain yang memiliki ritme kerja lebih lambat.',
      'Kurang Sabar pada Ketidakefisienan: Cepat merasa jengkel saat orang lain ragu-ragu atau berdebat tanpa ada aksi nyata.',
      'Perlu Melatih Kelembutan Emosional: Terkadang terlalu lugas mengkritik hingga melukai perasaan orang yang memiliki kepribadian sensitif.'
    ],
    communicationStyle: 'Tegas, percaya diri, sistematis, jelas tanpa multitafsir, dan mengutamakan fakta konkret serta langkah aksi selanjutnya.',
    decisionMaking: 'Cepat dan tegas berdasarkan logika hukum/aturan yang berlaku, rekam jejak fakta masa lalu, serta efisiensi waktu dan anggaran.',
    workStyle: 'Menyukai rantai komando yang jelas, indikator kinerja terukur (KPI), dan lingkungan kerja profesional yang tertib dan bersih.',
    careerPaths: ['Manajer Operasional Proyek', 'Kepala Sekolah / Pejabat Publik', 'Financial Controller', 'Manajer Logistik & Rantai Pasok', 'Supervisor Manufaktur'],
    dailyTips: [
      'Sisihkan waktu 5 menit untuk mendengarkan sudut pandang orang lain sebelum langsung memutuskan jalan keluar.',
      'Sadari bahwa ada orang yang bekerja lebih lambat bukan karena malas, melainkan karena memiliki cara berpikir yang berbeda.',
      'Sisihkan waktu luang akhir pekan untuk bersantai bersama orang tercinta tanpa membuat jadwal target yang kaku.'
    ]
  },

  ESFJ: {
    code: 'ESFJ',
    name: 'Sang Konsul Penebar Kepedulian & Kehangatan',
    category: 'SENTINELS',
    groupName: 'Para Pengawal (SJ)',
    tagline: 'Keluarga, kebersamaan, dan saling tolong-menolong adalah sumber kebahagiaan sejati.',
    description: 'ESFJ adalah perekat sosial yang hangat, ramah, dan selalu siap memastikan setiap orang dalam lingkaran mereka merasa diterima, aman, dan dirawat dengan baik. Anda memiliki antena sosial yang peka untuk membaca suasana ruangan dan menciptakan suasana akrab di mana pun Anda berada.',
    overview: [
      'Sebagai ESFJ, Anda sangat bersemangat saat berkumpul bersama teman dan keluarga, memperhatikan detail kebutuhan fisik orang lain, mengambil keputusan demi menjaga kerukunan bersama, serta menyukai acara-acara yang terencana rapi.',
      'Anda adalah sosok tuan rumah yang sempurna. Saat ada kumpul-kumpul, Anda adalah orang pertama yang memastikan semua orang sudah dapat makanan, tidak ada yang duduk sendirian di pojok, dan semua percakapan berlangsung hangat dan ceria.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai pribadi yang sangat ramah, murah senyum, penuh perhatian, dan loyal. Anda adalah sahabat yang paling cepat menjenguk saat ada teman yang sakit dan paling rajin menjaga silaturahmi.',
    strengths: [
      'Kecerdasan Sosial & Keramahan Alami: Sangat piawai mencairkan suasana dan membina jaringan relasi yang erat dan hangat.',
      'Sangat Setia & Berdedikasi: Menjaga komitmen keluarga dan tim dengan sepenuh hati tanpa pernah hitung-hitungan tenaga.',
      'Keterampilan Logistik Praktis: Sangat terampil mengatur acara, konsumsi, dan kebutuhan harian secara rapi dan tepat waktu.',
      'Peka pada Perasaan Orang Lain: Cepat menyadari jika ada seseorang yang sedang sedih atau tidak nyaman di dalam ruangan.'
    ],
    growthAreas: [
      'Sangat Sensitif terhadap Kritik: Mudah merasa sakit hati atau ditolak jika usul atau perbuatannya dikritik orang lain.',
      'Terlalu Mencemaskan Pendapat Orang Lain: Sering merasa cemas apakah penampilan atau perilakunya sudah sesuai ekspektasi sosial.',
      'Bisa Terlalu Mencampuri Urusan Orang: Niat baik ingin membantu terkadang dianggap berlebihan oleh orang yang menyukai privasi.'
    ],
    communicationStyle: 'Hangat, antusias, vokal, gemar menceritakan kisah keseharian yang menyenangkan, dan aktif menanyakan kabar kesehatan orang lain.',
    decisionMaking: 'Mempertimbangkan nilai moral kebersamaan, kepatutan sosial, dan apa yang paling membawa kerukunan bagi semua pihak.',
    workStyle: 'Sangat menyukai kerja kelompok, lingkungan kerja yang harmonis dan bersahabat, serta peran-peran yang melayani kebutuhan nyata pelanggan.',
    careerPaths: ['Public Relations / Humas', 'Event Planner / Penyelenggara Acara', 'Konselor Sekolah / Guru', 'Hospitality & Guest Relations', 'HR Generalist'],
    dailyTips: [
      'Ingatlah bahwa Anda tidak bisa menyenangkan semua orang setiap saat, dan itu adalah hal yang sangat wajar.',
      'Jangan terlalu cepat mengambil kesimpulan buruk saat seseorang merespons pesan Anda dengan singkat; mungkin mereka hanya sedang sibuk.',
      'Berikan waktu bagi orang-orang terdekat untuk menyelesaikan urusan mereka sendiri tanpa Anda harus selalu turun tangan.'
    ]
  },

  // ==========================================
  // PARA PENJELAJAH (SP) - Kuning/Oranye
  // ==========================================
  ISTP: {
    code: 'ISTP',
    name: 'Sang Mekanik Handal & Problem Solver Tenang',
    category: 'EXPLORERS',
    groupName: 'Para Penjelajah (SP)',
    tagline: 'Bongkar, pelajari cara kerjanya, dan temukan solusi paling praktis di lapangan.',
    description: 'ISTP adalah pemecah masalah yang tenang, observatif, dan memiliki ketangkasan teknis tinggi. Anda lebih suka langsung bertindak daripada berteori berjam-jam; Anda menyukai tantangan praktis di mana Anda bisa menggunakan logika dingin dan ketangkasan tangan untuk mengatasi krisis seketika.',
    overview: [
      'Sebagai ISTP, Anda menghemat energi dalam ketenangan mandiri, fokus pada benda nyata dan fakta fisik di lapangan, mengambil keputusan secara logis objektif, serta menyukai kebebasan spontan untuk bertindak cepat.',
      'Anda adalah sosok yang paling tenang di saat semua orang panik. Entah itu mesin mobil mogok, sistem server mati mendadak, atau situasi darurat di perjalanan, Anda akan segera turun tangan, menganalisis kerusakan dengan cepat, dan memperbaikinya tanpa banyak drama.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai sosok yang santai, mandiri, tidak banyak bicara tapi sangat terampil saat beraksi. Anda dipandang sebagai "penyelamat" praktis yang selalu punya akal cerdik saat peralatan atau sistem mengalami macet.',
    strengths: [
      'Ketenangan Luar Biasa di Saat Krisis: Tidak mudah panik; pikiran logis Anda justru semakin tajam ketika terjadi keadaan darurat.',
      'Ketangkasan Teknis & Mekanis: Memiliki pemahaman alami tentang cara kerja alat, mesin, perkakas, software, atau sistem fisik.',
      'Sangat Efisien & Fleksibel: Menggunakan energi secara hemat dan efektif, tidak suka membuang-buang waktu pada rapat yang tak penting.',
      'Mandiri & Tidak Membebani Orang Lain: Mandiri dalam hidup dan mampu mengurus segala keperluannya sendiri dengan baik.'
    ],
    growthAreas: [
      'Sangat Tertutup Secara Emosional: Pasangan atau keluarga sering merasa sulit mengetahui apa yang sebenarnya Anda rasakan di hati.',
      'Cepat Bosan pada Aturan Monoton: Tidak tahan terikat pada birokrasi berbelit-belit atau perencanaan jangka panjang yang kaku.',
      'Kadang Mengambil Risiko Berlebihan: Gemar mencari sensasi adrenalin (olahraga ekstrem, kebut-kebutan) tanpa memikirkan bahaya jangka panjang.'
    ],
    communicationStyle: 'Hemat kata, lugas, santai, langsung pada fakta lapangan yang terjadi, dan hanya berbicara jika memang ada hal penting.',
    decisionMaking: 'Objektif, praktis, menguji fakta nyata secara langsung: "Apakah solusi ini berhasil saat dicoba sekarang juga?"',
    workStyle: 'Mandiri, tidak suka diawasi terus-menerus, lebih menyukai pekerjaan berbasis hasil nyata daripada duduk manis seharian di meja kantor.',
    careerPaths: ['Insinyur Mesin / Otomasi', 'Teknisi IT / Cybersecurity Forensik', 'Pilot / Pengemudi Profesional', 'Ahli Bedah / Paramedis', 'Arsitek Konstruksi Lapangan'],
    dailyTips: [
      'Luangkan waktu untuk memberi kabar atau mengekspresikan sedikit perhatian hangat kepada orang terdekat Anda.',
      'Pikirkan konsekuensi jangka panjang setidaknya 10 menit sebelum mengambil keputusan yang berisiko tinggi.',
      'Selesaikan kewajiban administratif yang membosankan di awal hari agar sisa hari Anda bebas berkreasi dengan tenang.'
    ]
  },

  ISFP: {
    code: 'ISFP',
    name: 'Sang Seniman Berjiwa Lembut & Estetis',
    category: 'EXPLORERS',
    groupName: 'Para Penjelajah (SP)',
    tagline: 'Mengekspresikan keindahan hidup melalui karya, keheningan, dan kehangatan hati.',
    description: 'ISFP adalah jiwa estetis yang menikmati keindahan dunia dengan ketulusan yang tenang dan apa adanya. Anda tidak suka menjadi pusat perhatian yang berisik; Anda lebih suka menyampaikan kepedulian dan pandangan hidup Anda melalui perbuatan nyata, keindahan karya, atau kehadiran yang menenangkan.',
    overview: [
      'Sebagai ISFP, Anda mengisi energi dalam kesendirian yang damai, sangat peka terhadap warna, suara, rasa, dan keindahan alam, dipandu oleh kepekaan hati yang lembut, serta menjalani hidup secara spontan mengalir bersama momen saat ini.',
      'Dalam pergaulan, Anda adalah pribadi yang sangat ramah dan tidak pernah menghakimi gaya hidup orang lain. Anda menghargai kebebasan setiap orang untuk menjadi diri mereka sendiri dan selalu menjauhi perselisihan atau persaingan yang tidak sehat.'
    ],
    howOthersSeeYou: 'Teman-teman melihat Anda sebagai sosok yang berhati lembut, santai, memiliki selera estetika yang keren, dan sangat tulus. Bersama Anda, orang lain merasa tenang dan bebas dari tekanan sosial.',
    strengths: [
      'Kepekaan Estetika & Rasa yang Mendalam: Sangat peka terhadap keindahan visual, harmoni musik, desain, dan kenyamanan suasana.',
      'Hati yang Hangat & Tidak Menghakimi: Menerima kekurangan orang lain tanpa prasangka dan memperlakukan setiap makhluk dengan kasih sayang.',
      'Hidup di Momen Saat Ini: Menikmati keindahan kecil hari ini tanpa cemas berlebihan mengenai masa depan yang belum terjadi.',
      'Kesetiaan pada Orang Terdekat: Sangat setia dan tulus membela sahabat atau keluarga yang sudah masuk ke dalam lingkaran hatinya.'
    ],
    growthAreas: [
      'Terlalu Menghindari Konflik: Sering memilih diam dan mengalah bahkan saat hak pribadinya diinjak orang lain demi menghindari ribut.',
      'Sulit Membuat Rencana Jangka Panjang: Cenderung kurang disiplin dalam mengatur anggaran keuangan dan target karier masa depan.',
      'Mudah Merasa Rendah Diri: Sering meremehkan bakat besar yang dimilikinya dan merasa cemas jika karyanya dibandingkan dengan orang lain.'
    ],
    communicationStyle: 'Lembut, santai, rendah hati, lebih suka mengungkapkan perasaan lewat gestur manis, traktiran, atau hadiah daripada kata-kata gombal.',
    decisionMaking: 'Berdasarkan keselarasan rasa batin: "Apakah tindakan ini terasa jujur, damai, dan tidak menyakiti hati siapa pun?"',
    workStyle: 'Membutuhkan kebebasan berekspresi, ruang kerja yang nyaman secara visual, dan lingkungan yang bebas dari politik kantor toksik.',
    careerPaths: ['Desainer Interior / Fashion', 'Fotografer / Videografer Kreatif', 'Dokter Hewan / Pecinta Satwa', 'Chef Kuliner / Barista', 'Terapis Musik / Fisioterapis'],
    dailyTips: [
      'Belajarlah menyatakan ketidaksetujuan Anda secara tegas ketika ada orang yang melanggar batas kenyamanan Anda.',
      'Buatlah target tabungan bulanan yang otomatis agar masa depan finansial Anda tetap aman dan terjamin.',
      'Jangan ragu memamerkan hasil karya atau ide kreatif Anda; dunia butuh sentuhan keindahan yang Anda miliki.'
    ]
  },

  ESTP: {
    code: 'ESTP',
    name: 'Sang Penjelajah Pemberani & Negosiator Ulung',
    category: 'EXPLORERS',
    groupName: 'Para Penjelajah (SP)',
    tagline: 'Jangan buang waktu untuk ragu-ragu; hadapi langsung dan menangkan tantangannya.',
    description: 'ESTP adalah sosok energik yang hidup di garis terdepan aksi nyata. Anda memiliki insting tajam untuk menangkap peluang detik demi detik, senang memecahkan masalah mendesak di tempat kejadian, dan memiliki karisma ceria yang memikat orang di sekitar Anda.',
    overview: [
      'Sebagai ESTP, Anda mendapatkan lonjakan energi dari keramaian dan aksi fisik, menyerap fakta nyata melalui panca indra, mengambil keputusan berdasarkan logika praktis yang menguntungkan, serta menyukai kebebasan spontan tanpa kekangan aturan kaku.',
      'Bagi Anda, hidup adalah panggung aksi yang seru. Anda adalah orang pertama yang siap mencoba wahana menantang, sigap bernegosiasi harga saat berbisnis, dan sangat piawai mencairkan suasana beku dengan humor segar dan cerita petualangan yang memikat.'
    ],
    howOthersSeeYou: 'Orang lain melihat Anda sebagai sosok yang sangat percaya diri, pemberani, humoris, dan tidak kenal takut. Anda adalah kawan petualangan yang paling seru dan tidak pernah kehabisan ide untuk membuat suasana menjadi hidup.',
    strengths: [
      'Keberanian Tinggi & Tanggap Lapangan: Tidak gentar menghadapi risiko fisik maupun sosial; sangat cepat membaca perubahan situasi.',
      'Negosiasi & Karisma Persuasif: Sangat mahir meyakinkan orang lain dan menutup kesepakatan bisnis secara menguntungkan.',
      'Pendekatan Sangat Praktis: Langsung mencari jalan keluar paling cepat dan efektif yang bisa langsung dieksekusi detik itu juga.',
      'Pengamatan Sensorik yang Tajam: Cepat menyadari perubahan bahasa tubuh, ekspresi wajah, atau detail lingkungan di sekitarnya.'
    ],
    growthAreas: [
      'Sering Bersikap Impulsif: Bertindak terlebih dahulu baru berpikir kemudian, yang terkadang menimbulkan penyesalan di kemudian hari.',
      'Kurang Sabar pada Diskusi Teori Abstrak: Cepat merasa bosan jika harus duduk mendengarkan penjelasan konseptual tanpa aksi nyata.',
      'Bisa Terkesan Ceplas-Ceplos: Kata-katanya yang terlalu blak-blakan terkadang tanpa sengaja melukai perasaan orang yang sensitif.'
    ],
    communicationStyle: 'Cepat, santai, jenaka, penuh cerita pengalaman nyata yang seru, persuasif, dan langsung pada pokok pembicaraan.',
    decisionMaking: 'Seketika berdasarkan apa yang ada di depan mata dan opsi apa yang paling membawa keuntungan praktis tercepat.',
    workStyle: 'Bekerja dengan energi meluap di lingkungan dinamis, menyukai suasana kompetitif, dan tidak tahan duduk diam di meja kantor seharian.',
    careerPaths: ['Wirausahawan / Trader Bisnis', 'Sales Executive / Broker', 'Paramedis Gawat Darurat / Damkar', 'Atlet / Pelatih Olahraga', 'Manajer Operasi Lapangan'],
    dailyTips: [
      'Tarik napas dan hitung sampai 10 sebelum mengambil keputusan besar saat sedang terbakar emosi atau euforia sesaat.',
      'Pikirkan bagaimana perasaan lawan bicara sebelum melontarkan lelucon atau kritik yang bernada tajam.',
      'Sisihkan sebagian keuntungan atau pemasukan ke dalam instrumen investasi aman yang tidak mudah Anda tarik secara impulsif.'
    ]
  },

  ESFP: {
    code: 'ESFP',
    name: 'Sang Penghibur Ceria & Penabur Kegembiraan',
    category: 'EXPLORERS',
    groupName: 'Para Penjelajah (SP)',
    tagline: 'Jadikan setiap momen berharga, rayakan hidup bersama orang-orang tercinta.',
    description: 'ESFP adalah jiwa pesta yang menghidupkan setiap ruangan yang dimasukinya. Anda penuh kehangatan, spontanitas, dan selalu siap mengajak orang lain tersenyum serta menikmati kebersamaan. Anda menyerap dunia dengan seluruh panca indra dan memancarkannya kembali dalam bentuk kegembiraan.',
    overview: [
      'Sebagai ESFP, Anda merasa sangat hidup saat berada di tengah keramaian, menikmati sensasi fisik nyata hari ini, mengambil keputusan demi menyebarkan kebahagiaan sesama, serta menyukai kebebasan tanpa jadwal yang mengekang.',
      'Kehadiran Anda seperti sinar matahari di hari yang mendung. Anda selalu punya cara untuk menghibur kawan yang sedang patah hati, mengajak semua orang ikut bernyanyi, dan menciptakan kenangan-kenangan manis yang tak terlupakan dalam setiap pertemuan.'
    ],
    howOthersSeeYou: 'Teman-teman memandang Anda sebagai sosok yang sangat menyenangkan, murah senyum, modis, penuh kasih sayang, dan berhati emas. Bersama Anda, suasana yang membosankan bisa seketika berubah menjadi perayaan yang meriah.',
    strengths: [
      'Magnet Kegembiraan & Antusiasme: Mampu mencairkan suasana tertegun menjadi tawa riang hanya dengan senyuman dan candaan hangat.',
      'Sangat Ramah & Mudah Bergaul: Mampu berteman akrab dengan siapa saja tanpa membeda-bedakan status sosial.',
      'Peka & Sigap Menghibur: Cepat menyadari jika ada teman yang sedang murung dan langsung sigap memberikan perhatian nyata.',
      'Menikmati Hidup Penuh Syukur: Menjalani hari ini dengan penuh rasa syukur tanpa dibebani penyesalan masa lalu.'
    ],
    growthAreas: [
      'Mudah Tergoda Kesenangan Sesaat: Kerap menunda tanggung jawab penting atau mengabaikan batas anggaran demi bersenang-senang hari ini.',
      'Sangat Menghindari Percakapan Serius / Konflik: Cenderung kabur atau pura-pura tidak tahu saat ada masalah penting yang harus dibicarakan.',
      'Bisa Cepat Bosan pada Hal Rutin: Mengalami kesulitan besar jika harus menyelesaikan pekerjaan administratif yang monoton dan sunyi.'
    ],
    communicationStyle: 'Hangat, ekspresif, vokal, kaya bahasa tubuh, penuh senyum, dan selalu mengajak semua orang ikut tertawa bersama.',
    decisionMaking: 'Spontan berdasarkan kata hati dan apa yang paling membawa kebahagiaan nyata bagi orang-orang saat itu juga.',
    workStyle: 'Berkembang pesat di lingkungan yang ramai, interaktif, penuh warna, dan mengizinkan ekspresi diri yang bebas.',
    careerPaths: ['Aktor / Entertainer / MC', 'Pemandu Wisata / Hospitality', 'Instruktur Kebugaran / Tari', 'Spesialis Hubungan Pelanggan (PR)', 'Desainer Event Kreatif'],
    dailyTips: [
      'Alokasikan uang tabungan wajib di awal bulan sebelum menggunakannya untuk acara nongkrong atau belanja.',
      'Hadapi percakapan sulit dengan berani; menyelesaikan masalah kecil lebih baik daripada membiarkannya membesar di kemudian hari.',
      'Sediakan waktu hening sejenak di pagi hari untuk merencanakan hal penting apa yang harus diselesaikan hari ini.'
    ]
  }
};

/**
 * Helper to fetch a personality type with safe fallback
 */
export function getPersonalityType(code) {
  const cleanCode = (code || '').toUpperCase().trim();
  if (PERSONALITY_TYPES[cleanCode]) {
    return PERSONALITY_TYPES[cleanCode];
  }
  // Safe neutral fallback
  return {
    code: cleanCode || '----',
    name: `Tipe ${cleanCode || 'MBTI'}`,
    category: 'ANALYSTS',
    groupName: 'Eksplorasi Karakter',
    tagline: 'Setiap individu memiliki kombinasi preferensi unik yang berharga.',
    description: 'Hasil tes ini merefleksikan kecenderungan respon Anda terhadap pertanyaan yang diajukan. Tipe ini menunjukkan preferensi alami Anda dalam memperoleh energi, menyerap informasi, mengambil keputusan, dan berinteraksi dengan lingkungan sekitar.',
    overview: [
      'Hasil tes MBTI Anda memetakan preferensi bawaan Anda dalam 4 dimensi utama: cara Anda mengisi energi (E/I), cara Anda menyerap informasi (S/N), dasar pengambilan keputusan Anda (T/F), dan pola gaya hidup Anda (J/P).',
      'Ingatlah bahwa kepribadian bukanlah kotak yang membatasi kemampuan Anda, melainkan kompas untuk memahami kekuatan alami dan area yang masih bisa Anda kembangkan.'
    ],
    howOthersSeeYou: 'Orang di sekitar Anda menghargai keunikan cara pandang dan kontribusi nyata yang Anda bawa dalam pergaulan sehari-hari.',
    strengths: [
      'Memiliki perspektif tersendiri dalam memandang persoalan hidup',
      'Mampu beradaptasi sesuai dengan kebutuhan situasi dan pengalaman',
      'Memiliki potensi besar untuk terus berkembang di berbagai bidang'
    ],
    growthAreas: [
      'Menyadari titik buta dalam komunikasi dengan tipe preferensi yang berlawanan',
      'Menjaga keseimbangan antara refleksi batin dan tindakan nyata di dunia luar'
    ],
    communicationStyle: 'Menyesuaikan dengan lawan bicara dan konteks pembicaraan.',
    decisionMaking: 'Memadukan pertimbangan logis dan nilai personal.',
    workStyle: 'Fleksibel sesuai tuntutan target dan dinamika tim.',
    careerPaths: ['Bidang profesional yang selaras dengan minat utama Anda'],
    dailyTips: [
      'Jadikan hasil ini sebagai sarana mengenal diri lebih dekat, bukan untuk memberi label kaku pada diri sendiri.',
      'Hargai perbedaan gaya komunikasi orang lain yang mungkin berseberangan dengan preferensi Anda.'
    ]
  };
}
