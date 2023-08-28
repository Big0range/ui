interface IOptions {
    width?: number;
    height?: number;
    lineWidth?: number;
    lineColor?: string;
    bgColor?: string;
    bgImage?: string | HTMLImageElement;
}
interface IPonit {
    data: {
        x: number;
        y: number;
    }[];
    lineWidth: number;
    lineColor: string;
}
const defaultOptions = {
    width: 300,
    height: 150,
    lineWidth: 2,
    lineColor: '#fff',
    bgColor: '#000',
    bgImage: ''
}
type TOnType = 'change' | 'demo'
type TOnChangeCb = {
    totalStep: number,
    totalPoints: IPonit[],
    currentStep: number,
    currentPoints: IPonit
}
export class CanvasSign {
    /**
     * canvas 元素
     */
    private canvas: HTMLCanvasElement
    /**
     * 配置选项
     */
    private options: Required<IOptions> = { ...defaultOptions }
    /**
     * canvas 上下文
     */
    private ctx: CanvasRenderingContext2D
    private stop: boolean = true;
    /**
     * 鼠标坐标X
     */
    private X: number = 0;
    /**
     * 鼠标坐标Y
     */
    private Y: number = 0;
    /**
     * 点坐标总集合
     * 每一个对象代表一个笔画
     */
    private points: IPonit[] = [];
    /**
     * 当前点坐标集合
     * 每一个对象代表一个笔画
     */
    private currentPoints: IPonit[] = [];
    /**
     * 当前笔画
     */
    private currentPoint: IPonit = {
        data: [],
        lineWidth: this.options.lineWidth,
        lineColor: this.options.lineColor
    };
    /**
     * 回调函数数组
     */
    private callbacks: {
        type: TOnType;
        fn: (...args: any[]) => void;
    }[] = [];
    /**
     * 构造函数
     * @param ele HTMLElement
     * @param opt IOptions
     */
    constructor(ele: HTMLElement, opt?: IOptions) {
        // 创建canvas元素
        this.canvas = document.createElement('canvas');
        // 创建上下文
        this.ctx = this.canvas.getContext('2d')!;
        // 合并配置选项
        this.options = { ...this.options, ...opt };
        // 设置canvas宽高
        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;
        // this.canvas.style.border = '1px solid #ccc';
        this.ctx.lineCap = "round";
        ele.appendChild(this.canvas);

        this.init();
    }
    getThis() {
        return this;
    }
    /**
     * 上一步
     */
    prev() {
        if (this.points.length > 0 && this.currentPoints.length !== 0) {
            this.currentPoints = this.points.slice(0, this.currentPoints.length - 1);
            this.draw();
        }
    }
    /**
     * 下一步
     */
    next() {
        if (this.points.length > 0 && this.currentPoints.length !== this.points.length) {
            this.currentPoints = this.points.slice(0, this.currentPoints.length + 1);
            this.draw();
        }
    }
    async draw() {
        console.log('重绘')
        // 清空画布
        this.ctx.clearRect(0, 0, this.options.width, this.options.height);
        // 重绘背景
        await this.init(true);
        // 重绘笔画
        this.currentPoints.forEach((item) => {
            this.ctx.lineWidth = item.lineWidth;
            this.ctx.strokeStyle = item.lineColor;
            this.ctx.beginPath();
            for (let index = 0; index < item.data.length; index++) {
                const point = item.data[index];
                const prevPoint = item.data[index - 1];
                if (index !== 0) {
                    this.ctx.moveTo(prevPoint.x, prevPoint.y);
                    this.ctx.lineTo(point.x, point.y);
                }
            }
            this.ctx.stroke();
        });
    }
    /**
     * 初始化
     */
    private async init(noBindEvent?: boolean) {
        // 设置背景颜色
        this.ctx.fillStyle = this.options.bgColor;
        this.ctx.fillRect(0, 0, this.options.width, this.options.height);
        // 设置背景图片
        if (this.options.bgImage) {
            let img: HTMLImageElement;
            if (typeof this.options.bgImage === 'string') {
                img = await new Promise<HTMLImageElement>((resolve, reject) => {
                    const image = new Image();
                    image.setAttribute('crossOrigin', 'anonymous');

                    image.src = this.options.bgImage as string;
                    image.onload = () => {
                        console.log(image.width, image.height)
                        resolve(image)
                    }
                    image.onerror = (e) => {
                        reject(e)
                    }
                })
            } else {
                img = this.options.bgImage as HTMLImageElement;
                img.setAttribute('crossOrigin', 'anonymous');
                if (!img.complete) {
                    console.log('https://big0range.github.io/ui/logo.png')

                    await new Promise<void>((resolve, reject) => {
                        img.onload = () => {
                            resolve()
                        }
                        img.onerror = reject
                    })
                }

            }
            const wRatio = this.options.width / img.width;
            const hRatio = this.options.height / img.height;
            if (wRatio > hRatio) {
                img.width = img.width * wRatio;
                img.height = img.height * wRatio;
            } else {
                img.width = img.width * hRatio;
                img.height = img.height * hRatio;
            }
            // 高度差
            const hDiff = img.height - this.options.height;
            // 宽度差
            const wDiff = img.width - this.options.width;
            console.log(img.width, img.height)
            this.ctx!.drawImage(img, -wDiff / 2, -hDiff / 2, img.width, img.height);
        }

        // 插入到dom元素中
        if (!noBindEvent) {
            // 绑定事件
            this.bindEvent();
        }
    }
    /**
     * 绑定事件
     */
    private bindEvent() {
        console.log('bindEvent')
        // 判断是pc端还是移动端
        // 如果是移动端
        this.canvas.addEventListener('touchstart', this.handleMouseDown.bind(this));
        // 绑定触摸移动事件
        this.canvas.addEventListener('touchmove', this.handleMouseMove.bind(this));
        // 绑定触摸结束事件
        this.canvas.addEventListener('touchend',this.handleMouseUp.bind(this));
         // 绑定鼠标按下事件
         this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
         // 绑定鼠标移动事件
         this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
         // 绑定鼠标抬起事件
         this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));

    }
    /**获取xy */
    private getXY(e: MouseEvent | TouchEvent) {
        let x: number, y: number;
        // 区分MouseEvent还是TouchEvent
        if (e instanceof TouchEvent) {
            x = e.touches[0].clientX - this.canvas.offsetLeft;
            y = e.touches[0].clientY - this.canvas.offsetTop;
        } else {
            x = e.offsetX;
            y = e.offsetY;
        }
        return { x, y }
    }
    /**
     * 鼠标按下事件
     * @param e MouseEvent
     */
    private handleMouseDown(e: MouseEvent | TouchEvent) {
        const { x, y } = this.getXY(e);
        // x 坐标
        this.stop = false;

        // 设置画笔宽度
        this.ctx.lineWidth = this.options.lineWidth;
        // 设置画笔颜色
        this.ctx.strokeStyle = this.options.lineColor;

        // 记录下x,y坐标
        this.X = x;
        this.Y = y;

        // 创建新的笔画
        this.currentPoint = {
            data: [{ x: x, y: y }],
            lineWidth: this.options.lineWidth,
            lineColor: this.options.lineColor
        }
    }
    /**
     * 鼠标移动事件 
     * @param e MouseEvent
     */
    private handleMouseMove(e: MouseEvent | TouchEvent) {
        if (this.stop) return;
        const { x, y } = this.getXY(e);
        // 开始绘制
        this.ctx.beginPath();
        // 绘制开始点
        this.ctx.moveTo(this.X, this.Y);
        // 记录下x,y坐标
        this.X = x;
        this.Y = y;
        // 绘制结束点
        this.ctx.lineTo(x, y);
        // 绘制结束点
        this.ctx.stroke();
        // 记录当前笔画
        this.currentPoint.data.push({ x: x, y: y });
    }
    /**
     * 鼠标抬起事件
     * @param e MouseEvent
     */
    private handleMouseUp(e: MouseEvent|TouchEvent) {
        console.log('handleMouseUp')
        this.stop = true;
        this.currentPoints.push(this.currentPoint);
        this.points = [...this.currentPoints];
    }
    /**
     * 设置画笔颜色
     * @param color string
     */
    setLineColor(color: string) {
        this.options.lineColor = color;
    }
    /**
     * 设置画笔宽度
     * @param width number
     */
    setLineWidth(width: number) {
        this.options.lineWidth = width;
    }

    private change(cb: (data: {
        totalStep: number,
        totalPoints: IPonit[],
        currentStep: number,
        currentPoints: IPonit
    }, ...args: any[]) => void) {
        const data = {
            totalStep: this.points.length,
            totalPoints: this.points,
            currentStep: this.currentPoints.length,
            currentPoints: this.currentPoints[-1]
        }
        cb(data);
    }
    on(type: 'change', cb: {
        totalStep: number,
        totalPoints: IPonit[],
        currentStep: number,
        currentPoints: IPonit
    }): void
    on(type: TOnType, cb: {
        totalStep: number,
        totalPoints: IPonit[],
        currentStep: number,
        currentPoints: IPonit
    }) {
        if (type === 'change') {
            cb = cb as TOnChangeCb
        }
    }
    download(fileName: string, imgType: "image/jpeg"
        | "image/webp"
        | "image/png"
        | "image/bmp"
        | "image/tiff"
        | "image/svg+xml" = "image/png") {
        const link = document.createElement('a');
        link.download = fileName;
        link.href = this.canvas.toDataURL(imgType);
        link.click();
        link.remove();
    }
}