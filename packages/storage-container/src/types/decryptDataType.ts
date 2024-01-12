import { ObjectReturnType } from './decrypt-commonTypes';

export interface DecryptDataModel {
  getValue: () => string | number | null;
  getDate: () => number | null;
  getHref: () => string | null;
  getObject: (key?: string) => ObjectReturnType;
}

export type GetValueReturnType = number | string | null;
export type GetDateReturnType = number | null;
export type GetHrefReturnType = string | null;
