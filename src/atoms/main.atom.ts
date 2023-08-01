import { atomWithStorage, createJSONStorage, loadable } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';

export interface ILoadableData<T> {
  state: 'hasData' | 'loading' | 'hasError';
  data: T;
}

export interface ILogin {
  token: string;
  email: string;
}

const storage = createJSONStorage(() => AsyncStorage);

const loginAtom = atomWithStorage('login-key', {}, storage);
const readOnlyLoadableAtom = loadable(loginAtom);
export const writableLoadableAtom = atom(
  (get) => get(readOnlyLoadableAtom),
  (_get, set, arg) => {
    set(loginAtom, arg);
  },
);
