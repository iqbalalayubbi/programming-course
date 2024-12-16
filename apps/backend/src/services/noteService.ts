import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';
import { NoteModel } from '@/models';

type Constructor = {
  prismaClient: PrismaClient;
};

class NoteService {
  private noteModel: PrismaClient['note'];

  public constructor({ prismaClient }: Constructor) {
    this.noteModel = prismaClient.note;
  }

  async create(data: NoteModel): Promise<ServiceResponse> {
    try {
      const noteCreated = await this.noteModel.create({ data });
      return {
        isSuccess: true,
        data: { note: noteCreated },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'note', message: 'Failed to create note' },
      };
    }
  }

  async getNotesByUsername(username: string): Promise<ServiceResponse> {
    try {
      const notes = await this.noteModel.findMany({
        where: { user_username: username },
      });
      return {
        isSuccess: true,
        data: { notes },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'note', message: 'Failed to get notes' },
      };
    }
  }

  async getNoteById(id: number): Promise<ServiceResponse> {
    try {
      const note = await this.noteModel.findUnique({ where: { id } });
      if (!note) {
        return {
          isSuccess: false,
          error: { field: 'note', message: 'Note not found' },
        };
      }
      return {
        isSuccess: true,
        data: { note },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'note', message: 'Failed to get note' },
      };
    }
  }

  // async getById(id: number): Promise<ServiceResponse> {
  //   try {
  //     const skill = await this.skillModel.findUnique({ where: { id } });
  //     if (!skill) {
  //       return {
  //         isSuccess: false,
  //         error: { field: 'skill', message: 'Skill not found' },
  //       };
  //     }
  //     return {
  //       isSuccess: true,
  //       data: { skill },
  //     };
  //   } catch {
  //     return {
  //       isSuccess: false,
  //       error: { field: 'skill', message: 'Failed to get skill' },
  //     };
  //   }
  // }
}

export { NoteService };
