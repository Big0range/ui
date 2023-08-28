import hanziWriterVue from './hanziWriter.vue'
import { withInstall } from '@big0range/utils'
const BiHanziWriter = withInstall(hanziWriterVue)

// export default HanziWriter
import  hanziWriter from 'hanzi-writer'
export  {
    BiHanziWriter,
    hanziWriter
}
