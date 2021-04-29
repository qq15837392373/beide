<template>
  <div>
    <ul>
      <li @click="wend">
        <p class="p11">{{cid.title}}</a>
        <img :src="cid.pic" alt="">
        <p  class="p12" v-html="cid.content">{{cid.descript}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cid"],
  data() {
    return {};
  },
  mounted() {
  },
  // 事件方法
  methods: {
      wend() {
          this.$emit('wend')
      }
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
    width: 90%;
    margin-left:5%;
    img{
        width: 100%;
        height: 100%;
        margin-top: 2vh;
      margin-bottom: 2vh;
    }
    .p11 {
      width: 100%;
      text-align: center;
      font-size: 3vh;
      margin-top: 3vh;
    //   margin: 2vh 0;
    }
    .p12{
        font-size: 1.9vh;
    }
  }
}
</style>