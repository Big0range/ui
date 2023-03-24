/**
 * 获取()=>Promise 的返回值类型
 */
export type PromiseReturnType<T> = T extends (...arg: any) => Promise<infer U>
? U
: any;

/**
 * 获取数组元素的类型 普通函数的返回类型 Promise的返回类型 ()=>Promise的返回类型
 */
export type Unpacked<T> = T extends null | undefined
  ? T
  : T extends (...args: any[]) => Promise<infer U>
  ? U
  : T extends (infer U)[]
  ? U
  : T extends Promise<infer U>
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T;