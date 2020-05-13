<template>
  <div>
    <div>home</div>
    <div>
    <u1 class="nav nav-tabs">
      <li>
        <router-link to="/home/news">news</router-link>
        <router-link to="/home/message">message</router-link>
      </li>
    </u1>
    <div>
      <router-view></router-view>
    </div>
</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
