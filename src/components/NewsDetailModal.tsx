import React from 'react';
import { NewsArticle } from '../types';
import { X, Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${article.categoryColor}`}>
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <span className="text-slate-600 font-semibold">Humas RSUD Ch. Boesoerie</span>
          </div>

          <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
            <img
              src={article.imageUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
            <p className="font-semibold text-slate-800 leading-relaxed">
              {article.excerpt}
            </p>
            <p className="leading-relaxed">
              {article.content}
            </p>
            <p className="leading-relaxed">
              Pihak manajemen RSUD Ch. Boesoerie terus berkomitmen untuk memperluas jangkauan layanan kesehatan dan memperkuat kordinasi dengan seluruh fasilitas kesehatan tingkat pertama (FKTP) di Maluku Utara guna memastikan setiap pasien mendapatkan penanganan yang tepat waktu dan terukur.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center shrink-0">
          <span className="text-[11px] text-slate-400">Bagikan informasi resmi ini</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#00288e] text-white text-xs font-bold rounded-xl"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
