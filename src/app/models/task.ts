import { ITime } from './time';

export interface ITask {
  id: number;
  name: string;
  project: string;
  dateStarted?: Date;
  dateEnded?: Date;
  time: ITime;
  isCurrent: boolean;
}
