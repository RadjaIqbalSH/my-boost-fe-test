export interface IResponseApi<T> {
  meta: {
    code: number;
    msg: string;
  };
  data: T;
}
