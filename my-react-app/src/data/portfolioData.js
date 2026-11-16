export const portfolioData = {
  name: "Romario Katagame",
  initials: "RK",
  role: "Fullstack Web Developer",
  location: "Indonesia",
  educationSummary:
    "Magister Manajemen, Universitas Semarang · Fullstack Web Development, Harisenin.com",
  intro:
    "Saya menggabungkan pengalaman memimpin operasional maritim dan keselamatan kerja dengan kemampuan membangun aplikasi web yang tangguh, terstruktur, dan berorientasi pada kebutuhan nyata.",
  about:
    "Perjalanan saya berawal dari dunia operasional maritim dan manajemen keselamatan (SHE), lingkungan yang menuntut ketelitian, koordinasi, dan keputusan yang bertanggung jawab. Kini saya membawa prinsip yang sama ke dunia pengembangan web: memahami masalah, merancang solusi yang jelas, lalu membangun produk yang bisa diandalkan.",
  workApproach:
    "Saya menyukai proses kolaboratif dari memahami kebutuhan pengguna hingga menguji detail implementasi. Bagi saya, kode yang baik bukan hanya berjalan, tetapi juga mudah dipahami, dirawat, dan memberi dampak yang terukur.",
  skills: [
    {
      category: "Frontend",
      description: "Antarmuka responsif yang nyaman digunakan.",
      items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js"],
    },
    {
      category: "Backend",
      description: "Logika aplikasi dan komunikasi data.",
      items: ["Node.js", "Express.js", "Socket.io", "REST API", "SQLite"],
    },
    {
      category: "Tools & Deployment",
      description: "Workflow rapi dari pengembangan hingga rilis.",
      items: ["Git", "GitHub", "Vercel", "Database"],
    },
  ],
  projects: [
    {
      number: "01",
      name: "Timika Aman",
      type: "Pelaporan darurat · Real-time",
      description:
        "Membantu warga menyampaikan laporan darurat dengan lebih cepat. Informasi dirancang mengalir secara real-time agar tindak lanjut lebih terkoordinasi.",
      solution:
        "Dibangun sebagai aplikasi fullstack dengan pembaruan real-time dan penyimpanan data terstruktur.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "SQLite",
      ],
      demoUrl: "",
      repositoryUrl: "",
      theme: "project-card--terracotta",
    },
    {
      number: "02",
      name: "Company Profile & Booking System",
      subtitle: "CV Fourk Game",
      type: "Profil perusahaan · Sistem booking",
      description:
        "Menyajikan layanan sanitasi transportasi industri dengan informasi yang mudah dipahami dan alur pemesanan yang lebih praktis.",
      solution:
        "Website responsif yang menyatukan informasi perusahaan dan pengalaman booking dalam satu alur.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      demoUrl: "",
      repositoryUrl: "",
      theme: "project-card--mustard",
    },
    {
      number: "03",
      name: "Portal Informasi Lokal",
      subtitle: "infotimika.com",
      type: "Informasi lokal · Direktori",
      description:
        "Memudahkan masyarakat menemukan informasi dan layanan lokal dalam satu platform yang dekat dengan kebutuhan komunitas.",
      solution:
        "Portal informasi dan direktori lokal dengan struktur konten yang mudah dijelajahi.",
      technologies: ["Web", "JavaScript", "Database", "REST API"],
      demoUrl: "https://infotimika.com",
      repositoryUrl: "",
      theme: "project-card--sage",
    },
  ],
  timeline: [
    {
      period: "Pendidikan",
      title: "Magister Manajemen",
      place: "Universitas Semarang",
      description:
        "Mendalami manajemen, kepemimpinan, dan cara mengelola organisasi secara strategis.",
      marker: "01",
    },
    {
      period: "Pengembangan Keahlian",
      title: "Fullstack Web Development",
      place: "Bootcamp Harisenin.com",
      description:
        "Mempelajari pengembangan aplikasi web dari antarmuka hingga backend, API, dan database.",
      marker: "02",
    },
    {
      period: "Pengalaman Profesional",
      title: "Kepemimpinan Operasional Maritim & SHE",
      place: "Operasional dan keselamatan kerja",
      description:
        "Menerapkan disiplin operasional, koordinasi tim, dan budaya keselamatan—pengalaman yang kini membentuk cara saya merancang solusi digital.",
      marker: "03",
    },
  ],
  contact: {
    email: "",
    githubUrl: "https://github.com/romariokatagame-maker",
    linkedinUrl: "",
  },
};

export const navigation = [
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pendidikan", href: "#perjalanan" },
  { label: "Kontak", href: "#kontak" },
];
