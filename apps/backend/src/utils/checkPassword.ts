import bcrypt from 'bcrypt';

const checkPassword = async (password: string, hashPassword: string) => {
  const isMatch = await bcrypt.compare(password, hashPassword);

  return isMatch;
};

export { checkPassword };
