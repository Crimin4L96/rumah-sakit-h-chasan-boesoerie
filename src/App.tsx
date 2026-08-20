import React, { useState } from 'react';
import { NavPage, Language, Doctor, NewsArticle, AppointmentBooking } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BerandaView } from './components/BerandaView';
import { JadwalDokterView } from './components/JadwalDokterView';
import { LayananView } from './components/LayananView';
import { FasilitasView } from './components/FasilitasView';
import { TentangKamiView } from './components/TentangKamiView';
import { KontakView } from './components/KontakView';
import { AppointmentModal } from './components/AppointmentModal';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { EmergencyModal } from './components/EmergencyModal';
import { QueueTrackerModal } from './components/QueueTrackerModal';
import { BedInfoModal } from './components/BedInfoModal';
import { NewsDetailModal } from './components/NewsDetailModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('beranda');
  const [language, setLanguage] = useState<Language>('id');

  // Modal States
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<Doctor | null>(null);
  const [isDoctorDetailOpen, setIsDoctorDetailOpen] = useState(false);
  const [selectedDoctorForDetail, setSelectedDoctorForDetail] = useState<Doctor | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isQueueTrackerOpen, setIsQueueTrackerOpen] = useState(false);
  const [isBedModalOpen, setIsBedModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  // Stored Bookings list for queue tracker
  const [savedBookings, setSavedBookings] = useState<AppointmentBooking[]>([]);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const handleOpenAppointmentWithDoctor = (doctor: Doctor) => {
    setSelectedDoctorForBooking(doctor);
    setIsAppointmentOpen(true);
  };

  const handleOpenDoctorDetail = (doctor: Doctor) => {
    setSelectedDoctorForDetail(doctor);
    setIsDoctorDetailOpen(true);
  };

  const handleSelectNews = (article: NewsArticle) => {
    setSelectedNews(article);
    setIsNewsModalOpen(true);
  };

  const handleBookingSuccess = (booking: AppointmentBooking) => {
    setSavedBookings((prev) => [booking, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-slate-900 selection:bg-[#dde1ff] selection:text-[#00288e]">
      {/* Top Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenAppointment={() => {
          setSelectedDoctorForBooking(null);
          setIsAppointmentOpen(true);
        }}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenQueueTracker={() => setIsQueueTrackerOpen(true)}
        onOpenBedModal={() => setIsBedModalOpen(true)}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1 w-full">
        {currentPage === 'beranda' && (
          <BerandaView
            onNavigate={setCurrentPage}
            onOpenAppointment={() => {
              setSelectedDoctorForBooking(null);
              setIsAppointmentOpen(true);
            }}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            onSelectNews={handleSelectNews}
          />
        )}

        {currentPage === 'jadwal-dokter' && (
          <JadwalDokterView
            onOpenAppointmentWithDoctor={handleOpenAppointmentWithDoctor}
            onOpenDoctorDetail={handleOpenDoctorDetail}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentPage === 'layanan' && (
          <LayananView
            onNavigate={setCurrentPage}
            onOpenAppointment={() => {
              setSelectedDoctorForBooking(null);
              setIsAppointmentOpen(true);
            }}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            onOpenBedModal={() => setIsBedModalOpen(true)}
          />
        )}

        {currentPage === 'fasilitas' && (
          <FasilitasView
            onNavigate={setCurrentPage}
            onOpenAppointment={() => {
              setSelectedDoctorForBooking(null);
              setIsAppointmentOpen(true);
            }}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentPage === 'tentang-kami' && (
          <TentangKamiView
            onNavigate={setCurrentPage}
            onOpenAppointment={() => {
              setSelectedDoctorForBooking(null);
              setIsAppointmentOpen(true);
            }}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentPage === 'kontak' && (
          <KontakView
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}
      </main>

      {/* Bottom Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenAppointment={() => {
          setSelectedDoctorForBooking(null);
          setIsAppointmentOpen(true);
        }}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenBedModal={() => setIsBedModalOpen(true)}
      />

      {/* Floating Emergency Action Button for quick accessibility */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={() => {
            setSelectedDoctorForBooking(null);
            setIsAppointmentOpen(true);
          }}
          className="hidden sm:flex items-center gap-2 bg-[#00288e] hover:bg-[#001c66] text-white px-4 py-3 rounded-full font-bold text-xs shadow-xl border-2 border-white/80 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Daftar Online</span>
        </button>

        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full font-extrabold text-xs shadow-xl border-2 border-white transition-all hover:scale-105 active:scale-95 cursor-pointer animate-pulse"
        >
          <span>IGD 24 Jam</span>
        </button>
      </div>

      {/* Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedDoctor={selectedDoctorForBooking}
        onBookingSuccess={handleBookingSuccess}
      />

      <DoctorDetailModal
        doctor={selectedDoctorForDetail}
        isOpen={isDoctorDetailOpen}
        onClose={() => setIsDoctorDetailOpen(false)}
        onBookAppointment={(doctor) => {
          setIsDoctorDetailOpen(false);
          handleOpenAppointmentWithDoctor(doctor);
        }}
      />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      <QueueTrackerModal
        isOpen={isQueueTrackerOpen}
        onClose={() => setIsQueueTrackerOpen(false)}
        savedBookings={savedBookings}
      />

      <BedInfoModal
        isOpen={isBedModalOpen}
        onClose={() => setIsBedModalOpen(false)}
        onNavigateToFacilities={() => {
          setCurrentPage('fasilitas');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <NewsDetailModal
        article={selectedNews}
        isOpen={isNewsModalOpen}
        onClose={() => setIsNewsModalOpen(false)}
      />
    </div>
  );
}
