<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star is<a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        repoUrl:'',
        repoName:'repoName'
      }
    },
    mounted () {
      //resource发ajax请求，获取请求数据，在main.js全局引入
      const url=`https://api.github.com/search/repositories?q=v&sort=stars`
   /*   this.$http.get(url).then(
        response=>{
          //成功了
          const result=response.data
          //得到第一个最受欢迎的
          const mostRepro=result.items[0]
          console.log(mostRepro)
          this.repoUrl=mostRepro.owner.html_url
          this.repoName=mostRepro.name
        },
        response=>{
          alert('请求失败')
        }
      )*/


      //使用axios发送ajax请求,在哪里使用在哪里引入
      axios.get(url).then(
        response=>{
          //成功了
          const result=response.data
          //得到第一个最受欢迎的
          const mostRepro=result.items[0]
          console.log(mostRepro)
          this.repoUrl=mostRepro.owner.html_url
          this.repoName=mostRepro.name
        }
      ).catch(error=>{
        alert(22222)
      })
    }
  }
</script>

<style scoped>

</style>
