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

  async deleteNote(id: number): Promise<ServiceResponse> {
    try {
      const deletedNote = await this.noteModel.delete({ where: { id } });

      if (!deletedNote) {
        return {
          isSuccess: false,
          error: { field: 'note', message: 'Note not found' },
        };
      }

      return {
        isSuccess: true,
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'note', message: 'Note not found' },
      };
    }
  }

  async updateNote(id: number, data: NoteModel): Promise<ServiceResponse> {
    try {
      const updatedNote = await this.noteModel.update({
        where: { id },
        data,
      });

      if (!updatedNote) {
        return {
          isSuccess: false,
          error: { field: 'note', message: 'Note not found' },
        };
      }

      return {
        isSuccess: true,
        data: { note: updatedNote },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'note', message: 'Failed to update note' },
      };
    }
  }
}

export { NoteService };
