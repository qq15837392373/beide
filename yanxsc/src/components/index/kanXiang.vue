<template>
  <div>
    <div class="e">
      <a @click="fh">{{re}}</a>{{topheader}}
    </div>
  </div>
</template>

<script>
export default {
  props:['topheader'],
  data() {
    return {
      re: "<",
    };
  },
  mounted() {},
  // 事件方法
  methods: {
      fh() {
          this.$emit('fh')
      }
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.e {
  width: 100%;
  height:9vh;
  font-size: 2vh;
  line-height: 9vh;
  text-align: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  position: relative;
  a {
    font-size: 3vh;
    position: absolute;
    height: 9vh;
    left: 4vw;
    line-height: 9vh;
  }
}
</style>