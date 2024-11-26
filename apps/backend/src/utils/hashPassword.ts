import bcrypt from 'bcrypt';

const saltRounds = 10;

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export { hashPassword };
