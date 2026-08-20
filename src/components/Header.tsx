import React, { useState } from 'react';
import { NavPage, Language } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { 
  PhoneCall, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  CalendarCheck, 
  Search, 
  QrCode, 
  Sparkles,
  BedDouble,
  ShieldCheck,
  Globe
} from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onOpenQueueTracker: () => void;
  onOpenBedModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenAppointment,
  onOpenEmergency,
  onOpenQueueTracker,
  onOpenBedModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: { id: string; en: string } }[] = [
    { id: 'beranda', label: { id: 'Beranda', en: 'Home' } },
    { id: 'layanan', label: { id: 'Layanan', en: 'Services' } },
    { id: 'jadwal-dokter', label: { id: 'Jadwal Dokter', en: 'Doctor Schedule' } },
    { id: 'fasilitas', label: { id: 'Fasilitas & Kamar', en: 'Facilities & Beds' } },
    { id: 'tentang-kami', label: { id: 'Tentang Kami', en: 'About Us' } },
    { id: 'kontak', label: { id: 'Kontak', en: 'Contact' } },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Bar for Emergency & Quick Info */}
      <div className="bg-[#00288e] text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-4 text-slate-100">
            <button 
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-amber-200 transition-colors bg-white/10 px-2 py-0.5 rounded cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse text-amber-300" />
              <span>IGD 24 Jam: {HOSPITAL_INFO.emergencyHotline}</span>
            </button>
            <span className="hidden md:inline-block text-white/40">|</span>
            <div className="hidden md:flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ternate Selatan, Maluku Utara</span>
            </div>
            <span className="hidden lg:inline-block text-white/40">|</span>
            <div className="hidden lg:flex items-center gap-1 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>{HOSPITAL_INFO.accreditation}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBedModal}
              className="flex items-center gap-1 text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-all cursor-pointer"
              title="Cek Ketersediaan Tempat Tidur Real-time"
            >
              <BedDouble className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden xs:inline">Ketersediaan Bed</span>
            </button>
            <button
              onClick={onOpenQueueTracker}
              className="flex items-center gap-1 text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-all cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-sky-300" />
              <span>Cek Antrean</span>
            </button>
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1 text-xs bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded text-white font-medium transition-colors cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Logo and Hospital Branding */}
        <div 
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            src={HOSPITAL_INFO.logoUrl}
            alt="Logo RSUD Ch. Boesoerie"
            referrerPolicy="no-referrer"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg border border-slate-100 p-0.5 shadow-xs transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg sm:text-xl text-[#00288e] tracking-tight leading-tight group-hover:text-[#001c66] transition-colors">
                RSUD Ch. Boesoerie
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Provinsi Maluku Utara
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#00288e] bg-[#eef2ff] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-[#00288e] hover:bg-slate-50'
                }`}
              >
                {item.label[language]}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenAppointment}
            className="flex items-center gap-2 bg-[#00288e] hover:bg-[#001c66] text-white px-4 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-98"
          >
            <CalendarCheck className="w-4 h-4 text-emerald-300" />
            <span>Pendaftaran Online</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAppointment}
            className="p-2 text-[#00288e] bg-indigo-50 rounded-lg sm:hidden"
            title="Pendaftaran Online"
          >
            <CalendarCheck className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#00288e] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'text-[#00288e] bg-indigo-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label[language]}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-[#00288e]"></div>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#00288e] text-white py-3 rounded-xl font-medium text-sm shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 text-emerald-300" />
              <span>Pendaftaran Online & Janji Temu</span>
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQueueTracker();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg"
              >
                <QrCode className="w-4 h-4 text-[#00288e]" />
                <span>Cek Antrean</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBedModal();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg"
              >
                <BedDouble className="w-4 h-4 text-emerald-600" />
                <span>Info Bed</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
