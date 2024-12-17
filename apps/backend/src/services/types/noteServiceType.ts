import { NoteModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type NoteServiceType = {
  create(data: NoteModel): Promise<ServiceResponse>;
  getNotesByUsername(username: string): Promise<ServiceResponse>;
  getNoteById(id: number): Promise<ServiceResponse>;
  deleteNote(id: number): Promise<ServiceResponse>;
  updateNote(id: number, data: NoteModel): Promise<ServiceResponse>;
};

export { NoteServiceType };
