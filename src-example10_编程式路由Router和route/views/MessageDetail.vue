<template>
  <div>
  <p>id:{{$route.params.id}}</p>
    <div>
      <li>id>{{messageDetail.id}}</li>
      <li>{{messageDetail.title}}</li>
      <li>{{messageDetail.content}}</li>
    </div>
  </div>
</template>

<script>

  export default {
      data(){
        return {
          messageDetail:{}
        }
      },
    mounted () {//只会初始化一次，
        setTimeout(()=>{
          const allMessageDetails=[
            {
              id:1,
              title:'message001',
              content:'0001'
            },
            {
              id:2,
              title:'message002',
              content:'0002'
            },
            {
              id:4,
              title:'message004',
              content:'0004'
            },
          ]
          this.allMessageDetails=allMessageDetails
          const id=this.$route.params.id*1
          this.messageDetail=allMessageDetails.find(detail=>detail.id==id)
        },1000)
    },
    watch:{//因为初始化只有一次，所以用监视的方式监视路由变化
        $route:function (value) {//路由路径(param)发生了改变
          const id=value.params.id*1
          this.messageDetail=this.allMessageDetails.find(detail=>detail.id==id)
        }
    }
  }
</script>

<style scoped>

</style>
