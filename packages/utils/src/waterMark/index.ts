/**添加水印 */
/**
 * @param {string} str 水印内容
 * @param {string} color 水印颜色
 */
function set(str: string, color: string = 'rgba(17, 17, 17, 0.2)') {
  clear();
  const canvas = document.createElement('canvas');
  canvas.id = 'watermark-canvas';
  document.body.appendChild(canvas);

  canvas.width = 165;
  canvas.height = 95;
  canvas.style.display = 'none';
  const cans = canvas.getContext('2d') as CanvasRenderingContext2D;
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = '16px Microsoft JhengHei';
  cans.fillStyle = color;
  cans.textAlign = 'left';
  cans.textBaseline = 'middle';
  cans.fillText(str, 30, 105, 200);
  const div = document.createElement('div');
  div.id = 'watermark-div';
  div.style.backgroundImage = 'url(' + canvas.toDataURL('image/png') + ')';
  div.style.position = 'fixed';
  div.style.zIndex = '99999999999';
  div.style.top = '0';
  div.style.bottom = '0';
  div.style.left = '0';
  div.style.right = '0';
  div.style['pointerEvents'] = "none";
  document.body.appendChild(div);
  document.body.removeChild(canvas);
}

function clear() {
  if (document.getElementById('watermark-div')) {
    document.body.removeChild(document.getElementById('watermark-div') as any);
  }
}
/**
 * @function set 添加水印
 * @function clear 清除水印
 */
export default {
  set,
  clear
};
