<template>
  <div>
    <input type="text" v-model="ccc">
    <input type="text" v-model="qqq">
    <button @click="tj">111111111</button>
 </div>
</template>

<script>
export default {
  data() { 
    return {
      ccc:'',
      qqq:'',
      qq:[],
    }
  },
  mounted() {

  },
// 事件方法
  methods:{
    tj() {

      this.qq.push({id:this.ccc,name:this.qq=q})
      console.log(this.qq);
    }
  },
// 计算属性
  computed:{

  },
// 事件监听
  watch:{

  },
 }
</script>

<style lang='scss' scoped>
</style>