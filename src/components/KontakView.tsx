import React, { useState } from 'react';
import { HOSPITAL_INFO } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Navigation, 
  Plane, 
  Ship, 
  Bus,
  AlertCircle
} from 'lucide-react';

interface KontakViewProps {
  onOpenEmergency: () => void;
}

export const KontakView: React.FC<KontakViewProps> = ({ onOpenEmergency }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'informasi',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#f7f9fb] min-h-screen pb-20">
      {/* 1. HERO BANNER (Matching Image 10) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={HOSPITAL_INFO.exteriorHeroUrl}
            alt="Kontak RSUD Ch. Boesoerie"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c66] via-[#00288e]/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-sky-200 px-3 py-1 rounded-full backdrop-blur-xs">
              Layanan Pelanggan & Informasi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Hubungi Kami
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 max-w-2xl leading-relaxed">
              Kami siap melayani kebutuhan informasi, pertanyaan jadwal dokter, kritik, dan saran untuk peningkatan mutu pelayanan rumah sakit.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT BENTO & INTERACTIVE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Emergency */}
            <div className="bg-red-600 text-white rounded-3xl p-6 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full">
                  Layanan Gawat Darurat
                </span>
                <PhoneCall className="w-5 h-5 animate-bounce text-amber-300" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">IGD & Ambulans 24 Jam</h3>
                <p className="text-2xl font-black text-amber-300 mt-1">
                  {HOSPITAL_INFO.emergencyHotline}
                </p>
                <p className="text-xs text-red-100 mt-1 leading-relaxed">
                  Siaga 24 jam setiap hari tanpa libur untuk penanganan medis darurat.
                </p>
              </div>
              <button
                onClick={onOpenEmergency}
                className="w-full py-2.5 bg-white text-red-600 font-bold text-xs rounded-xl shadow-xs hover:bg-slate-100 transition-colors cursor-pointer text-center"
              >
                Panggilan Darurat Sekarang
              </button>
            </div>

            {/* Card 2: Contact Info */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 space-y-5">
              <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
                Informasi Kontak & Lokasi
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#00288e] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Alamat Rumah Sakit:</p>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">{HOSPITAL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Telepon Sentral / Operator:</p>
                    <p className="text-slate-500 mt-0.5">{HOSPITAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">WhatsApp Informasi & Pengaduan:</p>
                    <p className="text-slate-500 mt-0.5">{HOSPITAL_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Email Resmi:</p>
                    <p className="text-slate-500 mt-0.5">{HOSPITAL_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Feedback & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-md border border-slate-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Pesan Berhasil Terkirim!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih telah menghubungi RSUD Ch. Boesoerie. Petugas layanan pelanggan kami akan menindaklanjuti pesan Anda dalam kurun waktu 1x24 jam kerja.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', category: 'informasi', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#00288e] text-white text-xs font-bold rounded-xl"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Formulir Pesan & Saran</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Silakan isi data berikut untuk pertanyaan umum, informasi rawat inap, atau pengaduan layanan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama lengkap"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nomor HP / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 08123456789"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Alamat Email (Opsional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Kategori Pesan
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50 cursor-pointer"
                    >
                      <option value="informasi">Informasi Jadwal & Layanan</option>
                      <option value="rawat-inap">Pertanyaan Kamar Rawat Inap</option>
                      <option value="bpjs">Informasi Klaim & Alur BPJS</option>
                      <option value="pengaduan">Pengaduan Layanan / Keluhan</option>
                      <option value="saran">Saran & Apresiasi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Isi Pesan / Pertanyaan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan, pertanyaan, atau detail pengaduan Anda di sini..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#00288e] hover:bg-[#001c66] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan Sekarang'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION & ACCESSIBILITY GUIDE (Matching Image 10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
              Peta Lokasi & Transportasi
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
              Petunjuk Menuju RSUD Ch. Boesoerie
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Rumah sakit berlokasi di Tanah Tinggi, Kota Ternate Selatan, mudah dijangkau dari berbagai penjuru pulau.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Map visual card */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative h-72 sm:h-80">
              <img
                src={HOSPITAL_INFO.mapViewUrl}
                alt="Peta Lokasi RSUD Ch. Boesoerie Ternate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-xs">RSUD Ch. Boesoerie Ternate</p>
                  <p className="text-[11px] text-slate-500">Jl. Tanah Tinggi No. 50, Kota Ternate Selatan</p>
                </div>
                <a
                  href="https://maps.google.com/?q=RSUD+Ch+Boesoerie+Ternate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#00288e] text-white text-[11px] font-bold rounded-lg shrink-0 flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Buka Google Maps</span>
                </a>
              </div>
            </div>

            {/* Transport directions */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs">Dari Bandara Sultan Babullah</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    ± 20 menit perjalanan (9.5 km) menggunakan taksi bandara atau transportasi online menuju Tanah Tinggi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs">Dari Pelabuhan Ahmad Yani</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    ± 10 menit perjalanan (3.8 km) ke arah selatan pulau Ternate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Bus className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs">Angkutan Kota (Mikrolet)</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Angkot trayek Terminal Gamalama – Bastiong / Tanah Tinggi berhenti tepat di depan gerbang utama RSUD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
