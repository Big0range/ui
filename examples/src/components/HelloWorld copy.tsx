import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  provide,
  ref,
  renderSlot,
  watch,
} from 'vue'
export default defineComponent({
  name: 'ElTabs',
  setup(props, { slots }) {
    console.log(slots)
    const Demo = slots.default!()
    return ()=>{
      return <div>{renderSlot(slots,'default')}</div>
    }
  }
})