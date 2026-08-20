export type NavPage = 'beranda' | 'layanan' | 'jadwal-dokter' | 'fasilitas' | 'tentang-kami' | 'kontak';

export type Language = 'id' | 'en';

export interface DoctorSchedule {
  days: string;
  hours: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  specialtyId: string;
  subSpecialty?: string;
  photoUrl: string;
  isAvailableToday: boolean;
  clinicName: string;
  clinicFloor: string;
  schedules: DoctorSchedule[];
  daysAvailable: ('Sen' | 'Sel' | 'Rab' | 'Kam' | 'Jum' | 'Sab')[];
  sipNumber: string;
  strNumber: string;
  education: string[];
  experienceYears: number;
  rating: number;
  reviewCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  iconName: string;
  badgeColor?: string;
  features: string[];
  headDoctor?: string;
}

export interface Polyclinic {
  id: string;
  name: string;
  description: string;
  iconName: string;
  floor: string;
  doctorsCount: number;
  operatingHours: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  readTime: string;
}

export interface BedCategory {
  id: string;
  name: string;
  total: number;
  occupied: number;
  available: number;
  genderRestriction?: string;
  pricePerDay?: string;
  facilities: string[];
}

export interface AppointmentBooking {
  bookingId: string;
  patientName: string;
  patientNik: string;
  patientPhone: string;
  patientEmail?: string;
  paymentType: 'BPJS' | 'Umum' | 'Asuransi Swasta';
  bpjsNumber?: string;
  doctorName: string;
  specialty: string;
  clinicName: string;
  appointmentDate: string;
  appointmentTimeSlot: string;
  queueNumber: string;
  estimatedTime: string;
  status: 'Terkonfirmasi' | 'Menunggu' | 'Selesai';
  createdAt: string;
}
