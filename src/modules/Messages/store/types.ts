import { StatusEnum } from './constants';

export interface MessagesState {
  unreadMessages: {
    count: number;
    status: StatusEnum;
    error: ErrorType;
  };
}

export type ErrorType = {
  title?: string;
  detail?: string;
};