import React from 'react';
import { HOSPITAL_INFO } from '../data/mockData';
import { 
  X, 
  PhoneCall, 
  AlertTriangle, 
  Clock, 
  Activity, 
  ShieldAlert, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-red-200 relative">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center animate-pulse">
              <PhoneCall className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                Siaga 24 Jam Non-Stop
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Instalasi Gawat Darurat (IGD)
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-center space-y-2">
            <p className="text-xs font-bold text-red-800 uppercase tracking-wider">
              Hotline Panggilan Cepat IGD & Ambulans:
            </p>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyHotline.replace(/[^0-9]/g, '')}`}
              className="block text-3xl font-black text-red-600 hover:text-red-700 tracking-tight transition-transform hover:scale-105"
            >
              {HOSPITAL_INFO.emergencyHotline}
            </a>
            <p className="text-[11px] text-red-700">
              Dokter triase dan armada ambulans siaga 24 jam di seluruh wilayah Kota Ternate.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
              Kriteria Kegawatdaruratan Medis:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Nyeri dada mendadak (Serangan Jantung)',
                'Kelemahan anggota gerak / Bicara pelo (Stroke)',
                'Sesak napas berat / Asma akut',
                'Cedera kepala, patah tulang, perdarahan hebat',
                'Kejang demam pada anak / Bayi tidak sadar',
                'Keracunan atau reaksi anafilaksis parah',
              ].map((kriteria, idx) => (
                <div key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{kriteria}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Akses Masuk Jalur Cepat IGD:</span>
            </div>
            <p className="text-slate-600 pl-5 text-[11px]">
              Gerbang Timur RSUD Ch. Boesoerie, Jl. Tanah Tinggi No. 50 (Tersedia jalur drop-off ambulans langsung ke ruang resusitasi).
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-100"
          >
            Tutup
          </button>
          <a
            href={`tel:${HOSPITAL_INFO.emergencyHotline.replace(/[^0-9]/g, '')}`}
            className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Panggil Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
};
