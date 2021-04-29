<template>
  <div>
    <ul>
      <li @click="bbb" :class="cc?'bs':''">所有分类</li>
      <li v-for="im in zuo" :key="im.id" @click="hbs(im)" :class="se===im.id?'bs':''">{{im.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["zuo", "se"],
  data() {
    return {
      cc: false,
      qq:'',
    };
  },
  mounted() {},
  // 事件方法
  methods: {
    bbb() {
      this.cc = true;
      this.se=!this.qq
    },
    hbs(im) {
      this.$emit("hbs", im);
      this.cc = false;
    },
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
ul {
  width: 100%;
  li {
    width: 100%;
    height: 6vh;
    line-height: 7vh;
    font-size: 2.2vh;
    text-align: center;
    color: gray;
  }
  .bs {
    color: red;
    border-left: 2px red solid;
  }
}
</style>