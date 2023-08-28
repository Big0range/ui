
/**
 * 文件下载
 * @param blob  文件流
 * @param fileName  文件名
 */
export async function downloadFile(blob: Blob, fileName: string) {
  // FileReader主要用于将文件内容读入内存
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  // onload当读取操作成功完成时调用
  await new Promise<void>((resolve,reject) => {
    reader.onload = function (e) {
      const a = document.createElement('a');
      // 获取文件名fileName
      a.download = fileName;
      a.href = e.target?.result as any;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      resolve();
    };
    reader.onerror = reject
  })
}

/**
 * 图片下载
 * @param imgUrl 图片地址
 * @param fileName  图片名称
 */
export async function downloadImg(imgUrl: string, fileName: string, imgType: "image/jpeg"
| "image/webp"
| "image/png"
| "image/bmp"
| "image/tiff"
| "image/svg+xml" = "image/png") {
  const image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous');
  image.src = imgUrl;

  await new Promise<void>((resolve,reject) => {
    image.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      context.drawImage(image, 0, 0, image.width, image.height);
      const url = canvas.toDataURL(imgType); //得到图片的base64编码数据
      const a = document.createElement('a'); // 生成一个a元素
      const event = new MouseEvent('click'); // 创建一个单击事件
      a.download = fileName; // 设置图片名称
      a.href = url; // 将生成的URL设置为a.href属性
      a.dispatchEvent(event); // 触发a的单击事件
      resolve();
    };
    image.onerror = reject
  })
}
