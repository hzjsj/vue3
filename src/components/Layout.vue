<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo">vite2 + vue3 + Ant Design</div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{
          lineHeight: '64px',
          justifyContent: 'flex-end',
        }"
      >
        <a-menu-item key="Github">
         
          <template #icon>
            <GithubOutlined />
          </template>
          <a href="https://github.com/hzjsj/vue3" target="_bank">Github</a>
          
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
            style="height: 100%"
          >
            <a-menu-item key="0">
              <router-link to="/"><span>Home</span></router-link>
            </a-menu-item>
            <a-menu-item key="1">
              <router-link to="/axios"><span>axios</span></router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/vuex"><span>vuex</span></router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/dataBase"><span>DataBase</span></router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/404"><span>404</span></router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', height: '570px' }">

          <router-view />

        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Copyright © 计算机小站 2018 - 2021
    </a-layout-footer>
  </a-layout>
</template>
  <script lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  GithubOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    GithubOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(["2"]),
      selectedKeys: ref<string[]>(["0"]),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
});
</script>
  <style>
.logo {
  float: left;
  color: aliceblue;
  font-size: 20px;
  font-weight: bolder;
}
.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
  