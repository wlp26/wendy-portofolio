import project1 from "../assets/ecommerceWendy.png";
import app0 from "../assets/app0.jpg";
import app1 from "../assets/app1.jpg";
import app2 from "../assets/app2.jpg";
import app3 from "../assets/app3.jpg";
import app4 from "../assets/app4.jpg";
import app5 from "../assets/app5.jpg";
import app6 from "../assets/app6.jpg";
import app7 from "../assets/app7.jpg";
import app8 from "../assets/app8.jpg";
import app9 from "../assets/app9.jpg";
import app10 from "../assets/app10.jpg";

import project2 from "../assets/dashboard.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";
import web8 from "../assets/web8.png";
import web9 from "../assets/web9.png";
import web10 from "../assets/web10.png";
import web11 from "../assets/web11.png";
import web12 from "../assets/web12.png";

import project3 from "../assets/webPorto.png";
import project4 from "../assets/slidergameAndroid2.png";
import game from "../assets/slidergameAndroid1.png";
import game2 from "../assets/iosSlidderGame.png";

import project5 from "../assets/webCanva1.png";
import webCanva2 from "../assets/webCanva2.png";
import webCanva3 from "../assets/webCanva3.png";

import picture20 from "../assets/picture20.png";
import picture21 from "../assets/Picture21.png";
import picture22 from "../assets/Picture22.png";
import picture23 from "../assets/Picture23.png";
import picture24 from "../assets/Picture24.png";
import picture25 from "../assets/Picture25.png";
import picture26 from "../assets/Picture26.png";
import picture27 from "../assets/Picture27.png";
import picture28 from "../assets/Picture28.png";
import picture29 from "../assets/Picture29.png";
import picture30 from "../assets/Picture30.png";
import picture31 from "../assets/Picture31.png";
import picture32 from "../assets/Picture32.png";
import picture33 from "../assets/Picture33.png";
import picture34 from "../assets/Picture34.png";
import picture35 from "../assets/Picture35.png";
import picture36 from "../assets/Picture36.png";
import picture37 from "../assets/Picture37.png";
import picture38 from "../assets/Picture38.png";

export const HERO_CONTENT = `Saya adalah lulusan S1 Teknik Informatika yang memiliki spesialisasi dalam bidang pengembangan aplikasi berbasis Android, IOS dan pengembangan web serta Backend dalam pembuatan REST API. memiliki 2 tahun pengamlaman dakam membangun aplikasi mobile dan website. Saya adalah orang yang pekerja keras, disiplin, jujur, bertanggung jawab, suka mempelajari hal baru, dan mampu bekerja dalam tim.`;

export const ABOUT_TEXT = `Saya adalah seorang full stack developer dan mobile developer lulusan Universitas Kristen Petra Surabaya yang memiliki passion untuk membuat sebuah aplikasi yang efisien dan user-friendly. Dengan pengalaman 2 tahun dalam bidang frontend dan backend, saya telah bekerja dengan berbagai teknologi yaitu Flutter, Laravel, Javascript, React, Vite, Tailwind dan MySQL. Perjalanan saya dalam membangun sebuah aplikasi web dan mobile dimulai dengan rasa ingin tahu yang mendalam terhadap cara kerja, dan telah berkembang menjadi karier di mana saya terus berusaha untuk belajar dan beradaptasi dengan tantangan baru.`;

export const EXPERIENCES = [
  {
    year: "Juni 2023 - Desember 2023",
    role: "Mobile Frontend Developer",
    company: "Cross Network Indonesia. (Magang)",
    description: `Membuat dan mengembangkan User Interface untuk aplikasi mobile berbasis android dengan menggunakan flutter. Bekerja sama dengan backend developer untuk mengintegrasikan komponen frontend dengan REST API.`,
    technologies: ["Flutter"],
  },
  {
    year: "Januari 2024 - Juni 2024",
    role: "Full Stack Developer",
    company: "Toko Wendy Girian",
    description: `Membuat dan mengembangkan aplikasi mobile e-commerce dan website admin untuk toko wendy girian dengan menggunakan laravel dan flutter sebagai framework dan database menggunakan MySQL. Mendesain dan mengimplementasi REST API untuk komunikasi data, menintegrasikan payment gateway menggunakan midtrans dan push notification menggunkana FCM (firebase cloud messaging).`,
    technologies: ["Laravel", "Flutter", "Midtrans", "mySQL", "FCM"],
  },
];

