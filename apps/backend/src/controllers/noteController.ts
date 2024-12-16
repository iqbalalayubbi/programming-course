import { NoteServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  noteService: NoteServiceType;
};

class NoteController {
  private noteService: NoteServiceType;

  public constructor({ noteService }: Constructor) {
    this.noteService = noteService;
    this.createNote = this.createNote.bind(this);
  }

  async createNote(req: Request, res: Response) {
    const newData = req.body;

    const { isSuccess, data, error } = await this.noteService.create(newData);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'Note created successfully',
        data,
      });
    }
    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.NOT_FOUND,
      message: 'Student not found',
    });
  }
}

export { NoteController };
