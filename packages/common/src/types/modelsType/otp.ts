type OTP = {
  id: number;
  user_id: number;
  otp_code: string;
  expired_at: Date;
  createdAt: Date;
  updatedAt: Date;
};

export { type OTP };
