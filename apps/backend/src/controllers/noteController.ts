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
    this.getDetailNote = this.getDetailNote.bind(this);
    this.getNotesByUsername = this.getNotesByUsername.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
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

  async getNotesByUsername(req: Request, res: Response) {
    const { username } = req.query;

    const { isSuccess, data, error } =
      await this.noteService.getNotesByUsername(username as string);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Notes retrieved successfully',
        data,
      });
    }
    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.NOT_FOUND,
      message: 'User not found',
    });
  }

  async getDetailNote(req: Request, res: Response) {
    const { noteId } = req.params;

    const { isSuccess, data, error } = await this.noteService.getNoteById(
      parseInt(noteId),
    );

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Note retrieved successfully',
        data,
      });
    }
    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.NOT_FOUND,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to retrieve',
    });
  }

  async deleteNote(req: Request, res: Response) {
    const { noteId } = req.params;

    const { isSuccess, error } = await this.noteService.deleteNote(
      parseInt(noteId),
    );

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Note deleted successfully',
      });
    }
    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.NOT_FOUND,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to delete note',
    });
  }
}

export { NoteController };
