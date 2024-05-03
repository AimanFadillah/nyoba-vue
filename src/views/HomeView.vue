<!-- <script setup>
  import { reactive, ref } from 'vue';
  const loop = ref(0) // cocok untuk nyimpen value tunggal
  const object = reactive({
    loop:0
  }) // cocok untuk nyimpen value object
</script> -->

<script>
  export default {

    data(){
      return {
        loop:1,
        image:"ending.png",
        hidden:true,
        kumpulanBuah:["anggur","jeruk","mangga"]
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
    <h1 @click="tambah" :class="{'text-danger':loop % 2 === 0}" :style="{'font-size':20 * loop + 'px'}" >Klik saya yang ke {{ loop - 1 }}</h1>
    <h1 v-if="!hidden" >Baa</h1>
    <h1 v-else  >Ciluk</h1>
    <ul>
      <li v-for="(buah,index) in kumpulanBuah" >
         saya {{ buah }} nomor urut {{ index }}
      </li>
    </ul>
    <img @click="toggleHidden" v-bind:src="`/images/${image}`" />
  </main>
</template>

<style scoped>
  .text-danger{
    color:red
  }


</style>