import React from 'react';
import { BED_AVAILABILITY_DATA } from '../data/mockData';
import { 
  X, 
  BedDouble, 
  CheckCircle2, 
  Activity, 
  AlertCircle, 
  PhoneCall 
} from 'lucide-react';

interface BedInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFacilities: () => void;
}

export const BedInfoModal: React.FC<BedInfoModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFacilities,
}) => {
  if (!isOpen) return null;

  const totalBeds = BED_AVAILABILITY_DATA.reduce((acc, curr) => acc + curr.total, 0);
  const totalOccupied = BED_AVAILABILITY_DATA.reduce((acc, curr) => acc + curr.occupied, 0);
  const totalAvailable = totalBeds - totalOccupied;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-100 relative">
        {/* Header */}
        <div className="bg-[#00288e] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <BedDouble className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Ketersediaan Kamar Real-time</h3>
              <p className="text-xs text-sky-200">Kapasitas Rawat Inap RSUD Ch. Boesoerie</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-3 text-center bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div>
              <p className="text-[11px] text-slate-500 font-semibold">Total Bed</p>
              <p className="text-xl font-bold text-slate-900">{totalBeds}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold">Tersedia</p>
              <p className="text-xl font-bold text-emerald-600">{totalAvailable}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold">Terisi</p>
              <p className="text-xl font-bold text-slate-700">{totalOccupied}</p>
            </div>
          </div>

          {/* List of room categories */}
          <div className="space-y-2">
            {BED_AVAILABILITY_DATA.map((bed) => (
              <div
                key={bed.id}
                className="p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between shadow-2xs"
              >
                <div>
                  <p className="text-xs font-bold text-slate-900">{bed.name}</p>
                  <p className="text-[11px] text-slate-500">{bed.occupied} terisi dari {bed.total} total kapasitas</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    bed.available <= 2
                      ? 'bg-rose-100 text-rose-700'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {bed.available} Tersedia
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onNavigateToFacilities();
            }}
            className="flex-1 py-2.5 bg-[#00288e] hover:bg-[#001c66] text-white text-xs font-bold rounded-xl"
          >
            Lihat Rincian Fasilitas
          </button>
        </div>
      </div>
    </div>
  );
};
