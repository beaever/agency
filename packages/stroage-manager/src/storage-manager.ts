import { dec, enc, encSha256 } from "./shared/passport";
import DecryptData from "./shared/decrypt-data";
import DecryptDataModel from "./shared/decryptDataType";
import { getHour } from "../../common/time";

/** @description INITALVALUE 비어있는 데이터 */
const INITAL_EMPTY_DECRYPT_DATA = new DecryptData({
  value: null,
  date: null,
  href: null,
});

/**
 * @returns maderi-token : { access : string , refresh : string } : API 토큰
 */
class StorageManager {
  /** @description 로컬 스토리지 데이터 암호화로 저장 */
  set(
    targetKey: string,
    targetValue: string | number | Object | Array<any>,
  ): void {
    const convertValue =
      typeof targetValue === "object"
        ? JSON.stringify(targetValue)
        : targetValue;
    const key = encSha256(targetKey);
    const value = enc(convertValue);

    localStorage.setItem(key, value);
  }

  /** @description 암호화된 로컬 스토리지 데이터 가져오기 */
  get(targetKey: string): DecryptDataModel {
    const key = encSha256(targetKey);
    const getItem = localStorage.getItem(key);
    // 값이 존재하는 경우에만 반환
    if (getItem) {
      /** @description 암호화된 데이터 복호화 */
      const decoding = dec(getItem);

      /** @description 일정 시간 지난 경우 요청한 데이터 삭제 */
      const expired =
        new Date().valueOf() - (decoding.getDate() ?? 0) > getHour(24);

      /** @description  유효시간이 지난 경우 데이터 삭제하고 비어있는 데이터 반환 */
      if (expired) {
        localStorage.removeItem(key);

        return INITAL_EMPTY_DECRYPT_DATA;
      }
      return decoding;
    }

    // 값이 존재하지 않은 경우 비어있는 데이터 반환
    return INITAL_EMPTY_DECRYPT_DATA;
  }

  /** @description 암호회된 특정 로컬 스토리지 데이터 삭제 */
  remove(targetKey: string): void {
    const key = encSha256(targetKey);
    localStorage.removeItem(key);
  }

  /** @description 로컬 스토리지 모두 비우기 */
  clean(): void {
    localStorage.clear();
  }
}

/** @description localStorage를 암호화를 하는 utill */
const storageManager = new StorageManager();

export default storageManager;
