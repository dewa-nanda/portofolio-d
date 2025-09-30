import MainContent from "@/components/ui/About/MainContent";
import ProfesionalExperianceContent from "@/components/ui/About/ProfesionalExperianceContent";
import { IconType } from "react-icons";
import { FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiTensorflow } from "react-icons/si";
import { TbBrandNuxt } from "react-icons/tb";

type Content = {
  id: string;
  label: string;
  component: React.ComponentType<any>;
};

type ProfesionalExperiance = {
  year: string;
  job: {
    title: string;
    role: string;
    date: string;
    task: string[];
    result: {
      title: string;
      date: string;
      task: string[];
      stack: {
        title: string;
        icon: {
          name: IconType;
          size: number;
          style?: string;
        };
      }[];
    }[];
  }[];
};

export default class AboutData {
  static content(): Content[] {
    return [
      { id: "about", label: "About me", component: MainContent },
      {
        id: "profesionalExperiance",
        label: "Professional Experience",
        component: ProfesionalExperianceContent,
      },
    ];
  }

  static profesionalExperianceData(): ProfesionalExperiance[] {
    return [
      {
        year: "2025",
        job: [
          {
            title: "GeekGarden",
            role: "Front-end Web Developer",
            date: "Nov 2024 - Feb 2026",
            task: [
              "Berkolaborasi dengan tim developer dalam mengembangkan dan meningkatkan fitur website sesuai kebutuhan bisnis.",
              "Melakukan maintenance website secara rutin untuk memastikan performa, keamanan, dan stabilitas tetap terjaga.",
              "Berhasil menyelesaikan setiap sprint dalam timeline ketat dengan Agile/Scrum, memastikan project selesai tepat waktu tanpa mengurangi kualitas.",
              "Berkontribusi dalam penerapan best practice front-end development agar kode lebih efisien dan mudah dipelihara.",
            ],
            result: [
              {
                title: "Enterprise Resource Planning",
                date: "Augst 2025 - Nov 2025",
                task: [
                  "Berperan dalam pengembangan modul ERP berbasis web untuk mendukung proses bisnis inti organisasi.",
                  "Membuat antarmuka interaktif untuk manajemen inventori, keuangan, dan sumber daya manusia.",
                  "Mengoptimalkan integrasi antar-modul agar data dari berbagai divisi tetap sinkron dan real-time.",
                  "Berkolaborasi dengan tim backend dalam implementasi API untuk transaksi dan laporan.",
                  "Menjamin kualitas antarmuka melalui testing dan perbaikan bug sebelum deployment.",
                ],
                stack: [
                  {
                    title: "react",
                    icon: {
                      name: FaReact,
                      size: 24,
                      style: "text-[#00d8ff]",
                    },
                  },
                  {
                    title: "next",
                    icon: {
                      name: SiNextdotjs,
                      size: 28,
                    },
                  },
                ],
              },
              {
                title: "Procurement",
                date: "March 2025 - June 2025",
                task: [
                  "Mengembangkan modul procurement untuk mendukung proses pengadaan barang/jasa secara digital.",
                  "Membuat fitur approval workflow (pengajuan, verifikasi, persetujuan) agar proses lebih transparan.",
                  "Menyusun halaman manajemen vendor dan tracking status pengadaan.",
                  "Berkoordinasi dengan tim backend untuk integrasi data transaksi dan pelaporan.",
                ],
                stack: [
                  {
                    title: "vue",
                    icon: {
                      name: FaVuejs,
                      size: 34,
                      style: "text-[#6fb487]",
                    },
                  },
                  {
                    title: "nuxt",
                    icon: {
                      name: TbBrandNuxt,
                      size: 38,
                      style: "text-[#6fb487]",
                    },
                  },
                ],
              },
              {
                title: "Sistem Informasi Manajemen",
                date: "January 2025 - March 2025",
                task: [
                  "Membangun dan mengembangkan antarmuka pengguna berbasis web dengan Vue dan Nuxt.",
                  "Mengintegrasikan komponen UI dengan API backend untuk menampilkan data secara real-time.",
                  "Berkolaborasi dalam tim kecil dengan fokus pada: pengembangan fitur dashboard, laporan, absensi, dan manajemen data",
                  "Melakukan optimasi performa front-end agar sistem tetap responsif dan user-friendly.",
                ],
                stack: [
                  {
                    title: "vue",
                    icon: {
                      name: FaVuejs,
                      size: 34,
                      style: "text-[#6fb487]",
                    },
                  },
                  {
                    title: "nuxt",
                    icon: {
                      name: TbBrandNuxt,
                      size: 38,
                      style: "text-[#6fb487]",
                    },
                  },
                ],
              },
              {
                title: "Performatrix - Human Resource Information System",
                date: "January 2025 - now",
                task: [
                  "Mengembangkan versi lanjutan HRIS dengan penambahan beberapa fitur sesuai kebutuhan client.",
                  "Melakukan perbaikan bug berdasarkan laporan client untuk meningkatkan stabilitas sistem.",
                  "Memastikan UI tetap konsisten, responsif, dan user-friendly setelah update.",
                  "Memberikan support teknis pasca-deployment untuk menjaga performa aplikasi.",
                ],
                stack: [
                  {
                    title: "react",
                    icon: {
                      name: FaReact,
                      size: 24,
                      style: "text-[#00d8ff]",
                    },
                  },
                  {
                    title: "next",
                    icon: {
                      name: SiNextdotjs,
                      size: 28,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        year: "2024",
        job: [
          {
            title: "GeekGarden",
            role: "Front-end Web Developer Vue.js",
            date: "Agu 2024 - Nov 2024",
            task: [
              "Bertanggung jawab melakukan redesign website job portal milik GeekGarden agar lebih modern, responsif, dan user-friendly.",
              "Mengimplementasikan antarmuka baru menggunakan Vue.js sesuai desain UI/UX yang telah disepakati.",
              "Berkolaborasi dengan tim backend untuk memastikan integrasi data dan fitur berjalan lancar.",
              "Melakukan bug fixing serta pengujian tampilan di berbagai perangkat agar pengalaman pengguna konsisten.",
              "Mendapat pengalaman praktis dalam pengembangan aplikasi berbasis tim dengan workflow Git dan metode agile.",
            ],
            result: [
              {
                title: "JoinGeek - Job Portal",
                date: "Agu 2024 - Nov 2024",
                task: [
                  "Melakukan redesign website job portal milik GeekGarden agar lebih modern, responsif, dan user-friendly.",
                  "Mengimplementasikan tampilan baru berdasarkan desain UI/UX yang telah ditentukan.",
                  "Berkoordinasi dengan tim backend untuk memastikan integrasi fitur dan API berjalan lancar.",
                  "Menangani bug fixing serta pengujian tampilan di berbagai perangkat (desktop & mobile).",
                  "Berkontribusi dalam proses pengembangan berbasis tim menggunakan Git dan metode agile.",
                ],
                stack: [
                  {
                    title: "vue",
                    icon: {
                      name: FaVuejs,
                      size: 34,
                      style: "text-[#6fb487]",
                    },
                  },
                  {
                    title: "nuxt",
                    icon: {
                      name: TbBrandNuxt,
                      size: 38,
                      style: "text-[#6fb487]",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        year: "2023",
        job: [
          {
            title: "Bangkit Academy - Studi Independent",
            role: "Machine Learning Cohort",
            date: "Feb 2023 - Aug 2023",
            task: [
              "Mempelajari dasar Machine Learning & Deep Learning menggunakan Python dan TensorFlow.",
              "Implementasi Computer Vision dan NLP pada studi kasus nyata.",
              "Mengerjakan capstone project lintas disiplin bersama peserta dari Cloud & Mobile Development.",
              "Pengembangan soft skills: komunikasi, kolaborasi tim, leadership, dan problem-solving.",
            ],
            result: [
              {
                title: "Tourista Apps",
                date: "Mei 2023 - Aug 2023",
                task: [
                  "Mengembangkan aplikasi Machine Learning dan mengunggah hasil implementasi ke GitHub.",
                  "Membangun model klasifikasi menggunakan Python, TensorFlow, dan scikit-learn dengan dataset open-source.",
                  "Melakukan data preprocessing (cleaning, normalisasi, feature extraction) sebelum digunakan pada model.",
                  "Melatih dan mengevaluasi model menggunakan metrik akurasi, precision, recall, dan F1-score.",
                  "Menerapkan teknik deep learning untuk meningkatkan performa model.",
                  "Berkolaborasi dalam capstone project lintas disiplin dengan integrasi Machine Learning, Cloud, dan Mobile Development.",
                ],
                stack: [
                  {
                    title: "python",
                    icon: {
                      name: FaPython,
                      size: 28,
                      style: "text-[#3a719c]",
                    },
                  },
                  {
                    title: "tensorflow",
                    icon: {
                      name: SiTensorflow,
                      size: 28,
                      style: "text-[#ffb508]",
                    },
                  },
                ],
              },
            ],
          },
          {
            title: "Dicoding Indonesia - Studi Independent",
            role: "Front End Web and Back End Web Developer Cohort",
            date: "Aug 2022 - Jan 2023",
            task: [
              "Mempelajari dan mengimplementasikan fundamental frontend development: HTML, CSS, JavaScript.",
              "Membangun UI responsif dan aksesibel dengan pendekatan modular (component-based).",
              "Mengerjakan proyek frontend web apps menggunakan modern best practices (clean code, reusable component, semantic HTML).",
              "Menguasai backend development dengan Node.js: membuat RESTful API, mengelola request/response, serta middleware.",
              "Mengintegrasikan database SQL & NoSQL dalam aplikasi backend untuk manajemen data.",
              "Mengembangkan full-stack web applications dari awal (end-to-end).",
              "Menyelesaikan beberapa proyek praktik (hands-on project) dengan standar industri.",
              "Lulus sertifikasi resmi Dicoding untuk Web Development (Frontend & Backend).",
            ],
            result: [
              {
                title: "The Parentings",
                date: "Oct 2023 - Jan 2023",
                task: [
                  "Melakukan slicing design dari UI/UX ke dalam kode menggunakan HTML, CSS, dan JavaScript",
                  "Mengintegrasikan RESTful API dari backend ke antarmuka pengguna sehingga data dapat ditampilkan secara dinamis.",
                  "Mengimplementasikan komponen frontend modular dan reusable untuk meningkatkan maintainability aplikasi.",
                  "Memastikan tampilan aplikasi responsif dan user-friendly di berbagai perangkat.",
                  "Berkolaborasi erat dengan tim Backend Developer dan UI/UX Designer dalam agile workflow (task management & code review).",
                ],
                stack: [
                  {
                    title: "react",
                    icon: {
                      name: FaReact,
                      size: 24,
                      style: "text-[#00d8ff]",
                    },
                  },
                  {
                    title: "next",
                    icon: {
                      name: SiNextdotjs,
                      size: 28,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }
}
