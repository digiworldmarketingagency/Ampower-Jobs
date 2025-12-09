export enum UserRole {
  GUEST = 'GUEST',
  CANDIDATE = 'CANDIDATE',
  CORPORATE = 'CORPORATE',
  ADMIN = 'ADMIN'
}

export enum JobStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum CorporateStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  status: JobStatus;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  isPast: boolean;
}

export interface CandidateProfile {
  name: string;
  email: string;
  skills: string[];
  experience: number; // years
  education: string;
}

export interface CorporateProfile {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  status: CorporateStatus;
}

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
  experience: Array<{
    company: string;
    role: string;
    duration: string;
    details: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
}
