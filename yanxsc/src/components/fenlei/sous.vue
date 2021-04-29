<template>
  <div class="sous">
    <input type="text" placeholder="回车搜索商品" @input="change" :value="value"/>
  </div>
</template>

<script>
export default {
    props:{
        value:{},
     },
  data() {
    return {};
  },
  mounted() {},
  // 事件方法
  methods: {
    change(e) {
        this.$emit('input',e.target.value)
    },
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.sous {
  width: 100%;
  height: 6vh;
  border-bottom: 1px rgb(235, 235, 235) solid;
  input {
    width: 60%;
    height: 4vh;
    margin-left: 10%;
    border-radius: 3vh;
    border: 1px;
    margin-top: 1vh;
    background-color: rgb(235, 235, 235);
    padding-left: 2vw;
  }
}
</style>