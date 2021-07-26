<template>
    <div>
        axios.vue 页面
        <br>
        <a-button type="primary" @click="getUserinfo">用户信息</a-button>
        <div class="k_top"  v-if="userInfo?.name">
        <a-card-meta :title="userInfo?.name" :description="userInfo?.bio">
          <template #avatar>
            <a-avatar :src="userInfo?.avatar_url" />
          </template>
        </a-card-meta>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref} from 'vue'
import axios from 'axios'

export default defineComponent({
    setup () {
      const userInfo: Ref = ref(null)
      const getUserinfo =()=>{
        axios
        .get('https://api.github.com/users/hzjsj')
        .then((res) => {
          console.log('res: ', res)
          userInfo.value = res.data;
          console.log('userInfo: ', userInfo)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
      }
        

        return {
          userInfo,
          getUserinfo
        }
    }
})
</script>

<style scoped>
.k_top{
  margin-top: 20px;
}
</style>