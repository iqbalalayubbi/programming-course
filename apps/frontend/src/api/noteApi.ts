import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { NoteStore } from '@/stores';

class NoteApi extends ApiService {
  public async getNotesByUsername(
    username: string,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(
        `${apiPath.NOTES}?user_username=${username}`,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async createNote(
    data: NoteStore,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(`${apiPath.NOTES}`, data);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getNoteById(
    noteId: number,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(`${apiPath.NOTES}/${noteId}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async deleteNoteById(
    noteId: number,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.delete(`${apiPath.NOTES}/${noteId}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async updateNote(
    noteId: number,
    data: NoteStore,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.patch(`${apiPath.NOTES}/${noteId}`, data);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { NoteApi };
