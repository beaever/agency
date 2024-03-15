import C from 'crypto-js';
import { DecryptData } from './decrypt-data';
import { DecryptDataModel } from './decryptDataType';
import { splitter, ck, sk } from '../constant/constant';

/** @description 암호화 함수 */
export const enc = (props: string | number): string => {
  /** @description number 데이터의 경우 to String 필요 */
  const convertProps = String(props);

  /** @description 데이터 암호화 시 암호화할 데이터 + 암호화 시점 + 암호화된 URL 합하여 암호화 */
  const decoding = `${convertProps}${splitter}${new Date().valueOf()}${splitter}${
    window.location.href
  }`;

  // 이중 암호화
  return C.AES.encrypt(C.AES.encrypt(decoding, ck ?? '').toString(), sk ?? '')
    .toString()
    .replace(/\//gi, 'nsd-dec');
};

/** @description 복호화 함수 */
export const dec = (e: string): DecryptDataModel => {
  /** @description 이중 암호호된 데이터 복호화 */
  const doubleEncryptionDecrypt = C?.AES?.decrypt(
    C.AES.decrypt(e.replace(/nsd-dec/gi, '/'), sk ?? '').toString(C.enc.Utf8),
    ck ?? ''
  )
    ?.toString(C.enc.Utf8)
    ?.split(splitter ?? '');

  /** @description 실질적 데이터가 number인 경우 parseInt하여 전달 (암호화된 실질적 데이터) */
  const value = Number.isNaN(parseInt(doubleEncryptionDecrypt[0] ?? ''))
    ? doubleEncryptionDecrypt[0] ?? ''
    : parseInt(doubleEncryptionDecrypt[0] ?? '');

  /** @description 암호화 시점 */
  const date = parseInt(doubleEncryptionDecrypt[1] ?? '');
  /** @description 암호화된 URL */
  const href = doubleEncryptionDecrypt[2] ?? '';

  /** @description 직접접근 불가능한 데이터로 반환 */
  return new DecryptData({ value, date, href });
};

/**
 * @description 로컬스토리지 key 반환 함수이며, sha256의 경우 단방향 암호화이기 때문에 복호화는 불가능하지만 값이 일정하므로
 * key값 암호화 방식으로 채택 */
export const encSha256 = (e: string): string => C.SHA256(e).toString();
