<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addToto="addToto"/>
      <todo-list :todos="todos" :deleteTo="deleteTo"/>
      <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
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
