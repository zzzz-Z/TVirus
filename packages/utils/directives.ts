import {
  withDirectives,
  VNode,
  vShow,
  ObjectDirective,
  vModelDynamic,
  vModelRadio
} from 'next-vue'
interface OutEl extends HTMLElement {
  _handler(e: Event): void
}

/** as vshow */
export const withVshow = (node: VNode, exp: boolean) => {
  return withDirectives(node, [[vShow, exp]])
}
/** as vif */
export const withVif = (node: VNode, exp: any) => {
  return exp ? node : null
}

export const withVModel = (node: VNode, arg: any, mods?: any) =>
  withDirectives(node, [[vModelDynamic, arg, '', mods]])

export const withClickoutside = (node: VNode, cb: () => void) => {
  return withDirectives(node, [[clickoutside, cb]])
}

const clickoutside: ObjectDirective = {
  mounted(el: OutEl, binding) {
    el._handler = evt => {
      if (!el.contains(evt.target as HTMLElement)) {
        binding.value(evt)
      }
    }

    document.addEventListener('click', el._handler)
  },
  unmounted(el: OutEl) {
    document.removeEventListener('click', el._handler)
  }
}

// const vif:ObjectDirective = {
//   beforeMount(el, { value }, { transition }) {
//     value && transition?.beforeEnter(el)
//   },
//   mounted(el, { value }, { transition}) {
//     el.preEl = el.previousElementSibling
//     value
//       ? transition?.beforeEnter(el)
//       : el.parentNode?.removeChild(el)
//   },
//   updated(el, { value, oldValue }, {transition}) {
//     if (!value === !oldValue) return
//     if(value){
//       transition?.beforeEnter(el)
//       el.preEl.after(el)
//     }else{
//       transition?.leave(el,()=>{
//         el.parentNode?.removeChild(el)
//       })
//     }
//   }
// }