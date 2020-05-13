<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <list :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  data(){
    return {
      comments: [
        {name:'tom',content:'good'},
        {name:'bob',content:'soewa'},
        {name:'cat',content:'hard'}
      ]
    }
  },
  methods:{
    //添加评论
    addComment(comment){
      this.comments.unshift(comment)
    },
    //删除指定下标的评论
    deleteComment(index){
      this.comments.splice(index,1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style scoped>

</style>
