<template>
    <Layout/>
 
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/Layout.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

<style>
#app {
  height:100%;
}
</style>
