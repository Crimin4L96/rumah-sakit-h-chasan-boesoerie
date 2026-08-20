import React from 'react';
import { NavPage } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Heart,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onOpenBedModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAppointment,
  onOpenEmergency,
  onOpenBedModal,
}) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b172a] text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={HOSPITAL_INFO.logoUrl}
                alt="Logo RSUD Ch. Boesoerie"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-white text-lg tracking-tight">RSUD Ch. Boesoerie</h3>
                <p className="text-xs text-sky-400 font-medium">Provinsi Maluku Utara</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Rumah Sakit Umum Daerah Kelas B Pendidikan & Pusat Rujukan Utama di Provinsi Maluku Utara. Memberikan pelayanan kesehatan komprehensif, modern, dan berkeadilan bagi seluruh lapisan masyarakat.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{HOSPITAL_INFO.accreditation}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Layanan & Akses</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('jadwal-dokter')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#4e7dff]" />
                  <span>Jadwal Dokter Spesialis</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('layanan')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#4e7dff]" />
                  <span>Pusat Bedah Terpadu & Cath Lab</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBedModal}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#4e7dff]" />
                  <span>Ketersediaan Kamar Rawat Inap</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#4e7dff]" />
                  <span>Pendaftaran Online Pasien (BPJS/Umum)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('fasilitas')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#4e7dff]" />
                  <span>Fasilitas Diagnostik & MRI 1.5T</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Jam Operasional</h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>IGD & Ambulans</span>
                </div>
                <p className="text-slate-300 font-bold">24 Jam Setiap Hari Termasuk Libur</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Poliklinik Rawat Jalan</span>
                </div>
                <p className="text-slate-300">Senin – Kamis: 08:00 – 14:00 WIT</p>
                <p className="text-slate-300">Jumat – Sabtu: 08:00 – 12:00 WIT</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Kontak & Alamat</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">{HOSPITAL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>WhatsApp: {HOSPITAL_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </li>
            </ul>

            <div className="pt-1">
              <button
                onClick={onOpenEmergency}
                className="w-full py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 animate-bounce" />
                <span>Panggilan Darurat IGD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RSUD Ch. Boesoerie Provinsi Maluku Utara. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNav('tentang-kami')} 
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Tentang RSUD
            </button>
            <button 
              onClick={() => handleNav('kontak')} 
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Lokasi & Akses
            </button>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              Pelayanan Sepenuh Hati <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
