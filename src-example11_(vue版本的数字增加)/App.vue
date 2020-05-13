<template>
  <div>
     <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">odd</button>
    <button @click="incrementAsync">async</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    // 增加1
    increment () {
      let count = this.count
      this.count = count + 1
    },
    // 减1
    decrement () {
      let count = this.count
      this.count = count - 1
    },
    // 如果是奇数，就+1
    incrementIfOdd () {
      let count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    // 过1秒增加1
    incrementAsync () {
      setTimeout(() => {
        let count = this.count
        this.count = count + 1
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
