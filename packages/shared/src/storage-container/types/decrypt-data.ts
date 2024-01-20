import { ObjectReturnType } from './decrypt-commonTypes';
import {
  DecryptDataModel,
  GetDateReturnType,
  GetHrefReturnType,
  GetValueReturnType,
} from './decryptDataType';
import DecryptObjectModel from './decryptObjectType';

export class DecryptData implements DecryptDataModel {
  value: number | string | null;
  date: number | null;
  href: string | null;

  constructor(props: DecryptObjectModel) {
    this.value = props.value || null;
    this.date = props.date || null;
    this.href = props.href || null;
  }

  getValue(): GetValueReturnType {
    return this.value;
  }

  getDate(): GetDateReturnType {
    return this.date;
  }

  getHref(): GetHrefReturnType {
    return this.href;
  }

  getObject(key?: string): ObjectReturnType {
    try {
      const parsedValue = JSON.parse((this.value ?? '').toString());
      return key ? parsedValue[key] ?? null : parsedValue;
    } catch (err) {
      console.error(`decrypt-data.ts in Error`);
      return {};
    }
  }
}