export const PROJECTS = [
  {
    title: "Aplikasi E-Commerce toko Wendy",
    image: [
      project1,
      app0,
      app1,
      app2,
      app3,
      app4,
      app5,
      app6,
      app7,
      app8,
      app9,
      app10,
    ],
    width: 150,
    height: 150,
    description:
      "Aplikasi mobile e-commerce yang memiliki fitur seperti daftar produk, detail produk, keranjang belanja, user authentication, detail transaksi, payment gateway, histori transaksi, forgot password, menerima notifikasi dan lain sebagainya .",
    technologies: ["Flutter", "Dart", "Midtrans", "FCM"],
  },
  {
    title: "Website Admin dan backend toko Wendy",
    image: [
      project2,
      web1,
      web2,
      web3,
      web4,
      web5,
      web6,
      web7,
      web8,
      web9,
      web10,
      web11,
      web12,
    ],
    width: 600,
    height: 600,
    description:
      "Website admin yang terintegrasi dengan aplikasi e-commerce toko wendy. pada website admin memiliki fitur CRUD produk, kategori, satuan, konfirmasi transaksi, detail transaksi, update transaksi,push notification, generate kode pengambilan lalu untuk bagian backend dibuatkan REST API untuk komunikasi data dengan aplikasi e-commerce.",
    technologies: ["Laravel", "PHP", "Javascript", "MySQL"],
  },

  {
    title: "Website Editing seperti Canva",
    image: [project5, webCanva2, webCanva3],
    width: 600,
    height: 600,
    description:
      "Membuat dan mengembangkan sebuah website untuk mengedit image atau poster seperti canva sebagai tugas atau project perkuliahan. Fitur-fitur utamanya yaitu dapat memilih template yang telah disediakan lalu dapat menambahkan text, sticker, mengatur font-size, font-style, font-color dan dapat didownload",
    technologies: ["HTML", "CSS", "FabricJS"],
  },
  {
    title: "Portfolio Website",
    image: [project3],
    width: 600,
    height: 600,
    description:
      "Web portofolio pribadi yang menampilkan projects, skills, and contact information.",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    title: "Slider Game Android dan IOS",
    image: [project4, game, game2],
    width: 300,
    height: 400,
    description:
      "Membuat game puzzle yaitu dimana user harus mengurutkan angka 1-9 yang teracak dalam blok. skor akan tercatat dalam firebase dimana terdapat ranking, yang tertinggi adalah jumlah langkah yang sedikit dengan waktu yang cepat",
    technologies: ["Kotlin", "Swift", "Firebase"],
  },

  {
    title: "Aplikasi Ekspedisi Cold Storage",
    image: [
      picture20,
      picture21,
      picture22,
      picture23,
      picture24,
      picture25,
      picture26,
      picture27,
      picture28,
      picture29,
      picture30,
      picture31,
      picture32,
      picture33,
      picture34,
      picture35,
      picture36,
      picture37,
      picture38,
    ],
    width: 300,
    height: 400,
    description:
      "Aplikasi Ekspedisi untuk perusahaan cold storage dimana dalam aplikasi ini dibuatkan beberapa fitur utama yaitu List jadwal pengantaran barang, Distribusi, Tracking lokasi driver ekspedisi dan Konfirmasi jika barang telah sampai ditujuan",
    technologies: ["Flutter", "Dart"],
  },
];

export const CONTACT = {
  address: "Jalan siwalankerto permai 4, blok j13, Surabaya, Jawa Timur ",
  phoneNo: "+6281241015899 (WA) ",
  email: "leandopaath26@gmail.com",
};
