import { atom } from 'recoil';

export const oauth = atom({
  key: 'token',
  default: null,
});
