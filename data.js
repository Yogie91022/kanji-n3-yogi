// Data Kanji N3 (n, kanji, onyomi, kunyomi, arti, contoh, arti contoh)
const DATA=[
[
1,
"政",
"セイ・ショウ",
"まつりごと",
"pemerintahan, politik",
"政治(せいじ)",
"politik"
],
[
2,
"議",
"ギ",
"—",
"diskusi, debat, musyawarah",
"会議(かいぎ)",
"rapat"
],
[
3,
"民",
"ミン",
"たみ",
"rakyat, bangsa",
"国民(こくみん)",
"warga negara"
],
[
4,
"連",
"レン",
"つらなる・つれる",
"menghubungkan, bergabung",
"連絡(れんらく)",
"kontak, hubungan"
],
[
5,
"対",
"タイ・ツイ",
"—",
"berlawanan, anti",
"対応(たいおう)",
"tanggapan, penanganan"
],
[
6,
"部",
"ブ",
"—",
"bagian, seksi",
"部屋(へや)",
"kamar"
],
[
7,
"合",
"ゴウ・カッ・ガッ",
"あわせる・あわす・あう",
"cocok, menggabungkan",
"合併(がっぺい)",
"penggabungan"
],
[
8,
"市",
"シ",
"いち",
"kota, pasar",
"都市(とし)",
"kota besar"
],
[
9,
"内",
"ナイ・ダイ",
"うち",
"di dalam, internal",
"内側(うちがわ)",
"sisi dalam"
],
[
10,
"相",
"ソウ・ショウ",
"あい",
"saling, bersama",
"相手(あいて)",
"lawan bicara, pasangan"
],
[
11,
"定",
"テイ・ジョウ",
"さだめる・さだまる・さだか",
"menentukan, memutuskan",
"決定(けってい)",
"keputusan"
],
[
12,
"回",
"カイ・エ",
"まわる・まわす",
"memutar, berputar",
"回数(かいすう)",
"frekuensi, jumlah kali"
],
[
13,
"選",
"セン",
"えらぶ",
"memilih, menyeleksi",
"選ぶ(えらぶ)",
"memilih"
],
[
14,
"米",
"ベイ・マイ",
"こめ",
"beras, Amerika (AS)",
"米国(べいこく)",
"Amerika Serikat"
],
[
15,
"実",
"ジツ",
"み・みのる",
"realita, kebenaran",
"実際(じっさい)",
"sebenarnya"
],
[
16,
"関",
"カン",
"せき・かかわる",
"berhubungan, terlibat",
"関係(かんけい)",
"hubungan"
],
[
17,
"決",
"ケツ",
"きめる・きまる",
"memutuskan",
"決める(きめる)",
"memutuskan"
],
[
18,
"全",
"ゼン",
"まったく・すべて",
"semua, seluruhnya",
"全部(ぜんぶ)",
"semuanya"
],
[
19,
"表",
"ヒョウ",
"おもて・あらわれる・あらわす",
"permukaan, tabel",
"表現(ひょうげん)",
"ekspresi, pernyataan"
],
[
20,
"戦",
"セン",
"いくさ・たたかう",
"perang, bertarung",
"戦争(せんそう)",
"perang"
],
[
21,
"経",
"ケイ・キョウ",
"へる・たつ",
"melewati, berlalu",
"経済(けいざい)",
"ekonomi"
],
[
22,
"最",
"サイ",
"もっとも",
"paling, ter-",
"最高(さいこう)",
"tertinggi, terbaik"
],
[
23,
"現",
"ゲン",
"あらわれる・あらわす・うつつ",
"muncul, nyata, sekarang",
"現在(げんざい)",
"sekarang"
],
[
24,
"調",
"チョウ",
"ととのえる・ととのう・しらべる",
"menyelidiki, menyesuaikan",
"調査(ちょうさ)",
"penyelidikan"
],
[
25,
"化",
"カ・ケ",
"ばける・ばかす・ふける",
"berubah, mengubah",
"変化(へんか)",
"perubahan"
],
[
26,
"当",
"トウ",
"あてる・あたる",
"mengenai, memukul",
"当然(とうぜん)",
"tentu saja, wajar"
],
[
27,
"約",
"ヤク",
"つづまる",
"janji, kira-kira",
"約束(やくそく)",
"janji"
],
[
28,
"首",
"シュ",
"くび",
"leher",
"首長(しゅちょう)",
"kepala, pemimpin"
],
[
29,
"法",
"ホウ・ホッ・ハッ",
"のり",
"metode, hukum, aturan",
"方法(ほうほう)",
"cara, metode"
],
[
30,
"性",
"セイ・ショウ",
"—",
"jenis kelamin, sifat",
"性格(せいかく)",
"kepribadian"
],
[
31,
"的",
"テキ",
"まと",
"target, sasaran",
"目的(もくてき)",
"tujuan"
],
[
32,
"要",
"ヨウ",
"いる・かなめ",
"poin utama, perlu",
"重要(じゅうよう)",
"penting"
],
[
33,
"制",
"セイ",
"—",
"sistem, kontrol, aturan",
"制限(せいげん)",
"batasan"
],
[
34,
"治",
"ジ・チ",
"おさまる・おさめる・なおす・なおる",
"memerintah, menyembuhkan",
"政治(せいじ)",
"politik"
],
[
35,
"務",
"ム",
"つとめる・つとまる",
"tugas, kewajiban",
"業務(ぎょうむ)",
"tugas pekerjaan"
],
[
36,
"成",
"セイ・ジョウ",
"なる",
"menjadi, berhasil",
"成功(せいこう)",
"sukses"
],
[
37,
"期",
"キ・ゴ",
"—",
"periode, waktu, musim",
"期間(きかん)",
"jangka waktu"
],
[
38,
"取",
"シュ",
"とる",
"mengambil, memungut",
"取る(とる)",
"mengambil"
],
[
39,
"都",
"ト・ツ",
"みやこ",
"metropolis, ibu kota",
"都市(とし)",
"kota"
],
[
40,
"和",
"ワ・オ",
"やわらげる・やわらぐ・なごやか・なごむ",
"keharmonisan, damai",
"平和(へいわ)",
"perdamaian"
],
[
51,
"権",
"ゴン・ケン",
"—",
"hak, kekuasaan, wewenang",
"権利(けんり)",
"hak"
],
[
52,
"支",
"シ",
"ささえる",
"cabang, menyokong",
"支持(しじ)",
"dukungan"
],
[
53,
"産",
"サン",
"うむ・うまれる・うぶ",
"melahirkan, memproduksi",
"生産(せいさん)",
"produksi"
],
[
54,
"点",
"テン",
"つける・たてる",
"titik, poin, tanda",
"点数(てんすう)",
"nilai"
],
[
55,
"報",
"ホウ",
"むくいる",
"laporan, membalas",
"報告(ほうこく)",
"laporan"
],
[
56,
"済",
"サイ",
"すむ・すます",
"menyelesaikan, beres",
"解決(かいけつ)",
"pemecahan masalah"
],
[
57,
"活",
"カツ",
"—",
"aktif, hidup, semangat",
"生活(せいかつ)",
"kehidupan"
],
[
58,
"原",
"ゲン",
"はら",
"ladang, asli, sumber",
"原因(げんいん)",
"penyebab"
],
[
59,
"共",
"キョウ",
"とも",
"bersama-sama",
"共通(きょうつう)",
"umum, bersama"
],
[
60,
"得",
"トク",
"える・うる",
"mendapatkan, untung",
"得る(える)",
"memperoleh"
],
[
61,
"解",
"カイ・ゲ",
"とける・とく・とかす",
"memecahkan, menjelaskan",
"解決(かいけつ)",
"pemecahan"
],
[
62,
"交",
"コウ",
"まじわる・まぜる・まじる・まじえる・まざる・かわす・かう",
"saling bertukar, bersilang",
"交通(こうつう)",
"lalu lintas"
],
[
63,
"資",
"シ",
"—",
"aset, sumber daya, modal",
"資本(しほん)",
"modal"
],
[
64,
"予",
"ヨ・シャ",
"あらかじめ",
"sebelumnya, terlebih dahulu",
"予定(よてい)",
"rencana"
],
[
65,
"向",
"コウ",
"むく・むかい・むこう・むける・むかう",
"menghadap, menuju",
"方向(ほうこう)",
"arah"
],
[
66,
"際",
"サイ",
"きわ",
"kesempatan, saat, sisi",
"際(さい)",
"saat, kesempatan"
],
[
67,
"勝",
"ショウ",
"かつ・まさる",
"kemenangan, menang",
"勝つ(かつ)",
"menang"
],
[
68,
"面",
"メン",
"おも・おもて・つら",
"wajah, permukaan, aspek",
"面接(めんせつ)",
"wawancara"
],
[
69,
"告",
"コク",
"つげる",
"memberitahu, mengumumkan",
"告知(こくち)",
"pemberitahuan"
],
[
70,
"反",
"ホン・ハン・タン",
"そる・そらす",
"melawan, anti",
"反対(はんたい)",
"berlawanan"
],
[
71,
"判",
"ハン・バン",
"—",
"menilai, stempel",
"判断(はんだん)",
"penilaian, keputusan"
],
[
72,
"認",
"ニン",
"みとめる・したためる",
"mengakui, mengenali",
"認識(にんしき)",
"pengakuan, kesadaran"
],
[
73,
"参",
"サン",
"まいる",
"mengunjungi, berpartisipasi",
"参加(さんか)",
"partisipasi"
],
[
74,
"利",
"リ",
"きく",
"keuntungan, manfaat",
"利用(りよう)",
"pemanfaatan"
],
[
75,
"組",
"ソ",
"くむ・くみ",
"merakit, kelompok",
"組む(くむ)",
"merakit, bergabung"
],
[
76,
"信",
"シン",
"—",
"percaya, iman",
"信じる(しんじる)",
"percaya"
],
[
77,
"在",
"ザイ",
"ある",
"ada, berada",
"存在(そんざい)",
"keberadaan"
],
[
78,
"件",
"ケン",
"くだん",
"perkara, kasus, kejadian",
"事件(じけん)",
"insiden, kasus"
],
[
79,
"側",
"ソク",
"がわ・そば",
"sisi, samping",
"側面(そくめん)",
"sisi, aspek"
],
[
80,
"任",
"ニン",
"まかせる・まかす",
"mempercayakan, tugas",
"任せる(まかせる)",
"mempercayakan"
],
[
81,
"引",
"イン",
"ひく・ひける",
"menarik, menarik kembali",
"引く(ひく)",
"menarik"
],
[
82,
"求",
"キュウ",
"もとめる",
"meminta, mencari",
"要求(ようきゅう)",
"tuntutan, permintaan"
],
[
83,
"所",
"ショ",
"ところ",
"tempat",
"場所(ばしょ)",
"tempat"
],
[
84,
"次",
"ジ・シ",
"つぐ・つぎ",
"berikutnya, urutan",
"次に(つぎに)",
"selanjutnya"
],
[
85,
"昨",
"サク",
"—",
"kemarin, sebelumnya",
"昨日(きのう)",
"kemarin"
],
[
86,
"論",
"ロン",
"あげつらう",
"argumen, teori",
"議論(ぎろん)",
"perdebatan"
],
[
87,
"官",
"カン",
"—",
"birokrat, pemerintah",
"官公庁(かんこうちょう)",
"kantor pemerintahan"
],
[
88,
"増",
"ゾウ",
"ます・ふえる・ふやす",
"bertambah, meningkatkan",
"増える(ふえる)",
"bertambah"
],
[
89,
"係",
"ケイ",
"かかる・かかり",
"penanggung jawab, berhubungan",
"係員(かかりいん)",
"petugas"
],
[
90,
"感",
"カン",
"—",
"perasaan, sensasi",
"感じ(かんじ)",
"perasaan"
],
[
91,
"情",
"ジョウ・セイ",
"なさけ",
"emosi, perasaan, simpati",
"感情(かんじょう)",
"emosi"
],
[
92,
"投",
"トウ",
"なげる",
"melempar, membuang",
"投げる(なげる)",
"melempar"
],
[
93,
"示",
"ジ・シ",
"しめす",
"menunjukkan, memperlihatkan",
"示す(しめす)",
"menunjukkan"
],
[
94,
"変",
"ヘン",
"かわる・かえる",
"berubah, mengubah",
"変わる(かわる)",
"berubah"
],
[
95,
"打",
"ダ",
"うつ・ぶつ",
"memukul, menekan",
"打つ(うつ)",
"memukul"
],
[
96,
"直",
"チョク・ジキ",
"ただちに・すぐ・なおる・なおす",
"langsung, segera, jujur",
"直接(ちょくせつ)",
"langsung"
],
[
97,
"両",
"リョウ",
"—",
"kedua, kedua-duanya",
"両方(りょうほう)",
"keduanya"
],
[
98,
"式",
"シキ",
"—",
"gaya, metode, upacara",
"方式(ほうしき)",
"metode, sistem"
],
[
99,
"確",
"カク",
"たしか・たしかめる",
"pasti, meyakinkan",
"確か(たしか)",
"pasti, meyakinkan"
],
[
100,
"果",
"カ",
"はたす・はてる・はて",
"buah, hasil",
"結果(けっか)",
"hasil"
],
[
101,
"容",
"ヨウ",
"—",
"mengandung, wadah, penampilan",
"容器(ようき)",
"wadah"
],
[
102,
"必",
"ヒツ",
"かならず",
"pasti, tanpa gagal",
"必要(ひつよう)",
"perlu"
],
[
103,
"演",
"エン",
"—",
"beraksi, bermain di panggung",
"演じる(えんじる)",
"memerankan"
],
[
104,
"歳",
"サイ・セイ",
"—",
"umur, tahun usia",
"年齢(ねんれい)",
"usia"
],
[
105,
"争",
"ソウ",
"あらそう",
"berselisih, bersaing",
"争う(あらそう)",
"bersaing"
],
[
106,
"談",
"ダン",
"—",
"percakapan, obrolan",
"話し合い(はなしあい)",
"diskusi"
],
[
107,
"能",
"ノウ",
"—",
"kemampuan, keahlian",
"能力(のうりょく)",
"kemampuan"
],
[
108,
"位",
"イ",
"くらい・ぐらい",
"kira-kira, pangkat, derajat",
"位置(いち)",
"posisi"
],
[
109,
"置",
"チ",
"おく",
"menempatkan, meletakkan",
"置く(おく)",
"meletakkan"
],
[
110,
"流",
"リュウ・ル",
"ながれる・ながす",
"arus, mengalir",
"流れる(ながれる)",
"mengalir"
],
[
111,
"格",
"カク・コウ・キャク",
"—",
"status, norma, standar",
"性格(せいかく)",
"kepribadian"
],
[
112,
"疑",
"ギ",
"うたがう",
"ragu, curiga",
"疑う(うたがう)",
"meragukan"
],
[
113,
"過",
"カ",
"すぎる・すごす・あやまつ・あやまち",
"berlebihan, melebihi",
"過ぎる(すぎる)",
"melewati, berlebihan"
],
[
114,
"局",
"キョク",
"—",
"kantor, biro",
"郵便局(ゆうびんきょく)",
"kantor pos"
],
[
115,
"放",
"ホウ",
"はなす・はなれる・はなつ・ゆるす・まかす・ほしい・まま・ひる",
"melepaskan, membiarkan",
"放す(はなす)",
"melepaskan"
],
[
116,
"常",
"ジョウ",
"つね・とこ",
"biasa, normal",
"通常(つうじょう)",
"biasanya"
],
[
117,
"状",
"ジョウ",
"—",
"keadaan, kondisi, bentuk",
"状態(じょうたい)",
"kondisi"
],
[
118,
"球",
"キュウ",
"たま",
"bola, bulatan",
"野球(やきゅう)",
"bisbol"
],
[
119,
"職",
"ショク",
"—",
"pekerjaan, jabatan",
"職業(しょくぎょう)",
"profesi"
],
[
120,
"与",
"ヨ",
"あたえる",
"memberi, memberikan",
"与える(あたえる)",
"memberi"
],
[
121,
"供",
"キョウ・ク・クウ",
"そなえる・とも",
"menyediakan, persembahan",
"供える(そなえる)",
"mempersembahkan"
],
[
122,
"役",
"ヤク・エキ",
"—",
"peran, tugas, dinas",
"役割(やくわり)",
"peran"
],
[
123,
"構",
"コウ",
"かまう・かまえる",
"membangun, menyusun",
"構造(こうぞう)",
"struktur"
],
[
124,
"割",
"カツ",
"わる・われる・わり・さく",
"membagi, memecah",
"割る(わる)",
"membagi"
],
[
125,
"身",
"シン",
"み",
"seseorang, tubuh",
"自分(じぶん)",
"diri sendiri"
],
[
126,
"費",
"ヒ",
"ついやす・ついえる",
"biaya, membelanjakan",
"費用(ひよう)",
"biaya"
],
[
127,
"付",
"フ",
"つける・つく",
"menempelkan, menambahkan",
"付ける(つける)",
"menempelkan"
],
[
128,
"由",
"ユ・ユウ・ユイ",
"よし",
"asal, sebab, alasan",
"理由(りゆう)",
"alasan"
],
[
129,
"説",
"セツ・ゼイ",
"とく",
"teori, penjelasan",
"説明(せつめい)",
"penjelasan"
],
[
130,
"難",
"ナン",
"かたい・むずかしい",
"sulit",
"難しい(むずかしい)",
"sulit"
],
[
131,
"優",
"ユウ・ウ",
"やさしい・すぐれる",
"unggul, lembut, aktor",
"優しい(やさしい)",
"lembut, baik"
],
[
132,
"夫",
"フ・フウ",
"おっと",
"suami",
"夫婦(ふうふ)",
"pasangan suami istri"
],
[
133,
"収",
"シュウ",
"おさめる・おさまる",
"mengumpulkan, pendapatan",
"収入(しゅうにゅう)",
"pendapatan"
],
[
134,
"断",
"ダン",
"たつ・ことわる",
"menolak, memotong",
"断る(ことわる)",
"menolak"
],
[
135,
"石",
"セキ・シャク・コク",
"いし",
"batu",
"石(いし)",
"batu"
],
[
136,
"違",
"イ",
"ちがう・ちがえる・たがう",
"berbeda",
"違う(ちがう)",
"berbeda"
],
[
137,
"消",
"ショウ",
"きえる・けす",
"padam, menghapus",
"消す(けす)",
"menghapus, mematikan"
],
[
138,
"神",
"シン・ジン",
"かみ・こう・かん",
"dewa, Tuhan",
"神様(かみさま)",
"Tuhan, dewa"
],
[
139,
"番",
"バン",
"つがい",
"nomor urut, giliran",
"番号(ばんごう)",
"nomor"
],
[
140,
"規",
"キ",
"—",
"peraturan, aturan",
"規則(きそく)",
"peraturan"
],
[
141,
"術",
"ジュツ",
"—",
"teknik, keahlian, tipu muslihat",
"技術(ぎじゅつ)",
"teknologi"
],
[
142,
"備",
"ビ",
"そなえる・そなわる",
"menyiapkan, melengkapi",
"準備(じゅんび)",
"persiapan"
],
[
143,
"宅",
"タク",
"—",
"rumah, tempat tinggal",
"住宅(じゅうたく)",
"perumahan"
],
[
144,
"害",
"ガイ",
"—",
"bahaya, kerusakan",
"害(がい)",
"bahaya"
],
[
145,
"配",
"ハイ",
"くばる",
"mendistribusikan",
"配る(くばる)",
"membagikan"
],
[
146,
"警",
"ケイ",
"—",
"memperingatkan, polisi",
"警察(けいさつ)",
"polisi"
],
[
147,
"育",
"イク",
"そだつ・そだてる・はぐくむ",
"tumbuh, membesarkan",
"育つ(そだつ)",
"tumbuh"
],
[
148,
"席",
"セキ",
"—",
"tempat duduk",
"席(せき)",
"kursi, tempat duduk"
],
[
149,
"訪",
"ホウ",
"おとずれる・たずねる",
"mengunjungi",
"訪れる(おとずれる)",
"mengunjungi"
],
[
150,
"乗",
"ジョウ・ショウ",
"のる",
"naik kendaraan",
"乗る(のる)",
"naik"
],
[
151,
"残",
"ザン",
"のこる・のこす",
"sisa, tersisa",
"残る(のこる)",
"tersisa"
],
[
152,
"想",
"ソウ・ソ",
"—",
"konsep, pemikiran, ide",
"想像(そうぞう)",
"imajinasi"
],
[
153,
"声",
"セイ・ショウ",
"こえ・こわ",
"suara",
"声(こえ)",
"suara"
],
[
154,
"助",
"ジョ",
"たすける・たすかる・すけ",
"membantu, menolong",
"助ける(たすける)",
"menolong"
],
[
155,
"労",
"ロウ",
"いたわる・ねぎらう",
"kerja keras, jerih payah",
"労働(ろうどう)",
"pekerjaan"
],
[
156,
"例",
"レイ",
"たとえば・たとえる",
"contoh, misal",
"例えば(たとえば)",
"misalnya"
],
[
157,
"然",
"ゼン・ネン",
"—",
"hal semacam itu, jika demikian",
"自然(しぜん)",
"alam"
],
[
158,
"限",
"ゲン",
"かぎる・かぎり",
"batas, membatasi",
"限る(かぎる)",
"membatasi"
],
[
159,
"追",
"ツイ",
"おう",
"mengejar",
"追う(おう)",
"mengejar"
],
[
160,
"商",
"ショウ",
"あきなう",
"berdagang, pedagang",
"商業(しょうぎょう)",
"perdagangan"
],
[
161,
"葉",
"ヨウ",
"は",
"daun",
"葉(は)",
"daun"
],
[
162,
"伝",
"デン",
"つたわる・つたえる・つたう",
"menyampaikan, menceritakan",
"伝える(つたえる)",
"menyampaikan"
],
[
163,
"働",
"ドウ",
"はたらく",
"bekerja",
"働く(はたらく)",
"bekerja"
],
[
164,
"形",
"ケイ・ギョウ",
"かた・かたち",
"bentuk, rupa",
"形(かたち)",
"bentuk"
],
[
165,
"景",
"ケイ・ケ",
"—",
"pemandangan",
"景色(けしき)",
"pemandangan"
],
[
166,
"落",
"ラク",
"おとす・おちる",
"jatuh, menjatuhkan",
"落ちる(おちる)",
"jatuh"
],
[
167,
"好",
"コウ",
"このむ・すく",
"suka, menyukai",
"好き(すき)",
"suka"
],
[
168,
"退",
"タイ",
"しりぞく・しりぞける・ひく・のける・どく",
"mundur, menarik diri",
"退く(しりぞく)",
"mundur"
],
[
169,
"頭",
"トウ・ズ・ト",
"あたま・かしら",
"kepala",
"頭(あたま)",
"kepala"
],
[
170,
"負",
"フ",
"まける・まかす・おう",
"kalah, mengalahkan",
"負ける(まける)",
"kalah"
],
[
171,
"渡",
"ト",
"わたる・わたす",
"menyeberang, melewati",
"渡る(わたる)",
"menyeberang"
],
[
172,
"失",
"シツ",
"うしなう・うせる",
"kehilangan",
"失う(うしなう)",
"kehilangan"
],
[
173,
"差",
"サ",
"さす",
"perbedaan, selisih",
"差(さ)",
"perbedaan"
],
[
174,
"末",
"マツ・バツ",
"すえ",
"akhir, bagian ujung",
"末(すえ)",
"akhir"
],
[
175,
"守",
"シュ・ス",
"まもる・もり",
"menjaga, melindungi",
"守る(まもる)",
"menjaga"
],
[
176,
"若",
"ジャク・ニャク",
"わかい・もしくは",
"muda",
"若い(わかい)",
"muda"
],
[
177,
"種",
"シュ",
"たね・くさ",
"jenis, tipe, benih",
"種類(しゅるい)",
"jenis"
],
[
178,
"美",
"ビ・ミ",
"うつくしい",
"keindahan, cantik",
"美しい(うつくしい)",
"cantik"
],
[
179,
"命",
"メイ・ミョウ",
"いのち",
"takdir, kehidupan, perintah",
"命(いのち)",
"nyawa"
],
[
180,
"福",
"フク",
"—",
"berkah, keberuntungan",
"福(ふく)",
"keberuntungan"
],
[
181,
"望",
"ボウ・モウ",
"のぞむ",
"harapan, keinginan",
"望む(のぞむ)",
"berharap"
],
[
182,
"非",
"ヒ",
"—",
"bukan, tidak",
"非(ひ)",
"bukan, kesalahan"
],
[
183,
"観",
"カン",
"—",
"pandangan, pengamatan",
"観光(かんこう)",
"pariwisata"
],
[
184,
"察",
"サツ",
"—",
"memeriksa, menduga",
"観察(かんさつ)",
"pengamatan"
],
[
185,
"段",
"ダン",
"—",
"tingkat, langkah",
"段階(だんかい)",
"tahap"
],
[
186,
"横",
"オウ",
"よこ",
"menyamping, horizontal",
"横(よこ)",
"samping, horizontal"
],
[
187,
"深",
"シン",
"ふかめる・ふかまる・ふかい",
"dalam",
"深い(ふかい)",
"dalam"
],
[
188,
"申",
"シン",
"もうす・もうし・さる・かさねる",
"berkata, monyet (shio)",
"申す(もうす)",
"mengatakan dengan sopan"
],
[
189,
"様",
"ヨウ",
"さま",
"Tuan/Nyonya, keadaan",
"様子(ようす)",
"keadaan, penampilan"
],
[
190,
"財",
"ザイ・サイ",
"—",
"harta, kekayaan",
"財産(ざいさん)",
"harta benda"
],
[
191,
"港",
"コウ",
"みなと",
"pelabuhan",
"港(みなと)",
"pelabuhan"
],
[
192,
"識",
"シキ",
"—",
"mengetahui, membedakan",
"知識(ちしき)",
"pengetahuan"
],
[
193,
"呼",
"コ",
"よぶ",
"memanggil",
"呼ぶ(よぶ)",
"memanggil"
],
[
194,
"達",
"タツ・ダ",
"たち・とおる・とおす",
"mencapai, sampai",
"達する(たっする)",
"mencapai"
],
[
195,
"良",
"リョウ",
"よい・いい",
"baik, bagus",
"良い(よい)",
"baik"
],
[
196,
"阪",
"ハン",
"さか",
"lereng",
"大阪(おおさか)",
"Osaka"
],
[
197,
"候",
"コウ",
"そうろう",
"kondisi, keadaan",
"気候(きこう)",
"iklim"
],
[
198,
"程",
"テイ",
"ほど",
"tingkat, derajat",
"程度(ていど)",
"tingkat"
],
[
199,
"満",
"マン",
"みちる・みたす",
"penuh, memuaskan",
"満ちる(みちる)",
"penuh"
],
[
200,
"敗",
"ハイ",
"やぶれる",
"kekalahan, kalah",
"敗れる(やぶれる)",
"kalah"
],
[
201,
"値",
"チ",
"ね・あたい",
"harga, nilai",
"値段(ねだん)",
"harga"
],
[
202,
"突",
"トツ・カ",
"つく",
"menusuk, tiba-tiba",
"突然(とつぜん)",
"tiba-tiba"
],
[
203,
"光",
"コウ",
"ひかる・ひかり",
"sinar, cahaya",
"光(ひかり)",
"cahaya"
],
[
204,
"路",
"ロ",
"じ",
"jalan, rute",
"道路(どうろ)",
"jalan raya"
],
[
205,
"科",
"カ",
"—",
"departemen, jurusan",
"科学(かがく)",
"ilmu pengetahuan"
],
[
206,
"積",
"セキ",
"つむ・つもる",
"menumpuk, memuat",
"積む(つむ)",
"menumpuk"
],
[
207,
"他",
"タ",
"ほか",
"lainnya",
"他(ほか)",
"lainnya"
],
[
208,
"処",
"ショ",
"—",
"menangani, mengurus",
"処分(しょぶん)",
"pembuangan, penanganan"
],
[
209,
"太",
"タイ・タ",
"ふとい・ふとる",
"gemuk, tebal",
"太い(ふとい)",
"tebal, besar"
],
[
210,
"客",
"キャク・カク",
"—",
"pelanggan, tamu",
"客(きゃく)",
"tamu"
],
[
211,
"否",
"ヒ",
"いな・いや",
"menyangkal, tidak",
"否(いや)",
"tidak"
],
[
212,
"師",
"シ",
"—",
"guru, master",
"教師(きょうし)",
"guru"
],
[
213,
"登",
"トウ・ト",
"のぼる",
"mendaki, naik",
"登る(のぼる)",
"mendaki"
],
[
214,
"易",
"エキ・イ",
"やさしい",
"mudah, sederhana",
"易しい(やさしい)",
"mudah"
],
[
215,
"速",
"ソク",
"はやい・はやめる・はやまる・すみやか",
"cepat, kencang",
"速い(はやい)",
"cepat"
],
[
216,
"存",
"ソン・ゾン",
"—",
"ada, eksis",
"存在(そんざい)",
"keberadaan"
],
[
217,
"飛",
"ヒ",
"とぶ・とばす",
"terbang, melompat",
"飛ぶ(とぶ)",
"terbang"
],
[
218,
"殺",
"セツ・サツ・サイ",
"ころす",
"membunuh",
"殺す(ころす)",
"membunuh"
],
[
219,
"号",
"ゴウ",
"—",
"nomor, sebutan",
"番号(ばんごう)",
"nomor"
],
[
220,
"単",
"タン",
"ひとえ",
"sederhana, tunggal",
"簡単(かんたん)",
"sederhana"
],
[
221,
"座",
"ザ",
"すわる",
"duduk, tempat duduk",
"座る(すわる)",
"duduk"
],
[
222,
"破",
"ハ",
"やぶる・やぶれる",
"merobek, menghancurkan",
"破る(やぶる)",
"merobek"
],
[
223,
"除",
"ジョ・ジ",
"のぞく",
"mengecualikan, menghapus",
"除く(のぞく)",
"mengecualikan"
],
[
224,
"完",
"カン",
"—",
"lengkap, selesai",
"完了(かんりょう)",
"penyelesaian"
],
[
225,
"降",
"コウ・ゴ",
"ふる・おろす・おりる",
"turun, jatuh",
"降りる(おりる)",
"turun"
],
[
226,
"責",
"セキ",
"せめる",
"tanggung jawab, menyalahkan",
"責任(せきにん)",
"tanggung jawab"
],
[
227,
"捕",
"ホ",
"とる・とらわれる・とらえる・つかまる・つかまえる",
"menangkap",
"捕まえる(つかまえる)",
"menangkap"
],
[
228,
"危",
"キ",
"あぶない・あやぶむ・あやうい",
"berbahaya",
"危ない(あぶない)",
"berbahaya"
],
[
229,
"給",
"キュウ",
"たまう・たもう",
"memberi, gaji",
"給料(きゅうりょう)",
"gaji"
],
[
230,
"苦",
"ク",
"にがる・にがい・くるしい・くるしめる・くるしむ",
"pahit, menderita",
"苦しい(くるしい)",
"menderita"
],
[
231,
"迎",
"ゲイ",
"むかえる",
"menyambut",
"迎える(むかえる)",
"menyambut"
],
[
232,
"園",
"エン",
"その",
"taman, kebun",
"公園(こうえん)",
"taman"
],
[
233,
"具",
"グ",
"—",
"alat, bahan",
"道具(どうぐ)",
"alat"
],
[
234,
"辞",
"ジ",
"やめる",
"berhenti kerja, mengundurkan diri",
"辞める(やめる)",
"berhenti"
],
[
235,
"因",
"イン",
"よる・ちなむ",
"sebab, faktor",
"原因(げんいん)",
"penyebab"
],
[
236,
"馬",
"バ",
"うま・ま",
"kuda",
"馬(うま)",
"kuda"
],
[
237,
"愛",
"アイ",
"いとしい・まな・かなしい・めでる",
"cinta",
"愛(あい)",
"cinta"
],
[
238,
"富",
"フ・フウ",
"とむ・とみ",
"kekayaan",
"富む(とむ)",
"kaya"
],
[
239,
"彼",
"ヒ",
"かれ・かの",
"dia (laki-laki)",
"彼(かれ)",
"dia"
],
[
240,
"未",
"ミ・ビ",
"まだ・いまだ",
"belum, masih",
"未来(みらい)",
"masa depan"
],
[
241,
"舞",
"ブ",
"まう・まい",
"menari",
"舞う(まう)",
"menari"
],
[
242,
"亡",
"ボウ・モウ",
"なくなる",
"meninggal, mati",
"亡くなる(なくなる)",
"meninggal"
],
[
243,
"冷",
"レイ",
"つめたい・ひえる・ひやす・ひやかす・ひや・さめる・さます",
"dingin",
"冷たい(つめたい)",
"dingin"
],
[
244,
"適",
"テキ",
"—",
"cocok, sesuai",
"適当(てきとう)",
"sesuai, seadanya"
],
[
245,
"婦",
"フ",
"まめ",
"wanita, istri",
"婦人(ふじん)",
"wanita"
],
[
246,
"寄",
"キ",
"よる・よせる",
"mendekat, menyumbang",
"寄る(よる)",
"mendekat, mampir"
],
[
247,
"込",
"—",
"こめる・こむ",
"sesak, mencampur",
"込む(こむ)",
"sesak, ramai"
],
[
248,
"顔",
"ガン",
"かお",
"wajah",
"顔(かお)",
"wajah"
],
[
249,
"類",
"ルイ",
"たぐい",
"jenis, golongan",
"種類(しゅるい)",
"jenis"
],
[
250,
"余",
"ヨ",
"あまる・あます",
"kelebihan, sisa",
"余る(あまる)",
"berlebihan"
],
[
251,
"王",
"オウ",
"—",
"raja",
"王様(おうさま)",
"raja"
],
[
252,
"返",
"ヘン",
"かえる・かえす",
"kembali, mengembalikan",
"返す(かえす)",
"mengembalikan"
],
[
253,
"妻",
"サイ",
"つま",
"istri",
"妻(つま)",
"istri"
],
[
254,
"背",
"ハイ",
"そむける・そむく・せい・せ",
"punggung, tinggi badan",
"背(せ)",
"tinggi badan"
],
[
255,
"熱",
"ネツ",
"あつい",
"panas, demam",
"熱い(あつい)",
"panas"
],
[
256,
"宿",
"シュク",
"やどる・やどす・やど",
"penginapan, menginap",
"宿(やど)",
"penginapan"
],
[
257,
"薬",
"ヤク",
"くすり",
"obat",
"薬(くすり)",
"obat"
],
[
258,
"険",
"ケン",
"けわしい",
"curam, berbahaya",
"危険(きけん)",
"bahaya"
],
[
259,
"頼",
"ライ",
"たのむ・たのもしい・たより・たよる",
"meminta, mengandalkan",
"頼む(たのむ)",
"meminta tolong"
],
[
260,
"覚",
"カク",
"おぼえる・さめる・さます",
"mengingat, merasa",
"覚える(おぼえる)",
"mengingat"
],
[
261,
"船",
"セン",
"ふね・ふな",
"kapal",
"船(ふね)",
"kapal"
],
[
262,
"途",
"ト",
"みち",
"jalan, rute",
"途中(とちゅう)",
"di tengah jalan"
],
[
263,
"許",
"キョ",
"ゆるす",
"mengizinkan",
"許す(ゆるす)",
"mengizinkan"
],
[
264,
"抜",
"バツ",
"ぬける・ぬく・ぬかる・ぬかす",
"mencabut, melepas",
"抜く(ぬく)",
"mencabut"
],
[
265,
"便",
"ベン・ビン",
"たより",
"nyaman, fasilitas",
"便利(べんり)",
"praktis"
],
[
266,
"留",
"リュウ・ル",
"とめる・とまる・とどめる",
"menahan, berhenti",
"留める(とめる)",
"menahan"
],
[
267,
"罪",
"ザイ",
"つみ",
"dosa, kejahatan",
"罪(つみ)",
"dosa"
],
[
268,
"努",
"ド",
"つとめる",
"berusaha",
"努力(どりょく)",
"usaha"
],
[
269,
"精",
"セイ・ショウ",
"しらげる",
"halus, semangat",
"精神(せいしん)",
"jiwa, semangat"
],
[
270,
"散",
"サン",
"ちる・ちらす・ちらかる・ちらかす",
"berserakan",
"散る(ちる)",
"berserakan"
],
[
271,
"静",
"セイ・ジョウ",
"しず・しずか・しずめる・しずまる",
"diam, tenang",
"静か(しずか)",
"tenang"
],
[
272,
"婚",
"コン",
"—",
"pernikahan",
"結婚(けっこん)",
"pernikahan"
],
[
273,
"喜",
"キ",
"よろこぶ",
"gembira",
"喜ぶ(よろこぶ)",
"bergembira"
],
[
274,
"浮",
"フ",
"うく・うかれる・うかべる・うかぶ",
"mengapung",
"浮く(うく)",
"mengapung"
],
[
275,
"絶",
"ゼツ",
"たやす・たつ・たえる",
"memutus, punah",
"絶対(ぜったい)",
"mutlak"
],
[
276,
"幸",
"コウ",
"しあわせ・さち・さいわい",
"kebahagiaan",
"幸せ(しあわせ)",
"kebahagiaan"
],
[
277,
"押",
"オウ",
"おす・おさえる",
"mendorong, menekan",
"押す(おす)",
"mendorong"
],
[
278,
"倒",
"トウ",
"たおれる・たおす",
"runtuh, menjatuhkan",
"倒れる(たおれる)",
"runtuh"
],
[
279,
"等",
"トウ",
"ひとしい・など",
"sama, dan sebagainya",
"など(など)",
"dan lain-lain"
],
[
280,
"老",
"ロウ",
"おいる・ふける",
"tua",
"老いる(おいる)",
"menjadi tua"
],
[
281,
"曲",
"キョク",
"まげる・まがる",
"membengkokkan, musik",
"曲がる(まがる)",
"berbelok"
],
[
282,
"払",
"フツ",
"はらう",
"membayar, membersihkan",
"払う(はらう)",
"membayar"
],
[
283,
"庭",
"テイ",
"にわ",
"halaman, taman",
"庭(にわ)",
"halaman"
],
[
284,
"徒",
"ト",
"—",
"pengikut, sia-sia",
"徒歩(とほ)",
"berjalan kaki"
],
[
285,
"勤",
"キン・ゴン",
"つとめる・つとまる",
"bekerja",
"勤める(つとめる)",
"bekerja di"
],
[
286,
"遅",
"チ",
"おそい・おくれる・おくらす",
"lambat, terlambat",
"遅い(おそい)",
"lambat"
],
[
287,
"居",
"キョ・コ",
"いる",
"tinggal, berada",
"居る(いる)",
"ada (makhluk hidup)"
],
[
288,
"雑",
"ザツ・ゾウ",
"まじる",
"campur aduk, berbagai",
"雑誌(ざっし)",
"majalah"
],
[
289,
"招",
"ショウ",
"まねく",
"mengundang",
"招く(まねく)",
"mengundang"
],
[
290,
"困",
"コン",
"こまる",
"kesulitan",
"困る(こまる)",
"kesulitan"
],
[
291,
"欠",
"ケツ",
"かける・かく",
"kekurangan",
"欠ける(かける)",
"kurang"
],
[
292,
"更",
"コウ",
"ふける・ふかす・さら",
"memperbarui, lebih lanjut",
"更に(さらに)",
"lebih lanjut"
],
[
293,
"刻",
"コク",
"きざむ",
"mengukir, mencacah",
"刻む(きざむ)",
"mengukir"
],
[
294,
"賛",
"サン",
"—",
"menyetujui, memuji",
"賛成(さんせい)",
"persetujuan"
],
[
295,
"抱",
"ホウ",
"だく・かかえる・いだく",
"memeluk",
"抱く(だく)",
"memeluk"
],
[
296,
"犯",
"ハン",
"おかす",
"melanggar, kejahatan",
"犯す(おかす)",
"melanggar"
],
[
297,
"恐",
"キョウ",
"おそれる・おそろしい",
"takut",
"恐ろしい(おそろしい)",
"mengerikan"
],
[
298,
"息",
"ソク・ムス",
"いき",
"napas, bunga (uang)",
"息(いき)",
"napas"
],
[
299,
"遠",
"エン・オン",
"とおい",
"jauh",
"遠い(とおい)",
"jauh"
],
[
300,
"戻",
"レイ",
"もどる・もどす",
"kembali, mengembalikan",
"戻る(もどる)",
"kembali"
],
[
301,
"願",
"ガン",
"ねがう",
"permohonan, harapan",
"願う(ねがう)",
"berharap"
],
[
302,
"絵",
"カイ・エ",
"えがく",
"gambar, lukisan",
"絵(え)",
"gambar"
],
[
303,
"越",
"エツ",
"こす・こえる",
"melewati, melampaui",
"越える(こえる)",
"melewati"
],
[
304,
"欲",
"ヨク",
"ほしい・ほっする",
"keinginan, nafsu",
"欲しい(ほしい)",
"ingin"
],
[
305,
"痛",
"ツウ",
"いたい・いためる・いたむ",
"sakit",
"痛い(いたい)",
"sakit"
],
[
306,
"笑",
"ショウ",
"わらう・えむ",
"tertawa, tersenyum",
"笑う(わらう)",
"tertawa"
],
[
307,
"互",
"ゴ",
"たがい・かたみに",
"saling",
"互い(たがい)",
"saling"
],
[
308,
"束",
"ソク",
"たば・つか",
"ikat, bundel",
"束(たば)",
"bundel"
],
[
309,
"似",
"ジ・ネ",
"にる",
"mirip",
"似る(にる)",
"mirip"
],
[
310,
"列",
"レツ・レ",
"—",
"baris, deret",
"列(れつ)",
"barisan"
],
[
311,
"探",
"タン",
"さぐる・さがす",
"mencari",
"探す(さがす)",
"mencari"
],
[
312,
"逃",
"トウ",
"のがれる・のがす・にげる・にがす",
"melarikan diri",
"逃げる(にげる)",
"lari"
],
[
313,
"遊",
"ユウ・ユ",
"あそぶ",
"bermain",
"遊ぶ(あそぶ)",
"bermain"
],
[
314,
"迷",
"メイ",
"まよう",
"bingung, tersesat",
"迷う(まよう)",
"tersesat"
],
[
315,
"夢",
"ム",
"ゆめ",
"mimpi",
"夢(ゆめ)",
"mimpi"
],
[
316,
"君",
"クン",
"きみ",
"kamu",
"君(きみ)",
"kamu"
],
[
317,
"閉",
"ヘイ",
"しめる・しまる・とじる・とざす",
"menutup",
"閉める(しめる)",
"menutup"
],
[
318,
"緒",
"ショ・チョ",
"お",
"awal, tali",
"緒(お)",
"tali, permulaan"
],
[
319,
"折",
"セツ・シャク",
"おれる・おる・おり",
"melipat, patah",
"折る(おる)",
"melipat, mematahkan"
],
[
320,
"草",
"ソウ",
"くさ",
"rumput",
"草(くさ)",
"rumput"
],
[
321,
"暮",
"ボ",
"くれる・くらす",
"senja, mencari nafkah",
"暮れる(くれる)",
"menjadi gelap"
],
[
322,
"酒",
"シュ",
"さけ・さか",
"sake, alkohol",
"酒(さけ)",
"minuman keras"
],
[
323,
"悲",
"ヒ",
"かなしむ・かなしい",
"sedih",
"悲しい(かなしい)",
"sedih"
],
[
324,
"晴",
"セイ",
"はれる・はらす",
"cerah",
"晴れる(はれる)",
"cerah"
],
[
325,
"掛",
"ケイ",
"かける・かかる・かかり",
"menggantung, memasang",
"掛ける(かける)",
"menggantung"
],
[
326,
"到",
"トウ",
"いたる",
"tiba, mencapai",
"到着(とうちゃく)",
"kedatangan"
],
[
327,
"寝",
"シン",
"ねる・ねかす",
"tidur",
"寝る(ねる)",
"tidur"
],
[
328,
"暗",
"アン",
"くらい",
"gelap",
"暗い(くらい)",
"gelap"
],
[
329,
"盗",
"トウ",
"ぬすむ",
"mencuri",
"盗む(ぬすむ)",
"mencuri"
],
[
330,
"吸",
"キュウ",
"すう",
"menghisap",
"吸う(すう)",
"menghisap"
],
[
331,
"陽",
"ヨウ",
"ひ",
"matahari, positif",
"太陽(たいよう)",
"matahari"
],
[
332,
"御",
"ギョ・ゴ",
"おん・お",
"hormat, awalan kehormatan",
"御(お)",
"awalan hormat"
],
[
333,
"歯",
"シ",
"は",
"gigi",
"歯(は)",
"gigi"
],
[
334,
"忘",
"ボウ",
"わすれる",
"lupa",
"忘れる(わすれる)",
"lupa"
],
[
335,
"雪",
"セツ",
"ゆき",
"salju",
"雪(ゆき)",
"salju"
],
[
336,
"吹",
"スイ",
"ふく",
"meniup",
"吹く(ふく)",
"meniup"
],
[
337,
"娘",
"ジョウ",
"むすめ・こ",
"anak perempuan",
"娘(むすめ)",
"anak perempuan"
],
[
338,
"誤",
"ゴ",
"あやまる",
"kesalahan",
"誤り(あやまり)",
"kesalahan"
],
[
339,
"洗",
"セン",
"あらう",
"mencuci",
"洗う(あらう)",
"mencuci"
],
[
340,
"慣",
"カン",
"なれる・ならす",
"terbiasa",
"慣れる(なれる)",
"terbiasa"
],
[
341,
"礼",
"レイ・ライ",
"—",
"etiket, terima kasih",
"礼(れい)",
"terima kasih, sopan santun"
],
[
342,
"窓",
"ソウ",
"まど",
"jendela",
"窓(まど)",
"jendela"
],
[
343,
"昔",
"セキ・シャク",
"むかし",
"zaman dulu",
"昔(むかし)",
"dulu"
],
[
344,
"貧",
"ヒン・ビン",
"まずしい",
"miskin",
"貧しい(まずしい)",
"miskin"
],
[
345,
"怒",
"ド",
"おこる・いかる",
"marah",
"怒る(おこる)",
"marah"
],
[
346,
"泳",
"エイ",
"およぐ",
"berenang",
"泳ぐ(およぐ)",
"berenang"
],
[
347,
"祖",
"ソ",
"—",
"leluhur",
"祖先(そせん)",
"leluhur"
],
[
348,
"杯",
"ハイ",
"さかずき",
"cangkir, gelas",
"杯(さかずき)",
"cawan sake"
],
[
349,
"疲",
"ヒ",
"つかれる",
"lelah",
"疲れる(つかれる)",
"lelah"
],
[
350,
"皆",
"カイ",
"みな・みんな",
"semua",
"皆(みんな)",
"semua orang"
],
[
351,
"鳴",
"メイ",
"なく・ならす・なる",
"berbunyi, berkicau",
"鳴く(なく)",
"berkicau"
],
[
352,
"腹",
"フク",
"はら",
"perut",
"腹(はら)",
"perut"
],
[
353,
"煙",
"エン",
"けむる・けむり・けむい",
"asap",
"煙(けむり)",
"asap"
],
[
354,
"眠",
"ミン",
"ねむる・ねむい",
"tidur, mengantuk",
"眠い(ねむい)",
"mengantuk"
],
[
355,
"怖",
"フ",
"こわい・おじる",
"menakutkan",
"怖い(こわい)",
"menakutkan"
],
[
356,
"耳",
"ジ",
"みみ",
"telinga",
"耳(みみ)",
"telinga"
],
[
357,
"頂",
"チョウ",
"いただく・いただき",
"puncak, menerima (sopan)",
"頂く(いただく)",
"menerima (sopan)"
],
[
358,
"箱",
"ソウ",
"はこ",
"kotak",
"箱(はこ)",
"kotak"
],
[
359,
"晩",
"バン",
"—",
"malam, sore",
"晩(ばん)",
"malam"
],
[
360,
"寒",
"カン",
"さむい",
"dingin (cuaca)",
"寒い(さむい)",
"dingin"
],
[
361,
"髪",
"ハツ",
"かみ",
"rambut kepala",
"髪(かみ)",
"rambut"
],
[
362,
"忙",
"ボウ・モウ",
"いそがしい",
"sibuk",
"忙しい(いそがしい)",
"sibuk"
],
[
363,
"才",
"サイ",
"—",
"bakat, umur (tahun)",
"才能(さいのう)",
"bakat"
],
[
364,
"靴",
"カ",
"くつ",
"sepatu",
"靴(くつ)",
"sepatu"
],
[
365,
"恥",
"チ",
"はずかしい・はじる・はじらう・はじ",
"malu, aib",
"恥ずかしい(はずかしい)",
"malu"
],
[
366,
"偶",
"グウ",
"たま",
"kebetulan, genap",
"偶然(ぐうぜん)",
"kebetulan"
],
[
367,
"偉",
"イ",
"えらい",
"hebat, agung",
"偉い(えらい)",
"hebat"
],
[
368,
"猫",
"ビョウ",
"ねこ",
"kucing",
"猫(ねこ)",
"kucing"
],
[
369,
"幾",
"キ",
"いくつ",
"berapa banyak",
"幾つ(いくつ)",
"berapa"
],
[
370,
"誰",
"スイ",
"だれ",
"siapa",
"誰(だれ)",
"siapa"
]
];
