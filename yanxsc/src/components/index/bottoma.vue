<template>
  <div>
    <ul>
      <li v-for="ieq in qkk.goodsMap" :key="ieq.id">
        <img :src="ieq.pic" alt />
        <p class="p1">{{ieq.name}}</p>
        <p class="p2">{{ieq.characteristic}}</p>
        <a>￥{{ieq.minPrice}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["qkk"],
  data() {
    return {};
  },
  mounted() {},
  // 事件方法
  methods: {},
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
ul {
  width: 94%;
  margin-left: 3%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6vh;
  li {
    width: 46%;
    height: 40vh;
    margin: 2% 2%;
    img {
      width: 100%;
      height: 30vh;
    }
    .p1 {
      font-size: 2vh;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 1vh ;
    }
       .p2 {
      font-size: 1.3vh;
      color: gray;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>