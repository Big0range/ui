import quantize from '@lokesh.dhakar/quantize'
import core from './core.js';

function canvasImage(image: HTMLImageElement) {
    image.setAttribute('crossOrigin', 'anonymous');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = image.width;
    const height = canvas.height = image.height;
    context!.drawImage(image, 0, 0, width, height)
    const getImageData = () => {
        return context!.getImageData(0, 0, width, height);
    }
    return { canvas, context, width, height, getImageData };
}
/**
 * 提取图片中的主题色
 * @param sourceImage  图片元素
 * @param quality default 10 提取准确度 数字越大准确度越低
 * @returns [number,number,number]
 */
function getColor(sourceImage: HTMLImageElement, quality = 10):[number,number,number] {
    const palette = getPalette(sourceImage, 5, quality);
    const dominantColor = palette![0];
    return dominantColor;
}
/**
 * 取色板
 * @param sourceImage  图片元素
 * @param colorCount default 8 需要提取的颜色数量
 * @param quality  default 10 提取准确度 数字越大准确度越低
 * @returns [number,number,number][]
 */
function getPalette(sourceImage: HTMLImageElement, colorCount: number = 8, quality: number = 10):[number,number,number][] {
    sourceImage.setAttribute('crossOrigin', 'anonymous');
    const options = core.validateOptions({
        colorCount,
        quality
    });

    // Create custom CanvasImage object
    const image = canvasImage(sourceImage);
    const imageData = image.getImageData();
    const pixelCount = image.width * image.height;

    const pixelArray = core.createPixelArray(imageData.data, pixelCount, options.quality);

    // Send array to quantize function which clusters values
    // using median cut algorithm
    const cmap = quantize(pixelArray, options.colorCount);
    const palette = cmap ? cmap.palette() : [];
    return palette;
}
/**
 * 从图片url中提取主题色
 * @param imageUrl  图片地址
 * @param quality default 10 提取准确度 数字越大准确度越低
 * @returns Promise<[number,number,number] | null>
 */
function getColorFromUrl(imageUrl: string, quality?: number): Promise<[number,number,number]> {
    return new Promise((resolve, reject) => {

        const sourceImage = document.createElement("img");
        sourceImage.setAttribute('crossOrigin', 'anonymous');
        sourceImage.addEventListener('load', () => {
            const palette = getPalette(sourceImage, 5, quality);
            const dominantColor = palette ? palette[0] : [] as any;
            resolve(dominantColor)
        });
        sourceImage.addEventListener('error', () => {
            reject()
        });
        sourceImage.src = imageUrl
    })

}
/**
 * 图片转base64
 * @param imageUrl 图片地址
 * @returns  Promise<图片base64 string>
 */
function getImageData(imageUrl: string):Promise<string> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', imageUrl, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            if (this.status == 200) {
                let uInt8Array = new Uint8Array(this.response);
                let i = uInt8Array.length;
                let binaryString = new Array(i);
                for (let i = 0; i < uInt8Array.length; i++) {
                    binaryString[i] = String.fromCharCode(uInt8Array[i]);
                }
                let data = binaryString.join('');
                let base64 = window.btoa(data);
                resolve('data:image/png;base64,' + base64)
            }
        }
        xhr.onerror = reject
        xhr.send();
    })
}
/**
 * @function getPalette  取色板
 * @function getColorFromUrl 提取图片中的主题色
 * @function getImageData 图片转base64
 * @function getColor 从图片url中提取主题色
 */
export const ColorThief = {
    getPalette,
    getColorFromUrl,
    getImageData,
    getColor
}