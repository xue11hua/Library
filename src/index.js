import Button from '@/components/button/button.vue' //引入组件
import ButtonGroup from '@/components/button-group/button_group.vue'
import Checkbox from '@/components/checkbox/checkbox.vue'
const IngtubeComponents={ //全局注册组件
    install(Vue,options){
        Vue.component(Button.name,Button);
        Vue.component(ButtonGroup.name,ButtonGroup)
        Vue.component(Checkbox.name,Checkbox)
    }
}
export default IngtubeComponents