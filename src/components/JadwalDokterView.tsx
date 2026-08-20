import React, { useState, useMemo } from 'react';
import { Doctor } from '../types';
import { DOCTORS_DATA, HOSPITAL_INFO } from '../data/mockData';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Info,
  CalendarCheck,
  User,
  PhoneCall
} from 'lucide-react';

interface JadwalDokterViewProps {
  onOpenAppointmentWithDoctor?: (doctor: Doctor) => void;
  onOpenDoctorDetail?: (doctor: Doctor) => void;
  onOpenEmergency: () => void;
}

export const JadwalDokterView: React.FC<JadwalDokterViewProps> = ({
  onOpenAppointmentWithDoctor,
  onOpenDoctorDetail,
  onOpenEmergency,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const specialties = [
    { id: 'all', label: 'Semua Spesialisasi' },
    { id: 'penyakit-dalam', label: 'Penyakit Dalam' },
    { id: 'bedah-umum', label: 'Bedah Umum' },
    { id: 'anak', label: 'Anak' },
    { id: 'kandungan', label: 'Kandungan & Kebidanan' },
    { id: 'jantung', label: 'Jantung & Pembuluh Darah' },
    { id: 'saraf', label: 'Saraf (Neurologi)' },
    { id: 'ortopedi', label: 'Bedah Tulang (Ortopedi)' },
    { id: 'mata', label: 'Mata' },
  ];

  const daysList = [
    { id: 'all', label: 'Semua Hari' },
    { id: 'Sen', label: 'Senin' },
    { id: 'Sel', label: 'Selasa' },
    { id: 'Rab', label: 'Rabu' },
    { id: 'Kam', label: 'Kamis' },
    { id: 'Jum', label: 'Jumat' },
    { id: 'Sab', label: 'Sabtu' },
  ];

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      // Search query filter
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.subSpecialty && doc.subSpecialty.toLowerCase().includes(searchQuery.toLowerCase())) ||
        doc.clinicName.toLowerCase().includes(searchQuery.toLowerCase());

      // Specialty filter
      const matchesSpecialty =
        selectedSpecialty === 'all' || doc.specialtyId === selectedSpecialty;

      // Day filter
      const matchesDay =
        selectedDay === 'all' || doc.daysAvailable.includes(selectedDay as any);

      // Available today toggle
      const matchesToday = !onlyAvailableToday || doc.isAvailableToday;

      return matchesSearch && matchesSpecialty && matchesDay && matchesToday;
    });
  }, [searchQuery, selectedSpecialty, selectedDay, onlyAvailableToday]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage) || 1;
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full bg-[#f7f9fb] min-h-screen pb-20">
      {/* 1. HERO BANNER (Matching Image 2) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={HOSPITAL_INFO.doctorCorridorHeroUrl}
            alt="Dokter RSUD Ch. Boesoerie"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c66] via-[#00288e]/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-sky-200 px-3 py-1 rounded-full backdrop-blur-xs">
              Poliklinik Rawat Jalan
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Jadwal Praktik Dokter
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-2.5 max-w-2xl leading-relaxed">
              Temukan jadwal praktik dokter spesialis dan subspesialis kami. Lakukan pendaftaran online tanpa harus mengantre lama di loket pendaftaran.
            </p>

            {/* Quick Search Bar */}
            <div className="mt-8 bg-white p-2 sm:p-2.5 rounded-2xl shadow-xl max-w-2xl flex items-center gap-2 border border-slate-100">
              <Search className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari nama dokter, spesialisasi, atau poliklinik..."
                className="w-full text-slate-800 placeholder:text-slate-400 text-sm focus:outline-hidden py-1.5 px-1 bg-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6">
        <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 space-y-4">
          {/* Specialty Filter Chips */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#00288e]" />
                <span>Pilih Spesialisasi</span>
              </span>
              <span className="text-xs text-slate-400">
                {filteredDoctors.length} Dokter Ditemukan
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar">
              {specialties.map((sp) => {
                const isSelected = selectedSpecialty === sp.id;
                return (
                  <button
                    key={sp.id}
                    onClick={() => {
                      setSelectedSpecialty(sp.id);
                      setCurrentPage(1);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00288e] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {sp.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Filter: Days & Availability toggle */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap mr-1">
                Pilih Hari:
              </span>
              {daysList.map((day) => {
                const isSelected = selectedDay === day.id;
                return (
                  <button
                    key={day.id}
                    onClick={() => {
                      setSelectedDay(day.id);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#d5e3fc] text-[#00288e] font-bold'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {day.label}
                  </button>
                );
              })}
            </div>

            <label className="flex items-center gap-2 cursor-pointer self-start sm:self-auto select-none">
              <input
                type="checkbox"
                checked={onlyAvailableToday}
                onChange={(e) => {
                  setOnlyAvailableToday(e.target.checked);
                  setCurrentPage(1);
                }}
                className="w-4 h-4 text-[#00288e] rounded border-slate-300 focus:ring-[#00288e]"
              />
              <span className="text-xs font-semibold text-slate-700">
                Tampilkan hanya yang praktik hari ini
              </span>
            </label>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {paginatedDoctors.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-xs max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <User className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">Tidak Ada Dokter Ditemukan</h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Coba sesuaikan kata kunci pencarian atau ganti filter spesialisasi dan hari.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('all');
                setSelectedDay('all');
                setOnlyAvailableToday(false);
              }}
              className="px-4 py-2 bg-[#00288e] text-white text-xs font-semibold rounded-xl"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Status Tag */}
                  <div className="p-5 pb-0 flex items-start gap-4">
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                      <img
                        src={doc.photoUrl}
                        alt={doc.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            doc.isAvailableToday
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-1 ${
                              doc.isAvailableToday ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                            }`}
                          ></span>
                          {doc.isAvailableToday ? 'Tersedia Hari Ini' : 'Sesuai Jadwal'}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#00288e] transition-colors line-clamp-2">
                        {doc.name}
                      </h3>

                      <p className="text-xs font-semibold text-[#00288e] mt-0.5">
                        Spesialis {doc.specialty}
                      </p>

                      {doc.subSpecialty && (
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 italic">
                          Subspesialis: {doc.subSpecialty}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Clinic Location & Rating */}
                  <div className="px-5 pt-3.5 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{doc.clinicName} • {doc.clinicFloor}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-bold text-slate-700">{doc.rating}</span>
                        <span className="text-[10px]">({doc.reviewCount})</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-slate-400" />
                        <span>{doc.experienceYears} Tahun Pengalaman</span>
                      </div>
                    </div>

                    {/* Schedule Block */}
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-[#00288e]" />
                        <span>Jadwal Praktik Poliklinik:</span>
                      </div>
                      {doc.schedules.map((sch, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-[11px] text-slate-600 pl-5"
                        >
                          <span className="font-medium">{sch.days}</span>
                          <span className="text-slate-800 font-bold bg-white px-1.5 py-0.5 rounded border border-slate-200">
                            {sch.hours} WIT
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-4 mt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenDoctorDetail && onOpenDoctorDetail(doc)}
                    className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Profil Lengkap
                  </button>
                  <button
                    onClick={() => onOpenAppointmentWithDoctor && onOpenAppointmentWithDoctor(doc)}
                    className="flex-1 py-2.5 px-3 bg-[#00288e] hover:bg-[#001c66] text-white text-xs font-bold rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5 active:scale-98"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Buat Janji</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-[#00288e] text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {pageNum}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Selanjutnya
            </button>
          </div>
        )}

        {/* Emergency / Call Help box */}
        <div className="mt-14 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl p-6 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#00288e] text-white flex items-center justify-center shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Butuh bantuan jadwal dokter atau konfirmasi darurat?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Hubungi Call Center Informasi RSUD Ch. Boesoerie di {HOSPITAL_INFO.phone} atau IGD 24 Jam.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEmergency}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Kontak IGD</span>
          </button>
        </div>
      </section>
    </div>
  );
};
