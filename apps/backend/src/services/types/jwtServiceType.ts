type JwtServiceType = {
  generateAccessToken(username: string, role: string): string;
};

export { JwtServiceType };
