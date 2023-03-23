/**添加水印 */
/**
 * @param {string} str 水印内容
 * @param {string} color 水印颜色
 */
declare function set(str: string, color?: string): void;
declare function clear(): void;
/**
 * @function set 添加水印
 * @function clear 清除水印
 */
declare const _default: {
    set: typeof set;
    clear: typeof clear;
};
export default _default;
