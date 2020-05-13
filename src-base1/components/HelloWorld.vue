<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {// 配置对象与vue一直
  data () { // 必须写函数
    return {
      msg: 'hello vue component'
    }
  }
}
</script>

<style scoped>
  .msg{
    color: red;
  }
</style>
