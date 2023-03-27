import Crop from './crop.vue'
import { withInstall } from '@big0range/utils'
const BiCrop = withInstall(Crop)
export default BiCrop
export type BiCropApi = {
    getImageData: () => { bolb: Blob, base64: string }[]
    verify: () => boolean
}