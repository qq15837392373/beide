<template>
  <div>
    <ul>
      <li v-for="ie in yxlist" :key="ie.id" @click="wendetail(ie.id)">
        <img :src="ie.pic" alt />
        <p class="p1">{{ie.title}}</p>
        <p class="p2">{{ie.descript}}</p>
        <a>查看详情</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["yxlist"],
  data() {
    return {};
  },
  mounted() {},
  // 事件方法
  methods: {
    wendetail(id) {
      this.$emit('wendetail',id)
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
  flex-wrap: wrap;
  margin-bottom: 10vh;
  li {
    width: 100%;
    height: 30vh;
    text-align: center;
    position: relative;
    img {
      width: 96%;
      height: 29vh;
      margin: 0.5vh 2%;
    }
    .p1 {
      width: 70%;
      left:15%;
      height: 6vh;
      font-size: 3vh;
      position: absolute;
      top: 7vh;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: white;
    }
    .p2{
    width: 90%;
      left:5%;
      height: 6vh;
      font-size: 2vh;
      position: absolute;
      top: 13vh;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: white;
    }
    a{
      width: 20%;
      left:40%;
      height: 3vh;
      font-size: 1.3vh;
      position: absolute;
      top: 19vh;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: white;
      border: 1px solid white;
      border-radius: 6rem;
    }
  }
}
</style>