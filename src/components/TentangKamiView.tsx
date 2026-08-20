import React from 'react';
import { NavPage } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Heart, 
  Users, 
  Building2, 
  CheckCircle2, 
  CalendarCheck,
  PhoneCall,
  Sparkles,
  MapPin
} from 'lucide-react';

interface TentangKamiViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const TentangKamiView: React.FC<TentangKamiViewProps> = ({
  onNavigate,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  return (
    <div className="w-full bg-[#f7f9fb] min-h-screen pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={HOSPITAL_INFO.exteriorHeroUrl}
            alt="Profil RSUD Ch. Boesoerie"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c66] via-[#00288e]/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-sky-200 px-3 py-1 rounded-full backdrop-blur-xs">
              Profil Rumah Sakit
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Tentang RSUD Ch. Boesoerie
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 max-w-2xl leading-relaxed">
              Mengenal lebih dekat rumah sakit rujukan utama Provinsi Maluku Utara yang berdedikasi memberikan pelayanan kesehatan berkualitas dengan standar akreditasi paripurna.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & ACCREDITATION BADGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Akreditasi Paripurna KARS Bintang Lima</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Pusat Pelayanan & Pendidikan Medis Terkemuka
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              RSUD Dr. Ch. Boesoerie Ternate merupakan Rumah Sakit Umum Daerah Kelas B Pendidikan milik Pemerintah Provinsi Maluku Utara. Berlokasi strategis di Kota Ternate, rumah sakit ini berfungsi sebagai episentrum rujukan dari 10 kabupaten/kota di Maluku Utara, menyediakan lebih dari 20 poliklinik spesialis dan fasilitas bedah mutakhir.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={HOSPITAL_INFO.logoUrl}
                alt="Logo RSUD"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain bg-white rounded-lg p-1 border border-slate-200"
              />
              <div>
                <p className="font-bold text-slate-900 text-sm">RSUD Ch. Boesoerie</p>
                <p className="text-xs text-slate-500">Provinsi Maluku Utara</p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200/80 space-y-1.5 text-xs text-slate-600">
              <p><strong className="text-slate-800">Kelas:</strong> Tipe B Pendidikan</p>
              <p><strong className="text-slate-800">Kapasitas:</strong> 300+ Tempat Tidur</p>
              <p><strong className="text-slate-800">Status BLUD:</strong> Penuh</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-3xl p-8 shadow-xs border border-slate-100 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#eef2ff] text-[#00288e] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Visi Kami</h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                "Menjadi Rumah Sakit Rujukan Terdepan, Modern, dan Berdaya Saing Tinggi yang Mengedepankan Pelayanan Paripurna serta Pusat Pendidikan Kedokteran Unggulan di Kawasan Indonesia Timur."
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 font-medium">
              Fokus Utama: Keselamatan Pasien, Kecepatan Layanan, dan Modernisasi Medis
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-3xl p-8 shadow-xs border border-slate-100 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Misi Kami</h3>
            <ul className="space-y-3 pt-1">
              {[
                'Menyelenggarakan pelayanan kesehatan yang bermutu, terstandarisasi, aman, dan berpusat pada kepuasan pasien.',
                'Mengembangkan sumber daya manusia kesehatan yang kompeten, beretika, dan profesional.',
                'Menyediakan sarana, prasarana, serta peralatan diagnostik dan terapi kedokteran yang mutakhir.',
                'Menjadi wahana pendidikan kedokteran dan penelitian kesehatan yang berintegritas.',
              ].map((misi, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. NILAI BUDAYA "PRESISI" */}
      <section className="bg-white py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
              Nilai Budaya Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Tata Nilai "P-R-E-S-I-S-I"
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Prinsip yang memandu setiap dokter, perawat, dan tenaga medis dalam melayani pasien setiap hari.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { letter: 'P', title: 'Profesional', desc: 'Bekerja sesuai kompetensi dan kode etik kedokteran.' },
              { letter: 'R', title: 'Responsif', desc: 'Cepat dan tanggap dalam merespon kebutuhan pasien.' },
              { letter: 'E', title: 'Empati', desc: 'Melayani dengan ketulusan hati dan kepedulian tinggi.' },
              { letter: 'S', title: 'Sinergi', desc: 'Kolaborasi antardisiplin demi keselamatan pasien.' },
              { letter: 'I', title: 'Inovatif', desc: 'Terus mengadopsi teknologi kedokteran terkini.' },
              { letter: 'S', title: 'Santun', desc: 'Menjunjung tinggi etika keramahan dan budaya lokal.' },
            ].map((val, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#00288e] text-white font-extrabold text-lg flex items-center justify-center mx-auto">
                  {val.letter}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{val.title}</h4>
                <p className="text-[11px] text-slate-500 leading-tight">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
