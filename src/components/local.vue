<script setup>
    const {text} = defineProps({
        text:String,
    })
    const event = defineEmits(["print"])
    event("print","first")
</script>


<template>
    <h4 @click="$emit('print','Hello word')" >Props yang kamu masukkan adalah {{ text }}</h4>
</template>