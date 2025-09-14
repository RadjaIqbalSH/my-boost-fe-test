import { IResponseApi } from "@/interfaces/responseApi";

export interface IResponseApiWrapper<T> {
  code: number;
  msg: string;
  data: T;
}

export const responseApiWrapper = <T>(
  payload: IResponseApiWrapper<T>
): IResponseApi<T> => {
  const { code, msg, data } = payload;
  return {
    meta: {
      code,
      msg,
    },
    data,
  };
};
