<!-- <script setup>
  import { ref } from 'vue';
  const loop = ref(0)
</script> -->

<script>
  export default {

    data(){
      return {
        loop:0,
        image:"ending.png",
        hidden:true,
      }
    },

    methods:{
      tambah(){
        this.loop++
      },
      toggleHidden(){
        this.hidden = !this.hidden;
      }
    },

    created(){  
      console.log("first")
    },

    mounted(){
      console.log("Hai")
    }
  }
</script>

<template>
  <main>
    <h1 @click="tambah" >Hello Word {{ loop }}</h1>
    <h1 v-if="!hidden" >Aku bersembunyi</h1>
    <img @click="toggleHidden" v-bind:src="`/images/${image}`" />
  </main>
</template>