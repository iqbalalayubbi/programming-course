import { UserModel } from '@/models';
import { type ServiceResponse } from './serviceResponseType';

type FindType = {
  key: 'id' | 'email' | 'username';
  value: string | number;
};

type UserWithoutSkills = Omit<UserModel, 'skills'>;

type UserServiceType = {
  find(data: FindType): Promise<ServiceResponse>;
  findOr(data: FindType[]): Promise<ServiceResponse>;
  create(data: UserWithoutSkills): Promise<ServiceResponse>;
  update(id: number, data: UserWithoutSkills): Promise<ServiceResponse>;
  updateUserProfile(username: string, url: string): Promise<ServiceResponse>;
  delete(id: number): Promise<ServiceResponse>;
};

export { type UserServiceType };
