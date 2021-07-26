<template>
  <div>
    <div className="text-center text-sm text-bold">数据库</div>
    <div class="demo-content">
      <div class="json flex flex-direction">
        <div class="operations padding-bottom">
          <a-button type="primary" @click="insertData">新增数据</a-button>
          <div class="padding-sm">
            {{ shici }}
          </div>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="margin-bottom-sm text-xs">数据库读</div>
      <div class="demo-content">
        <div class="json flex flex-direction">
          <div class="operations padding-bottom-sm">
            <a-button type="primary" @click="getShic">获取数据</a-button>
          </div>
          <div
            class="ant-list ant-list-split ant-list-bordered"
            style="height: 300px; overflow-y: scroll"
          >
            <div class="ant-list-header">
              <div class="padding-sm">总计数量：{{ dataInfo?.total }}</div>
            </div>
            <div class="ant-spin-nested-loading">
              <div class="ant-spin-container">
                <ul class="ant-list-items">
                  <li
                    class="ant-list-item"
                    v-for="item in dataInfo?.data"
                    :key="item._id"
                  >
                    <div style="width: 100%">
                      <h1 class="text-center">{{ item.origin }}</h1>
                      <p class="text-center">
                        {{ item.content }}
                      </p>
                      <p class="text-right">{{ item.author }}</p>
                    </div>
                  </li>
                </ul>
                <a-empty :image="simpleImage"  v-if="!dataInfo?.data" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { message, Empty } from 'ant-design-vue';
import "../style/common.css";
import axios from "axios";
export default defineComponent({
  setup() {
    const API = "https://kdsa.cn/request/v1.0";
    const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
    const shici = ref();
    const dataInfo: Ref = ref(null);
    const insertData = () => {
      axios
        .get("https://v1.jinrishici.com/all.json")
        .then((res) => {
          console.log(res);
          shici.value = res.data;
          addData();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const key = 'updatable';
    const addData = () => {
        message.loading({ content: 'Loading...', key });
      axios
        .post(API + "/demo_web", {
          data: shici.value,
        })
        .then((res) => {
          console.log(res);
          message.success({ content: '添加数据成功！', key });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getShic = () => {
      axios
        .get(API + "/demo_web")
        .then((res) => {
          console.log(res);
          dataInfo.value = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return {
      shici,
      dataInfo,
      simpleImage,
      insertData,
      getShic,
    };
  },
});
</script>

<style scoped>
</style>