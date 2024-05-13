import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3d818e11-8df7-444d-9cf7-097abf912e2b',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e1e882f9-7d52-4f9c-8c9e-69c6985d4d66',
};

export const sampleWithFullData: IAuthority = {
  name: '4c3e66f9-471f-4b8f-a5c9-d03fae354820',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
