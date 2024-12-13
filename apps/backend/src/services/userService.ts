import { PrismaClient } from '@prisma/client';
import { UserModel } from '@/models';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

type FindType = {
  key: 'id' | 'email' | 'username';
  value: string | number;
};

type UserWithoutSkills = Omit<UserModel, 'skills'>;

class UserService {
  private userModel: PrismaClient['user'];

  public constructor({ prismaClient }: Constructor) {
    this.userModel = prismaClient.user;
  }

  async find(data: FindType): Promise<ServiceResponse> {
    const { key, value } = data;
    try {
      const user = await this.userModel.findFirst({
        where: {
          [key]: value,
        },
      });

      if (!user) {
        return {
          isSuccess: false,
          error: {
            field: key,
            message: 'User not found',
          },
        };
      }

      return {
        isSuccess: true,
        data: { user },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: key,
          message: 'Error fetching user',
        },
      };
    }
  }

  async findOr(data: FindType[]): Promise<ServiceResponse> {
    const fields = data.map((field) => ({ [field.key]: field.value }));

    try {
      const user = await this.userModel.findFirst({
        where: {
          OR: fields,
        },
      });

      if (!user) {
        return {
          isSuccess: false,
          error: {
            field: data[0].key,
            message: 'User not found',
          },
        };
      }

      return {
        isSuccess: true,
        data: { user },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: data[0].key,
          message: 'Error fetching user',
        },
      };
    }
  }

  async create(data: UserWithoutSkills): Promise<ServiceResponse> {
    try {
      const newUser = await this.userModel.create({
        data,
      });

      return {
        isSuccess: true,
        data: { user: newUser },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'user',
          message: 'Error creating user',
        },
      };
    }
  }

  async update(id: number, data: UserWithoutSkills): Promise<ServiceResponse> {
    try {
      const updatedUser = await this.userModel.update({
        where: { id },
        data,
      });

      if (!updatedUser) {
        return {
          isSuccess: false,
          error: {
            field: 'user',
            message: 'User not found',
          },
        };
      }

      return {
        isSuccess: true,
        data: { user: updatedUser },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'user',
          message: 'Error updating user',
        },
      };
    }
  }

  async updateUserProfile(
    username: string,
    filename: string,
  ): Promise<ServiceResponse> {
    try {
      const updatedUser = await this.userModel.update({
        where: { username },
        data: {
          image_url: `${process.env.PHOTO_URL}/${filename}`,
        },
      });

      if (!updatedUser) {
        return {
          isSuccess: false,
          error: {
            field: 'user',
            message: 'User not found',
          },
        };
      }

      return {
        isSuccess: true,
        data: { user: updatedUser },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'user',
          message: 'Error updating user',
        },
      };
    }
  }

  async delete(id: number): Promise<ServiceResponse> {
    try {
      const deletedUser = await this.userModel.delete({
        where: { id },
      });

      if (!deletedUser) {
        return {
          isSuccess: false,
          error: {
            field: 'user',
            message: 'User not found',
          },
        };
      }

      return {
        isSuccess: true,
        data: { user: deletedUser },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'user',
          message: 'Error deleting user',
        },
      };
    }
  }
}

export { UserService };
