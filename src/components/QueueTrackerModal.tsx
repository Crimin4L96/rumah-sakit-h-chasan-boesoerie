import React, { useState } from 'react';
import { AppointmentBooking } from '../types';
import { 
  X, 
  Search, 
  QrCode, 
  Clock, 
  User, 
  CheckCircle2, 
  AlertCircle,
  CalendarCheck
} from 'lucide-react';

interface QueueTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedBookings?: AppointmentBooking[];
}

export const QueueTrackerModal: React.FC<QueueTrackerModalProps> = ({
  isOpen,
  onClose,
  savedBookings = [],
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchedBooking, setSearchedBooking] = useState<AppointmentBooking | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    setHasSearched(true);
    const cleaned = searchInput.trim().toUpperCase();

    // Check in saved bookings first
    const found = savedBookings.find(
      (b) => b.bookingId.toUpperCase() === cleaned || b.patientNik === cleaned || b.patientPhone === cleaned
    );

    if (found) {
      setSearchedBooking(found);
    } else {
      // Demo simulated search result
      setSearchedBooking({
        bookingId: cleaned.startsWith('CB-') ? cleaned : `CB-${cleaned.substring(0, 6)}`,
        patientName: 'Pasien Terdaftar',
        patientNik: '827101******0001',
        patientPhone: '0812****7890',
        paymentType: 'BPJS',
        doctorName: 'Dr. Aisha Badmanati, Sp.PD',
        specialty: 'Penyakit Dalam',
        clinicName: 'Klinik Penyakit Dalam',
        appointmentDate: 'Hari Ini',
        appointmentTimeSlot: '09:00 - 10:30 WIT',
        queueNumber: 'PEN-014',
        estimatedTime: '09:30 WIT',
        status: 'Terkonfirmasi',
        createdAt: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 relative">
        {/* Header */}
        <div className="bg-[#00288e] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Cek Status & Antrean Pasien</h3>
              <p className="text-xs text-sky-200">Lacak antrean poliklinik secara live</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Masukkan Kode Booking / NIK / No. HP
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Contoh: CB-8F32A atau NIK"
                  className="w-full text-xs pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50 uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#00288e] hover:bg-[#001c66] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
              >
                Cari
              </button>
            </div>
          </form>

          {/* Results */}
          {hasSearched && searchedBooking && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Nomor Antrean Anda</span>
                  <p className="text-3xl font-black text-[#00288e]">
                    {searchedBooking.queueNumber}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {searchedBooking.status}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 font-mono">{searchedBooking.bookingId}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Pasien:</span>
                  <span className="font-bold text-slate-800">{searchedBooking.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dokter:</span>
                  <span className="font-bold text-slate-800">{searchedBooking.doctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Poliklinik:</span>
                  <span className="font-bold text-[#00288e]">{searchedBooking.clinicName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimasi Pelayanan:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {searchedBooking.appointmentTimeSlot}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Saat ini sedang melayani nomor antrean: <strong>PEN-011</strong></span>
              </div>
            </div>
          )}

          {/* Quick tips */}
          <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-slate-600 space-y-1">
            <p className="font-bold text-[#00288e]">Petunjuk Kedatangan:</p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Pasien disarankan hadir 15 menit sebelum estimasi waktu pemeriksaan. Tunjukkan nomor antrean digital ini di loket fast-track poliklinik.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
