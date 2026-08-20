import React from 'react';
import { NavPage, ServiceItem, NewsArticle } from '../types';
import { HOSPITAL_INFO, FEATURED_SERVICES, NEWS_ARTICLES, DOCTORS_DATA } from '../data/mockData';
import { 
  PhoneCall, 
  CalendarCheck, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Building2, 
  Award, 
  HeartHandshake, 
  Activity, 
  FileText, 
  Stethoscope, 
  Syringe, 
  Microscope,
  BedDouble,
  ChevronRight,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface BerandaViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onSelectService?: (serviceId: string) => void;
  onSelectNews?: (article: NewsArticle) => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({
  onNavigate,
  onOpenAppointment,
  onOpenEmergency,
  onSelectService,
  onSelectNews,
}) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[540px] lg:min-h-[580px] bg-slate-900 overflow-hidden flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOSPITAL_INFO.exteriorHeroUrl}
            alt="Gedung RSUD Ch. Boesoerie Ternate"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Dual tone gradient overlay for perfect readability matching mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031338]/95 via-[#031338]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-sky-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Pusat Rujukan Utama Maluku Utara</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Pelayanan Kesehatan Terpercaya, Modern, dan Berkeadilan
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              RSUD Ch. Boesoerie menghadirkan layanan medis paripurna dengan dokter spesialis berpengalaman, teknologi diagnostik modern, dan sistem pendaftaran terintegrasi.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenAppointment}
                className="flex items-center justify-center gap-2 bg-[#00288e] hover:bg-[#001c66] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-300" />
                <span>Buat Janji Temu Dokter</span>
              </button>

              <button
                onClick={onOpenEmergency}
                className="flex items-center justify-center gap-2 bg-red-600/90 hover:bg-red-600 text-white px-5 py-3.5 rounded-xl font-semibold text-sm backdrop-blur-md border border-red-500/30 transition-all cursor-pointer hover:bg-red-700"
              >
                <PhoneCall className="w-4 h-4 animate-pulse text-amber-300" />
                <span>Panggilan Darurat IGD</span>
              </button>
            </div>

            {/* Quality indicators */}
            <div className="pt-4 flex items-center flex-wrap gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Akreditasi Paripurna (KARS)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Melayani Pasien BPJS Kesehatan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fasilitas Terintegrasi 24 Jam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING ACTION CARDS (3 Cards matching Image 1) */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: IGD 24 Jam */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-slate-900 text-lg">IGD 24 Jam</h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-red-700">Siaga</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                Penanganan medis kegawatdaruratan cepat dan terpadu oleh dokter jaga dan perawat terlatih setiap saat.
              </p>
            </div>
            <button
              onClick={onOpenEmergency}
              className="w-full flex items-center justify-between py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-red-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              <span>Hubungi Hotline IGD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Poliklinik Rawat Jalan */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#00288e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-slate-900 text-lg">Poliklinik Spesialis</h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-[#00288e]">Lengkap</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                Layanan konsultasi dokter spesialis dan subspesialis dari Bedah, Penyakit Dalam, Anak, Jantung, hingga Saraf.
              </p>
            </div>
            <button
              onClick={() => onNavigate('jadwal-dokter')}
              className="w-full flex items-center justify-between py-2.5 px-4 bg-[#eef2ff] hover:bg-[#dde1ff] text-[#00288e] font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              <span>Lihat Jadwal Dokter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Laboratorium & Radiologi */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Microscope className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-slate-900 text-lg">Laboratorium & Diagnostik</h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">24 Jam</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                Pemeriksaan laboratorium patologi klinik, PCR, CT-Scan 128 Slice, serta MRI 1.5 Tesla dengan hasil terintegrasi digital.
              </p>
            </div>
            <button
              onClick={() => onNavigate('fasilitas')}
              className="w-full flex items-center justify-between py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              <span>Fasilitas & Ketersediaan Bed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN UNGGULAN SECTION (Replicating Image 1 layout) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
            Standar Medis Paripurna
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Layanan Medis Unggulan
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Komitmen kami dalam menghadirkan teknologi kedokteran terkini dan tenaga medis spesialis terdepan untuk masyarakat Maluku Utara.
          </p>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate('layanan')}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-semibold bg-[#00288e]/90 text-white px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Unggulan
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#00288e] transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00288e]">
                  <span>Pelajari Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('layanan')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-[#00288e] hover:border-[#00288e] text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
          >
            <span>Lihat Seluruh 20+ Layanan & Poliklinik Spesialis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. STATISTICS BANNER (Deep Royal Blue matching Image 1) */}
      <section className="bg-[#00288e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/15">
            <div className="space-y-1.5 p-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">45+</p>
              <p className="text-xs sm:text-sm text-sky-200 font-medium">Dokter Spesialis & Subspesialis</p>
            </div>
            <div className="space-y-1.5 p-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">300+</p>
              <p className="text-xs sm:text-sm text-sky-200 font-medium">Kapasitas Tempat Tidur</p>
            </div>
            <div className="space-y-1.5 p-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm text-sky-200 font-medium">Layanan Gawat Darurat & Bedah</p>
            </div>
            <div className="space-y-1.5 p-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">98.5%</p>
              <p className="text-xs sm:text-sm text-sky-200 font-medium">Tingkat Kepuasan Pasien</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOCTORS SPOTLIGHT (Quick Preview) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
                Tim Medis Ahli
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Dokter Spesialis Kami
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Jadwal praktek dokter spesialis terpercaya yang siap melayani kebutuhan konsultasi kesehatan Anda.
              </p>
            </div>
            <button
              onClick={() => onNavigate('jadwal-dokter')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00288e] hover:text-[#001c66] self-start sm:self-auto cursor-pointer"
            >
              <span>Lihat Semua Jadwal Lengkap</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS_DATA.slice(0, 4).map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                    <img
                      src={doc.photoUrl}
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        doc.isAvailableToday ? 'bg-emerald-500 text-white' : 'bg-slate-700/80 text-white'
                      }`}>
                        {doc.isAvailableToday ? 'Tersedia Hari Ini' : 'Sesuai Jadwal'}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#00288e] transition-colors line-clamp-1">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#00288e] font-semibold mt-0.5">
                    Spesialis {doc.specialty}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {doc.clinicName}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{doc.daysAvailable.join(', ')}</span>
                  </div>
                  <button
                    onClick={onOpenAppointment}
                    className="px-2.5 py-1 bg-[#00288e] hover:bg-[#001c66] text-white text-[11px] font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Janji Temu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BERITA & INFORMASI TERKINI (Matching Image 1) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
              Kabar & Pengumuman
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Berita & Informasi Terkini
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Perkembangan fasilitas, kegiatan sosial, dan edukasi kesehatan dari RSUD Ch. Boesoerie.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectNews && onSelectNews(article)}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-xs ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#00288e] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00288e]">
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="bg-gradient-to-r from-[#00288e] to-[#0d1c2e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 backdrop-blur-md">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Pendaftaran Rawat Jalan Kini Lebih Cepat & Mudah
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                Hindari antrean panjang di loket. Daftarkan diri Anda atau keluarga secara online, pilih dokter dan jadwal, serta dapatkan nomor antrean instan dengan kode QR.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 bg-white text-[#00288e] hover:bg-slate-100 font-bold text-sm rounded-xl shadow-lg transition-all text-center cursor-pointer"
              >
                Daftar Online Sekarang
              </button>
              <button
                onClick={() => onNavigate('kontak')}
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm rounded-xl transition-all text-center cursor-pointer"
              >
                Panduan & Lokasi RSUD
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
