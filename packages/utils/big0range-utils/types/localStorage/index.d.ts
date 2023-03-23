/**
 * 浏览器永久缓存
 * @function set 设置永久缓存
 * @function get 获取永久缓存
 * @function remove 移除永久缓存
 * @function clear 移除全部永久缓存
 */
declare const _default: {
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
export default _default;
