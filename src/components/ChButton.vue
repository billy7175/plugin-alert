<template>
    <button @click="$emit('click')" :class="['ch-button', `${type}`]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"Button",
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

.ch-button.is-primary {
    background:#3E57C9; color:#fff; 
}
</style>