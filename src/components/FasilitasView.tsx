import React, { useState, useMemo } from 'react';
import { NavPage, BedCategory } from '../types';
import { BED_AVAILABILITY_DATA, HOSPITAL_INFO } from '../data/mockData';
import { 
  BedDouble, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Info, 
  CalendarCheck, 
  PhoneCall, 
  Tv, 
  Wifi, 
  Bath, 
  Wind, 
  AlertCircle,
  Clock,
  ArrowRight,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';

interface FasilitasViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const FasilitasView: React.FC<FasilitasViewProps> = ({
  onNavigate,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const totalBeds = useMemo(() => {
    return BED_AVAILABILITY_DATA.reduce((acc, curr) => acc + curr.total, 0);
  }, []);

  const totalOccupied = useMemo(() => {
    return BED_AVAILABILITY_DATA.reduce((acc, curr) => acc + curr.occupied, 0);
  }, []);

  const totalAvailable = totalBeds - totalOccupied;
  const occupancyRate = ((totalOccupied / totalBeds) * 100).toFixed(1);

  const filteredBeds = useMemo(() => {
    if (selectedFilter === 'all') return BED_AVAILABILITY_DATA;
    if (selectedFilter === 'intensive') {
      return BED_AVAILABILITY_DATA.filter((b) => ['icu', 'nicu-picu', 'isolasi'].includes(b.id));
    }
    if (selectedFilter === 'standard') {
      return BED_AVAILABILITY_DATA.filter((b) => ['kelas-1', 'kelas-2', 'kelas-3'].includes(b.id));
    }
    if (selectedFilter === 'vip') {
      return BED_AVAILABILITY_DATA.filter((b) => ['vvip', 'vip'].includes(b.id));
    }
    return BED_AVAILABILITY_DATA;
  }, [selectedFilter]);

  return (
    <div className="w-full bg-[#f7f9fb] min-h-screen pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAP7q0FKEf-uebsWpGI9VwlvVhhWSeSXBP1JDmtPUy6Ifl5pbEoaaExay-FdRbb2NtVkd-RsFHklco7lpvCTPX9N1l0mopzaEWw1LBe1QwsEhHvfHunJJNLJwiIP0BFAZDve_gtCfNaXLMQwjplDxVLnySteqa_VDfp8pe3bwoilv_RW1PX2i_HLcu9s04UhY8n3_lb0_oG6c86Kk7pbrGd-UgO-XVrAwXse2ecB36iyanTAcyyiSH-w"
            alt="Fasilitas Kamar RSUD Ch. Boesoerie"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c66] via-[#00288e]/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-sky-200 px-3 py-1 rounded-full backdrop-blur-xs">
              Transparansi Informasi Publik
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Fasilitas & Ketersediaan Tempat Tidur
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 max-w-2xl leading-relaxed">
              Pantau ketersediaan kamar rawat inap, ICU, NICU, dan ruang isolasi secara real-time. Kami menyediakan standar kenyamanan tinggi untuk proses pemulihan pasien.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME BED OCCUPANCY SUMMARY BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#eef2ff] text-[#00288e] flex items-center justify-center shrink-0">
              <BedDouble className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Total Kapasitas</p>
              <p className="text-2xl font-extrabold text-slate-900">{totalBeds} Bed</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Tempat Tidur Kosong</p>
              <p className="text-2xl font-extrabold text-emerald-600">{totalAvailable} Bed</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Sedang Terisi</p>
              <p className="text-2xl font-extrabold text-slate-900">{totalOccupied} Pasien</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Tingkat Okupansi (BOR)</p>
              <p className="text-2xl font-extrabold text-slate-900">{occupancyRate}%</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BED CARDS & FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Rincian Ketersediaan Per Kelas Perawatan
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Pembaruan otomatis sistem admisi RSUD Ch. Boesoerie
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'Semua Kelas' },
              { id: 'vip', label: 'VVIP & VIP' },
              { id: 'standard', label: 'Kelas 1, 2, 3 (KRIS)' },
              { id: 'intensive', label: 'ICU / NICU / Isolasi' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#00288e] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeds.map((bed) => {
            const isCritical = bed.available <= 2;
            return (
              <div
                key={bed.id}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-slate-100 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{bed.name}</h3>
                      {bed.pricePerDay && (
                        <p className="text-xs font-semibold text-[#00288e] mt-0.5">
                          {bed.pricePerDay}
                        </p>
                      )}
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${
                        isCritical
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {bed.available} Kosong
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5 my-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Terisi: {bed.occupied} / {bed.total}</span>
                      <span>{Math.round((bed.occupied / bed.total) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isCritical ? 'bg-rose-500' : 'bg-[#00288e]'
                        }`}
                        style={{ width: `${(bed.occupied / bed.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Facilities list */}
                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Fasilitas Ruangan:
                    </p>
                    <ul className="space-y-1.5">
                      {bed.facilities.map((fac, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={onOpenAppointment}
                    className="w-full py-2.5 px-3 bg-slate-50 hover:bg-[#eef2ff] text-[#00288e] hover:text-[#001c66] text-xs font-bold rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Konsultasi Admisi Rawat Inap
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ADMISSION FLOW & BPJS GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-[#00288e] text-xs font-bold uppercase tracking-wider bg-[#d5e3fc] px-3 py-1 rounded-full">
              Panduan Pasien
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
              Alur Penerimaan Pasien Rawat Inap & BPJS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Informasi prosedur admisi rawat inap untuk kemudahan dan kelancaran proses perawatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#00288e] text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Rujukan / Instruksi Rawat</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pasien membawa surat pengantar rawat inap dari dokter spesialis poliklinik atau rujukan darurat dari IGD.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#00288e] text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Verifikasi BPJS & Dokumen</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Petugas admisi memverifikasi KTP, Kartu BPJS / Asuransi, serta Surat Eligibilitas Peserta (SEP) secara terintegrasi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#00288e] text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Penempatan Ruangan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pasien dipindahkan ke ruang rawat inap dengan pendampingan perawat dan mendapatkan gelang identitas barcode.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
