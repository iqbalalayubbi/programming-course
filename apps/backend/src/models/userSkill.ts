import { Skill } from './skill';
import { User } from './user';

type UserSkill = {
  id: number;
  user_username: string;
  skill_name: string;
  createdAt: Date;
  updatedAt: Date;
  users?: User[];
  skills?: Skill[];
};

export { UserSkill };
