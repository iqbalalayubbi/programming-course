import { PrismaClient, User } from '@prisma/client';
import { UserModel } from '@/models';

type Constructor = {
  prismaClient: PrismaClient;
};

type FindType = {
  key: 'id' | 'email' | 'username';
  value: string;
};

class UserService {
  private userModel: PrismaClient['user'];

  public constructor({ prismaClient }: Constructor) {
    this.userModel = prismaClient.user;
  }

  async find(data: FindType): Promise<User | null> {
    const { key, value } = data;
    try {
      const user = await this.userModel.findFirst({
        where: {
          [key]: value,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch {
      throw new Error('Could not find user');
    }
  }

  async findOr(data: FindType[]): Promise<User | null> {
    const fields = data.map((field) => ({ [field.key]: field.value }));

    try {
      const user = await this.userModel.findFirst({
        where: {
          OR: fields,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch {
      throw new Error('Could not find user');
    }
  }

  async create(data: UserModel): Promise<User> {
    try {
      const newUser = await this.userModel.create({
        data,
      });

      return newUser;
    } catch {
      throw new Error('Could not create user');
    }
  }

  async update(id: number, data: UserModel): Promise<User> {
    try {
      const updatedUser = await this.userModel.update({
        where: { id },
        data,
      });

      if (!updatedUser) {
        throw new Error('User not found');
      }

      return updatedUser;
    } catch {
      throw new Error('Could not update user');
    }
  }
}

export { UserService };
