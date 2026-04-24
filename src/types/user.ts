export interface User {
  id: string;
  userId: string | number;
  userMongoId: string;
  username: string;
  fullname: string;
  fullName: string;
  email: string;
  number: string;
  isCS: boolean;
  isAnKhang?: boolean;
  historyBookingCount: number;
  patientCount: number;
  token?: string;
}

export interface LoginResponse extends User {
  token: string;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface UserDetailResponse extends User {}
