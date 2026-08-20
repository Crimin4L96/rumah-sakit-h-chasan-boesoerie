import React, { useState } from 'react';
import { Doctor, AppointmentBooking } from '../types';
import { DOCTORS_DATA, POLYCLINICS, HOSPITAL_INFO } from '../data/mockData';
import { 
  X, 
  CalendarCheck, 
  User, 
  CreditCard, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  QrCode, 
  Printer, 
  Share2, 
  AlertCircle,
  Calendar,
  ChevronRight
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: Doctor | null;
  onBookingSuccess?: (booking: AppointmentBooking) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor,
  onBookingSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  // Form State
  const [selectedPoli, setSelectedPoli] = useState(preselectedDoctor ? preselectedDoctor.specialtyId : 'penyakit-dalam');
  const [selectedDoctorId, setSelectedDoctorId] = useState(preselectedDoctor ? preselectedDoctor.id : DOCTORS_DATA[0].id);
  const [appointmentDate, setAppointmentDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('09:00 - 10:00 WIT');
  const [paymentType, setPaymentType] = useState<'BPJS' | 'Umum' | 'Asuransi Swasta'>('BPJS');
  const [patientName, setPatientName] = useState('');
  const [patientNik, setPatientNik] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [bpjsNumber, setBpjsNumber] = useState('');

  // Result state
  const [completedBooking, setCompletedBooking] = useState<AppointmentBooking | null>(null);

  if (!isOpen) return null;

  const currentDoctor = DOCTORS_DATA.find((d) => d.id === selectedDoctorId) || DOCTORS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientNik || !patientPhone) return;

    const randomQueueNum = Math.floor(Math.random() * 25) + 1;
    const queueStr = `${currentDoctor.specialty.substring(0, 3).toUpperCase()}-${String(randomQueueNum).padStart(3, '0')}`;
    const bookingCode = `CB-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const newBooking: AppointmentBooking = {
      bookingId: bookingCode,
      patientName,
      patientNik,
      patientPhone,
      paymentType,
      bpjsNumber: paymentType === 'BPJS' ? bpjsNumber : undefined,
      doctorName: currentDoctor.name,
      specialty: currentDoctor.specialty,
      clinicName: currentDoctor.clinicName,
      appointmentDate,
      appointmentTimeSlot: timeSlot,
      queueNumber: queueStr,
      estimatedTime: `${timeSlot.split(' - ')[0]} WIT`,
      status: 'Terkonfirmasi',
      createdAt: new Date().toISOString(),
    };

    setCompletedBooking(newBooking);
    if (onBookingSuccess) {
      onBookingSuccess(newBooking);
    }
    setStep('success');
  };

  const handleResetAndClose = () => {
    setStep('form');
    setPatientName('');
    setPatientNik('');
    setPatientPhone('');
    setBpjsNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-100 relative">
        {/* Header */}
        <div className="bg-[#00288e] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Pendaftaran Online Pasien</h3>
              <p className="text-xs text-sky-200">Rawat Jalan RSUD Ch. Boesoerie</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Doctor Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                1. Pilih Dokter Spesialis
              </label>
              <select
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#00288e] focus:ring-1 focus:ring-[#00288e] outline-hidden bg-slate-50 font-medium"
              >
                {DOCTORS_DATA.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} — Spesialis {doc.specialty} ({doc.clinicName})
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Info Card */}
            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center gap-3">
              <img
                src={currentDoctor.photoUrl}
                alt={currentDoctor.name}
                referrerPolicy="no-referrer"
                className="w-12 h-14 rounded-lg object-cover bg-white shrink-0 border border-indigo-200"
              />
              <div className="text-xs min-w-0">
                <p className="font-bold text-slate-900 truncate">{currentDoctor.name}</p>
                <p className="text-[#00288e] font-semibold">{currentDoctor.clinicName}</p>
                <p className="text-slate-500 text-[11px] mt-0.5">{currentDoctor.clinicFloor}</p>
              </div>
            </div>

            {/* Step 2: Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  2. Tanggal Kunjungan <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] outline-hidden bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Sesi Waktu
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] outline-hidden bg-slate-50"
                >
                  <option value="08:30 - 09:30 WIT">08:30 - 09:30 WIT (Pagi)</option>
                  <option value="09:30 - 11:00 WIT">09:30 - 11:00 WIT (Pagi)</option>
                  <option value="11:00 - 12:30 WIT">11:00 - 12:30 WIT (Siang)</option>
                  <option value="14:00 - 16:00 WIT">14:00 - 16:00 WIT (Sore)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Payment Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                3. Jenis Penjaminan / Pembayaran
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['BPJS', 'Umum', 'Asuransi Swasta'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPaymentType(type)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      paymentType === type
                        ? 'bg-[#00288e] text-white border-[#00288e]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Patient Identity */}
            <div className="space-y-3 pt-1 border-t border-slate-100">
              <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                4. Data Identitas Pasien
              </span>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Nama Pasien Sesuai KTP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Contoh: Ahmad Abdullah"
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] outline-hidden bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    NIK (16 Digit) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    value={patientNik}
                    onChange={(e) => setPatientNik(e.target.value)}
                    placeholder="827101xxxxxx0001"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] outline-hidden bg-slate-50 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Nomor WhatsApp Pasien <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="081234567890"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] outline-hidden bg-slate-50"
                  />
                </div>
              </div>

              {paymentType === 'BPJS' && (
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Nomor Kartu BPJS Kesehatan
                  </label>
                  <input
                    type="text"
                    value={bpjsNumber}
                    onChange={(e) => setBpjsNumber(e.target.value)}
                    placeholder="0001234567890 (13 Digit)"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-[#00288e] outline-hidden bg-slate-50 font-mono"
                  />
                </div>
              )}
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#00288e] hover:bg-[#001c66] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Konfirmasi & Dapatkan Tiket Antrean</span>
              </button>
            </div>
          </form>
        ) : (
          /* SUCCESS SCREEN: TIKET ANTREAN */
          <div className="p-6 space-y-5 max-h-[85vh] overflow-y-auto text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                Pendaftaran Berhasil Terkonfirmasi
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2">
                Tiket Antrean Poliklinik
              </h3>
              <p className="text-xs text-slate-500">
                Kode Booking: <strong className="text-slate-900 font-mono">{completedBooking?.bookingId}</strong>
              </p>
            </div>

            {/* Virtual Ticket Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Nomor Antrean Anda</span>
                  <p className="text-3xl font-black text-[#00288e] tracking-tight">
                    {completedBooking?.queueNumber}
                  </p>
                </div>
                <div className="w-16 h-16 bg-white p-1 rounded-xl border border-slate-200 flex items-center justify-center">
                  <QrCode className="w-14 h-14 text-slate-800" />
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Pasien:</span>
                  <span className="font-bold text-slate-800">{completedBooking?.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dokter:</span>
                  <span className="font-bold text-slate-800 truncate max-w-[220px]">{completedBooking?.doctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Poliklinik:</span>
                  <span className="font-bold text-[#00288e]">{completedBooking?.clinicName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tanggal:</span>
                  <span className="font-bold text-slate-800">{completedBooking?.appointmentDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimasi Pelayanan:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {completedBooking?.appointmentTimeSlot}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Penjaminan:</span>
                  <span className="font-bold text-slate-800">{completedBooking?.paymentType}</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              * Harap tiba di poliklinik 15 menit sebelum estimasi waktu pemeriksaan dan tunjukkan QR Code / Kode Booking ini ke petugas loket antrean.
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak Tiket</span>
              </button>
              <button
                onClick={handleResetAndClose}
                className="flex-1 py-2.5 bg-[#00288e] hover:bg-[#001c66] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
