<template>
  <div class="page-container">
    <div>
      <h1>403</h1>
      <h1>当前页面不存在...</h1>
      <router-link to="/" class="ant-btn ant-btn-primary">回到首页</router-link>
    </div>
    <img class="error-img" src="~@/assets/images/error/403.jpg" alt="403" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "403",
});
</script>
<style scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.error-img {
  width: 450px;
  height: auto;
  padding-left: 16px;
}
</style>