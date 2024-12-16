import { NoteModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type NoteServiceType = {
  create(data: NoteModel): Promise<ServiceResponse>;
};

export { NoteServiceType };
