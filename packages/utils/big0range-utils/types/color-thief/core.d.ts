declare function createPixelArray(imgData: Uint8ClampedArray, pixelCount: number, quality: number): number[][];
declare function validateOptions(options: {
    colorCount: number;
    quality: number;
}): {
    colorCount: number;
    quality: number;
};
declare const _default: {
    createPixelArray: typeof createPixelArray;
    validateOptions: typeof validateOptions;
};
export default _default;
