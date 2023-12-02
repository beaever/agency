import ObjectReturnType from "./decrypt-commonTypes";

export default interface DecryptDataModel {
  getValue: () => string | number | null;
  getDate: () => number | null;
  getHref: () => string | null;
  getObject: (key?: string) => ObjectReturnType;
}
