import bcrypt from 'bcrypt';

class PasswordService {
  private saltRounds: number = 10;

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
}

export { PasswordService };
