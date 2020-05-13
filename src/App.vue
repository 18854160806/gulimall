<template>
  <div>
     <p>click {{$store.state.count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">odd</button>
    <button @click="incrementAsync">async</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
  /*  evenOrOdd () {
      return this.$store.getters.evenOrOdd
    } */
    ...mapState(['count']), // mapState()返回值: {count(){return this. $store. state[ 'count']}}
    ...mapGetters(['evenOrOdd'])// mapGetters( )返回值: {evenOr0dd() {return this. $store. getters[ 'evenOrOdd |}

  },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
  /* methods: {
    // 增加1
    increment () {
      // 通知vuex去增加
      /!*   let count = this.count
      this.count = count + 1 *!/
      this.$store.dispatch('increment')// 触发store中对应的action调用
    },
    // 减1
    decrement () {
      this.$store.dispatch('decrement')// 触发store中的action调用
    },
    // 如果是奇数，就+1
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')// 触发store中的action调用
    },
    // 过1秒增加1
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  } */
}
</script>

<style scoped>

</style>
