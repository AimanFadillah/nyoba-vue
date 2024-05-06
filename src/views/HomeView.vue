<script setup >
  import { reactive, ref } from 'vue';
  import local from '@/components/local.vue';

  const loop = ref(1)
  const image = ref("ending.png")
  const hidden = ref(true)
  const input = ref("")
  const kumpulanBuah = reactive(["anggur","jeruk","mangga"])

  function tambah () {
    loop.value++
  }

  function toggleHidden () {
    hidden.value = !hidden.value
  }

  function print (text) {
    console.log(text)
  }

</script>

<template>
  <main>
    <h1 @click="tambah" :class="{'text-danger':loop % 2 === 0}" :style="{'font-size':20 * loop + 'px'}" >Klik saya yang ke {{ loop - 1 }}</h1>
    <h1 v-if="!hidden" >Baa</h1>
    <h1 v-else  >Ciluk</h1>
    <ul>
      <li v-for="(buah,index) in kumpulanBuah" :key="buah" >
         saya {{ buah }} nomor urut {{ index }}
      </li>
    </ul>
    <input type="text" v-model="input" >
    <h1>{{ input }}</h1>
    <global/>
    <local text="cihuyyy" v-model="input"@print="print" >
      <template #atas="props" >
        <h3>ini slot {{props.text}}</h3>
      </template>
      <template #bawah >
        <h3>ini slot bawah</h3>
      </template>
    </local>
    <h4>{{ $iniPlugin("aiman") }}</h4>
    <img @click="toggleHidden" v-bind:src="`/images/${image}`" />
  </main>
</template>

<style scoped>
  .text-danger{
    color:red
  }


</style>