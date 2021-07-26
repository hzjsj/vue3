<template>
  <div>
    <a-row>
    <a-col :span="8">
       <p> title value is: {{ title }}</p>
        <a-button type="primary" @click="delItem">修改title</a-button>
    </a-col>
    <a-col :span="8">
        <p>{{ token? token : '空值' }}</p>
    <a-button type="primary" @click="setToken" style="margin-right:12px;">存储token </a-button> 
    <a-button @click="getToken">取出token</a-button>
    
    </a-col>
    <a-col :span="8">
        <p>{{ count }}</p>
    <a-button type="primary" @click="double">count++</a-button>
    </a-col>
  </a-row>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    const title = ref(computed(() => store.state.title));
    const count = ref(computed(() => store.state.count));
    const token  = ref();
    const delItem = () => {
      store.commit("setItem", "hello，vuex");
    };
    const double = () => {
      store.commit("increment");
    };
    const setToken = () =>{
        localStorage.setItem("token", "QOH4Jt3xuihTcgFj0Ubprpxfr9s-zk");
    };
    const getToken = () =>{
        token.value = localStorage.getItem('token');
    }
    return {
      title,
      count,
      token,
      delItem,
      double,
      setToken,
      getToken
    };
  },
});
</script>

<style scoped>
</style>