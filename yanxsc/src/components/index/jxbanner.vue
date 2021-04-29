<template>
  <div class="jxbanner">
    <ul>
      <li v-for="xiang in xiangT" :key="xiang.id" @click="qudetail(xiang.id)">
        <img :src="xiang.pic" alt />
        <p class="p1">{{xiang.title}}</p>
        <p class="p2">{{xiang.descript}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { queryjxt } from "@/plugins/api/login";

export default {
  data() {
    return {
      xiangT: {},
    };
  },
  mounted() {
    queryjxt().then((res) => {
      this.xiangT = res;
    })
   
  },
  // 事件方法
  methods: {
     qudetail(id) {
      this.$emit('qudetail',id)
    }
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.jxbanner {
  width: 100%;
  height: 75.6rem;
  overflow: auto;
  ul {
    width: 454rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    li {
      width: 88.4rem;
      height: 56.8rem;
      margin-left: 2.4rem;
      img {
        width: 88.4rem;
        height: 56.8rem;
        display: block;
        border-radius: 0.06rem;
      }
      .p1 {
          font-size: 2.3vh;
        color: #2c2c2c;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 1vh 0;
      }
          .p2 {
          font-size: 1.3vh;
        color: #cacaca;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>