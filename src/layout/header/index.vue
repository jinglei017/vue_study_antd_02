<template>
  <a-dropdown-button>
    Dropdown
    <template #overlay>
      <a-menu>
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </template>
    <template #icon>
      <UserOutlined />
    </template>
  </a-dropdown-button>
</template>
<script>
import { UserOutlined } from "@ant-design/icons-vue";
export default {
  components: { UserOutlined },
};
</script>