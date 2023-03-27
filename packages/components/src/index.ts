import { default as Button } from './button'
import { default as Demo,DemoApi } from './demo'
import { default as BiCrop, BiCropApi } from './crop'
import { default as CountTo } from './countTo'
import "element-plus/dist/index.css";
export {
    Button,
    Demo,
    CountTo,
    BiCrop
}
export type {
    DemoApi,
    BiCropApi
}
export default [Button, Demo, CountTo] 
