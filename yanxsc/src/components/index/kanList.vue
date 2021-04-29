<template>
  <div class="kanjia" v-if="kanjiaObj" @click="kanli">
    <!-- pic -->
    <!-- {{kanDate}} -->

    <div>
      <img :src="kanjiaObj.pic" alt />
    </div>
    <div>
      <p class="p1">{{kanjiaObj.name}}</p>
      <p class="p2">{{kanjiaObj.characteristic}}</p>
      <p class="jia">
        <a>￥{{kanjiaObj.minPrice}}</a>
        <a>￥{{kanjiaObj.originalPrice}}</a>
        <a>{{kanjiaObj.stores}}件</a>
      </p>
      <p class="jia">
        <a>低价</a>
        <a>原价</a>
        <a>限量</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "kanList",
  props: ["kanjiaObj"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.kanjiaObj);
  },
  // 事件方法
  methods: {
    kanli() {
      this.$emit('kanli')
    }
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.kanjia {
  width: 100%;
  height: 20vh;
  display: flex;
  div:nth-child(1) {
    flex: 1;
    height: 20vh;
    img {
      width: 90%;
      height: 90%;
      margin: 5% 5%;
      border-radius: 6% 6%;
    }
  }
  div:nth-child(2) {
    flex: 2;
    height: 20vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .p1 {
      font-size: 5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: auto;
    margin-top:2vh;
    }
    .p2 {
      width: 100%;
      font-size: 1.3vh;
      color: gray;
      margin-bottom: 3vh;
    }
    .jia {
      width: 60%;
      display: flex;
      a:nth-child(1) {
        color: red;
      }
      a {
        flex: 1;
        height: 3vh;
        justify-content: space-between;
        font-size: 2vh;
        color: gray;
      }
    }
  }
}
</style>