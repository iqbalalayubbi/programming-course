type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'mentor';
};

export { type RegisterPayload };
