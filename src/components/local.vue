<script setup>
import { inject } from 'vue';

    const {text} = defineProps({
        text:String,
    })
    const pesan = inject("pesan");
    const event = defineEmits(["print"])
    const model = defineModel();
    event("print","first")
    const vFocus = {
        mounted:(el) => el.focus()
    }
</script>


<template>
    <slot name="atas" text="atas"></slot>
    <h4 @click="$emit('print','Hello word')" >Props yang kamu masukkan adalah {{ text }}</h4>
    <h4>{{ pesan }}</h4>
    <input v-focus type="text" v-model="model">
    <slot name="bawah"></slot>
</template>