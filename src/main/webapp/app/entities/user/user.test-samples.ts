import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 954,
  login: '3MM',
};

export const sampleWithPartialData: IUser = {
  id: 28524,
  login: 'E+NPNt@t6\\jCUQZy\\y1i\\(vjtRW',
};

export const sampleWithFullData: IUser = {
  id: 28882,
  login: '3i@mi5y\\M6S\\ZKmI\\?lO\\qz4\\^awQ2',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
