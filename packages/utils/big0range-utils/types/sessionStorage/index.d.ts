/**
 * 浏览器临时缓存
 * @function set 设置临时缓存
 * @function get 获取临时缓存
 * @function remove 移除临时缓存
 * @function clear 移除全部临时缓存
 */
declare const _default: {
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
export default _default;
