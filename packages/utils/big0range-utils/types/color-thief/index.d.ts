/**
 * 提取图片中的主题色
 * @param sourceImage  图片元素
 * @param quality default 10 提取准确度 数字越大准确度越低
 * @returns [number,number,number]
 */
declare function getColor(sourceImage: HTMLImageElement, quality?: number): [number, number, number];
/**
 * 取色板
 * @param sourceImage  图片元素
 * @param colorCount default 8 需要提取的颜色数量
 * @param quality  default 10 提取准确度 数字越大准确度越低
 * @returns [number,number,number][]
 */
declare function getPalette(sourceImage: HTMLImageElement, colorCount?: number, quality?: number): [number, number, number][];
/**
 * 从图片url中提取主题色
 * @param imageUrl  图片地址
 * @param quality default 10 提取准确度 数字越大准确度越低
 * @returns Promise<[number,number,number] | null>
 */
declare function getColorFromUrl(imageUrl: string, quality?: number): Promise<[number, number, number]>;
/**
 * 图片转base64
 * @param imageUrl 图片地址
 * @returns  Promise<图片base64 string>
 */
declare function getImageData(imageUrl: string): Promise<string>;
/**
 * @function getPalette  取色板
 * @function getColorFromUrl 提取图片中的主题色
 * @function getImageData 图片转base64
 * @function getColor 从图片url中提取主题色
 */
export declare const ColorThief: {
    getPalette: typeof getPalette;
    getColorFromUrl: typeof getColorFromUrl;
    getImageData: typeof getImageData;
    getColor: typeof getColor;
};
export {};
