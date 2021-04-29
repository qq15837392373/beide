<template>
  <div>
    <div class="k" v-on:click="qmk();jxz()">{{qmkj||jxzt||rqtj}} ></div>
  </div>
</template>

<script>
export default {
  props: ["qmkj", "jxzt","rqtj"],
  data() {
    return {};
  },
  mounted() {},
  // 事件方法
  methods: {
    qmk: function () {
      this.$emit("qmk");
    },
    jxz: function () {
      this.$emit("jxz");
    },
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.k {
  width: 100%;
  height: 6vh;
  font-size: 3vh;
  line-height: 6vh;
  text-align: center;
  border-bottom: 1px solid rgb(221, 221, 221);
}
</style>