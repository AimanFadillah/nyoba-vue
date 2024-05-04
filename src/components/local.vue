<script setup>
    const {text} = defineProps({
        text:String,
    })
    const event = defineEmits(["print"])
    const model = defineModel();
    event("print","first")
</script>


<template>
    <slot name="atas" text="atas"></slot>
    <h4 @click="$emit('print','Hello word')" >Props yang kamu masukkan adalah {{ text }}</h4>
    <input type="text" v-model="model">
    <slot name="bawah"></slot>
</template>