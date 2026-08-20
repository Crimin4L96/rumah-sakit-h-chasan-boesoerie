import React from 'react';
import { Doctor } from '../types';
import { 
  X, 
  Star, 
  Award, 
  MapPin, 
  Clock, 
  CalendarCheck, 
  GraduationCap, 
  FileCheck, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  isOpen,
  onClose,
  onBookAppointment,
}) => {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 relative">
        {/* Header with Doctor Photo */}
        <div className="bg-[#00288e] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-20 h-24 rounded-2xl overflow-hidden bg-white/10 shrink-0 border-2 border-white/30 shadow-md">
              <img
                src={doctor.photoUrl}
                alt={doctor.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="min-w-0 pr-6">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-sky-200">
                Spesialis {doctor.specialty}
              </span>
              <h3 className="font-extrabold text-lg sm:text-xl text-white mt-1 leading-snug">
                {doctor.name}
              </h3>
              {doctor.subSpecialty && (
                <p className="text-xs text-sky-200 mt-0.5">
                  Subspesialis: {doctor.subSpecialty}
                </p>
              )}
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-200">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span className="font-bold text-white">{doctor.rating}</span>
                  <span className="text-white/70">({doctor.reviewCount} ulasan)</span>
                </div>
                <span>•</span>
                <span>{doctor.experienceYears} Thn Pengalaman</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
          {/* Location & Clinic */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <MapPin className="w-4 h-4 text-[#00288e]" />
              <span>Lokasi Poliklinik</span>
            </div>
            <p className="text-xs text-slate-600 pl-6">
              {doctor.clinicName} — {doctor.clinicFloor}
            </p>
          </div>

          {/* Schedule */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00288e]" />
              <span>Jadwal Praktik Rutin</span>
            </h4>
            <div className="space-y-1.5">
              {doctor.schedules.map((sch, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                >
                  <span className="font-semibold text-slate-700">{sch.days}</span>
                  <span className="font-bold text-[#00288e] bg-white px-2 py-0.5 rounded border border-slate-200">
                    {sch.hours} WIT
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#00288e]" />
              <span>Riwayat Pendidikan & Pelatihan</span>
            </h4>
            <ul className="space-y-1.5">
              {doctor.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SIP & STR Licenses */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2 text-[11px] text-slate-500 font-mono">
            <div>
              <strong>No. SIP:</strong> {doctor.sipNumber}
            </div>
            <div className="hidden sm:inline">•</div>
            <div>
              <strong>No. STR:</strong> {doctor.strNumber}
            </div>
          </div>
        </div>

        {/* Modal Action */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onBookAppointment(doctor);
            }}
            className="flex-1 py-2.5 bg-[#00288e] hover:bg-[#001c66] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Buat Janji Temu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
