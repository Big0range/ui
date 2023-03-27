import demo from './demo.vue'
import { withInstall } from '@big0range/utils'
const Demo = withInstall(demo)
export default Demo
export type DemoApi = {
    getImageData: () => { bolb: Blob, base64: string }[]
}