<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="6"></a-col>
      <div class="login-container-f">
        <h2 class="login-title">vue3-admin登陆页面</h2>
        <a-form :model="form" @submit.prevent class="login-form">
          <h2 class="title">用户登录 LOGIN</h2>
          <a-form-item>
            <a-input
              v-model:value="form.username"
              size="large"
              placeholder="username"
            >
              <template v-slot:prefix><UserOutlined type="user" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="password"
              v-model:value="form.password"
              placeholder="password"
            >
              <template v-slot:prefix><UnlockOutlined type="user" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="onSubmit" size="large" block
              >登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </a-row>
  </div>
</template>

<script>
import { UserOutlined, UnlockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
import { useStore } from "vuex";
import router from "../../router/index";
export default defineComponent({
  name: "Login",
  components: {
    UserOutlined,
    UnlockOutlined,
  },
  setup() {
    const state = reactive({
      form: {
        username: "",
        password: "",
      },
    });

    const store = useStore();

    const onSubmit = async () => {
      const { username, password } = state.form;
      if (
        username == undefined ||
        password == undefined ||
        username.trim() == "" ||
        password.trim() == ""
      ) {
        return message.warning("用户名和密码不能为空！");
      }
      const res = await store.dispatch('LoginResult', state.form);
      console.log(res);
      console.log(store.state.token);
      router.push('/')
    };
    return {
      ...toRefs(state),
      onSubmit,
    };
  },
});
</script>
<style scoped>
.login-container-f {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-form {
  width: 565px;
  height: 372px;
  margin: 0 auto;
  background: url("~@/assets/images/login/houTaiKuang.png");
  padding: 40px 110px;
  display: flex;
  background-size: 100% 100%;
  align-items: center;
  flex-direction: column;
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/login/loginback.png") no-repeat;
  background-size: cover;
}

/* Log */
.login-title {
  color: #fff;
  text-align: center;
  margin: 100px 0 60px 0;
  font-size: 36px;
  font-family: Microsoft Yahei;
}
/* 登陆按钮 */
.submit {
  width: 100%;
  height: 45px;
  font-size: 16px;
}
/* 用户登陆标题 */
.title {
  margin-bottom: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  font-family: Microsoft Yahei;
}
/* 输入框 */
.inputBox {
  height: 45px;
}
/* 输入框内左边距50px */
.ant-input-affix-wrapper .ant-input:not(:first-child) {
  padding-left: 50px;
}
</style>
