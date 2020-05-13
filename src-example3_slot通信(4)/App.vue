<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <h1>slot通信的是标签，其它通信的是数据</h1>
      <!-- 监听方式1 <todo-header @addToto="addToto"/>   给totoHeader标签对象绑定addtodo事件监听-->
      <todo-header ref="header"/>
      <todo-list :todos="todos" />
      <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>

      <!--使用slot组件，计算属性在父组件运行编译之后，才会引入到子组件，所有的代码应该放在父组件-->
      <todo-footer>
        <input type="checkbox" v-model="isAllChecked" slot="checkAll"/>
        <span slot="count">已完成{{complateSize}} / 全部{{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="complateSize>0" @click="deleteCompleteTodos">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<!--
绑定事件监听---订阅消息
触发事件------发布消息



-->


<script>
  import Pubsub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  export default {
    data(){
      return {
        //从localstory读取todos   json字符串转为对象
        todos: JSON.parse( window.localStorage.getItem('todos_key')||'[]')
      }
    },
    computed:{
      complateSize(){
        //如果为true则是已经完成
        return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complate?1:0),0)
      },
      isAllChecked:{
        //回调函数，当获取值的时候自动调用绑定的时候就调用了，把返回值作为属性值
        get(){
          return this.complateSize==this.todos.length && this.complateSize>0
        },
        //当属性值发生改变时候再去调用，同步更新其他属性的值
        set(value){//value是当前checkbox最新的值
          this.selectAllTodos(value)
        }
      }
    },
    mounted () {//执行异步代码
      //给< TodoHeader/>绑定addTodo事件监听  第二个参数为回调函数
      //this.$on('addToto',this.addToto)
      this.$refs.header.$on('addToto',this.addToto)
      //订阅消息
      Pubsub.subscribe('deleteTo', (msg,index)=> {
          this.deleteTo(index)
      })
    },
    watch:{//监视
      todos:{
        deep:true,//深度监视
        handler:function (value) {
          //将todos最新的json数据保存到localstoryage    对象转为json字符串
          window.localStorage.setItem('todos_key',JSON.stringify(value))
        }
      }
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    methods:{
      addToto(todo){
        this.todos.unshift(todo)
      },
      deleteTo(index){
        this.todos.splice(index,1)
      },
      //删除所有选中
      deleteCompleteTodos(){
        //留下没有选中的
        this.todos=this.todos.filter(todo=>!todo.complate)
      },
      //全选，全不选
      selectAllTodos(check){
        this.todos.forEach(todo=>todo.complate=check)
      }
    }
  }
</script>

<style scoped>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
