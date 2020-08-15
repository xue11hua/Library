<template>
    <div>
        <button type="button" :disabled="disabled" :class="[type?'in-button__'+type:'',{'is-round':round}]" @click="handleClick" ><slot></slot></button>
    </div>
</template>
<script>
export default {
    name:'InButton',
    props:{
        type:String, //改变按钮样式
        disabled: Boolean,//是否禁止按钮
        round:Boolean
    },
    methods:{
        handleClick(e){
            this.$emit('click', e);
        }
    }
}
</script>
