<template>
  <div>
    <img src="./assets/logo.png" alt="logo" class="logo">
    <HelloWorld/>
  </div>
</template>

<script>
// 引入组件
import HelloWorld from './components/HelloWorld'
export default {
  // 映射标签
  components:
    {
    HelloWorld
  }
}
</script>

<style>
  .logo{
    width:80px;
    height:80px;
  }
</style>
