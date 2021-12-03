<template>
    <button @click="$emit('click')" :class="['ch-button', `${type}`]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"ChButton",
    props: {
        type:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped>
.ch-button {
    padding:5px 10px;
     border-radius: 6px;
    font-weight:500;
}

.ch-button.is-primary {background:#3E57C9; color:#fff; }
.ch-button.is-warning {background:#da2020; color:#fff;} 
.ch-button.is-success {background:#3E57C9; color:#fff;} 
.ch-button.is-loading {background:#000; color:#fff;} 

</style>