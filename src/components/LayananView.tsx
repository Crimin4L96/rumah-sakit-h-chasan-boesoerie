import React, { useState } from 'react';
import { NavPage, ServiceItem } from '../types';
import { HOSPITAL_INFO, FEATURED_SERVICES, LAYANAN_CATEGORY_CARDS, POLYCLINICS } from '../data/mockData';
import { 
  Heart, 
  Activity, 
  Sparkles, 
  Stethoscope, 
  Microscope, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  CalendarCheck,
  Building2,
  PhoneCall,
  Pill,
  Syringe,
  Droplets,
  Layers,
  Baby,
  Eye,
  Smile,
  Wind,
  HeartPulse
} from 'lucide-react';

interface LayananViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onOpenBedModal: () => void;
}

export const LayananView: React.FC<LayananViewProps> = ({
  onNavigate,
  onOpenAppointment,
  onOpenEmergency,
  onOpenBedModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getPoliIcon = (iconName: string) => {
    switch (iconName) {
      case 'neurology':
        return <Activity className="w-6 h-6 text-[#00288e]" />;
      case 'orthopedics':
        return <ShieldCheck className="w-6 h-6 text-[#00288e]" />;
      case 'ophthalmology':
        return <Eye className="w-6 h-6 text-[#00288e]" />;
      case 'dentistry':
        return <Smile className="w-6 h-6 text-[#00288e]" />;
      case 'pulmonology':
        return <Wind className="w-6 h-6 text-[#00288e]" />;
      case 'gastroenterology':
        return <Stethoscope className="w-6 h-6 text-[#00288e]" />;
      case 'pediatrics':
        return <Baby className="w-6 h-6 text-[#00288e]" />;
      case 'pregnant_woman':
        return <HeartPulse className="w-6 h-6 text-[#00288e]" />;
      default:
        return <Stethoscope className="w-6 h-6 text-[#00288e]" />;
    }
  };

  return (
    <div className="w-full bg-[#f7f9fb] min-h-screen pb-20">
      {/* 1. HERO BANNER (Matching Image 3) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={HOSPITAL_INFO.serviceBannerUrl}
            alt="Layanan Medis RSUD Ch. Boesoerie"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c66] via-[#00288e]/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-sky-200 px-3 py-1 rounded-full backdrop-blur-xs">
              Pusat Pelayanan Terpadu
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Layanan & Poliklinik Spesialis
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 max-w-2xl leading-relaxed">
              Komitmen kami dalam memberikan pelayanan kesehatan terbaik didukung oleh fasilitas diagnostik modern, ruang operasi berstandar internasional, dan tim dokter subspesialis terkemuka.
            </p>

            <div className="mt-6 flex items-center flex-wrap gap-3">
              <button
                onClick={onOpenAppointment}
                className="px-5 py-2.5 bg-white text-[#00288e] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-600" />
                <span>Pendaftaran Online Pasien</span>
              </button>
              <button
                onClick={() => onNavigate('jadwal-dokter')}
                className="px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Jadwal Dokter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 SPECIALTY HIGHLIGHT CARDS (Image 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LAYANAN_CATEGORY_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color} font-bold`}>
                    {card.id === 'kardiologi' && <HeartPulse className="w-6 h-6" />}
                    {card.id === 'hemodialisa' && <Droplets className="w-6 h-6" />}
                    {card.id === 'mcu' && <ShieldCheck className="w-6 h-6" />}
                    {card.id === 'ibu-anak-layanan' && <Baby className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-[#00288e] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00288e]">
                <span>Konsultasikan</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PUSAT BEDAH TERPADU & LAYANAN UNGGULAN EXPANDED */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
            Unggulan Rujukan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Instalasi & Pusat Layanan Unggulan
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Fasilitas medis dengan kualifikasi rujukan regional yang didukung oleh teknologi mutakhir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={srv.imageUrl}
                  alt={srv.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold bg-[#00288e] text-white px-3 py-1 rounded-full">
                    Layanan Rujukan Utama
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1.5">{srv.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Keunggulan & Fasilitas:
                    </span>
                    <ul className="space-y-1.5">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  {srv.headDoctor && (
                    <div className="text-xs text-slate-500">
                      <span className="block text-[10px] text-slate-400">Kepala Instalasi:</span>
                      <span className="font-semibold text-slate-800">{srv.headDoctor}</span>
                    </div>
                  )}
                  <button
                    onClick={onOpenAppointment}
                    className="px-4 py-2 bg-[#00288e] hover:bg-[#001c66] text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    Daftar Rawat Jalan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. POLIKLINIK SPESIALIS (8 Poli Cards matching Image 3) */}
      <section className="py-16 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
                Rawat Jalan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Poliklinik Spesialis
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Klinik rawat jalan kami beroperasi dari Senin hingga Sabtu dengan sistem antrean terkomputerisasi.
              </p>
            </div>
            <button
              onClick={() => onNavigate('jadwal-dokter')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00288e] hover:text-[#001c66] self-start sm:self-auto cursor-pointer"
            >
              <span>Lihat Jadwal Seluruh Dokter</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {POLYCLINICS.map((poli) => (
              <div
                key={poli.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#d5e3fc] border border-slate-200/60 flex items-center justify-center mb-3.5 transition-colors">
                    {getPoliIcon(poli.iconName)}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#00288e] transition-colors">
                    {poli.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {poli.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-slate-200/60 space-y-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>Lokasi:</span>
                    <span className="font-bold text-slate-700">{poli.floor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Jam Buka:</span>
                    <span className="font-bold text-slate-700">{poli.operatingHours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FASILITAS DIAGNOSTIK & PENUNJANG (Numbered List + MRI Image matching Image 3) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
            Penunjang Diagnostik
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Fasilitas Diagnostik & Penunjang Medis
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Didukung oleh peralatan medis modern berstandar internasional untuk penegakan diagnosis yang akurat dan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: MRI Showcase Illustration Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <div className="relative h-72 overflow-hidden bg-slate-900">
              <img
                src={HOSPITAL_INFO.mriDiagnosticUrl}
                alt="MRI Diagnostic Center RSUD Ch. Boesoerie"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold bg-emerald-500 text-white px-2.5 py-0.5 rounded-full">
                  Standar Akurasi Tinggi
                </span>
                <h4 className="font-bold text-base mt-1">Magnetic Resonance Imaging (MRI 1.5T)</h4>
              </div>
            </div>
            <div className="p-5 space-y-2">
              <p className="text-xs text-slate-600 leading-relaxed">
                Pemindaian menyeluruh dengan perangkat MRI resolusi tinggi untuk mendeteksi gangguan saraf, serebrovaskular, cedera ligamen, dan kelainan organ dalam secara presisi.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#00288e]">
                <span>Integrasi PACS Digital</span>
                <span className="text-slate-400">•</span>
                <span>Radiolog Tersertifikasi</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Numbered Feature Items */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eef2ff] text-[#00288e] font-extrabold text-base flex items-center justify-center shrink-0">
                01
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Radiologi Digital & CT-Scan 128 Slice
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pencitraan tomografi berkecepatan tinggi dan dosis radiasi minimal, efektif untuk deteksi stroke, politrauma, dan rekonstruksi 3D pembuluh darah.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-extrabold text-base flex items-center justify-center shrink-0">
                02
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Laboratorium Patologi Klinik & Anatomi 24 Jam
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pemeriksaan hematologi, kimia darah, imunologi, PCR molekuler, dan analisis histopatologi dengan sistem otomatisasi terkontrol mutunya.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 font-extrabold text-base flex items-center justify-center shrink-0">
                03
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Instalasi Farmasi & Apotek Terpadu
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pelayanan obat rawat jalan dan rawat inap 24 jam dengan double check verifikasi farmasi klinis dan konsultasi penggunaan obat.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 font-extrabold text-base flex items-center justify-center shrink-0">
                04
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Bank Darah Rumah Sakit (BDRS)
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Penyimpanan komponen darah steril dengan standar suhu termonitor untuk menjamin ketersediaan darah bagi operasi, transfusi, dan gawat darurat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        <div className="bg-[#00288e] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Siap Mendapatkan Layanan Terbaik?</h3>
            <p className="text-sky-200 text-xs sm:text-sm max-w-xl">
              Buat janji temu dengan dokter spesialis pilihan Anda atau hubungi hotline informasi kami untuk konsultasi awal.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3 bg-white text-[#00288e] font-bold text-xs rounded-xl shadow-md hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Daftar Sekarang
            </button>
            <button
              onClick={() => onNavigate('kontak')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
