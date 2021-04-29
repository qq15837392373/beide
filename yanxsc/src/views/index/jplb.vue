<template>
  <div>
    <jinp @fh="$router.back(-1)" :topheader="topheaderaa"></jinp>
    <yxzl :yxlist="yxlist" @wendetail="wendetail" ></yxzl>
  </div>
</template>

<script>
import jinp from "@/components/index/kanXiang";
import yxzl from "@/components/index/yxzl";
import { queryjxt } from "@/plugins/api/login";

export default {
  components: { jinp, yxzl },
  data() {
    return {
      topheaderaa: "严选专栏",
      yxlist: [],
    };
  },
  mounted() {
    queryjxt().then((res) => {
      this.yxlist = res;
    });
  },
  // 事件方法
  methods: {
    wendetail(id) {
     
      this.$router.push({
        path: "/zlxq",
        query: { neir: id },
      });
    },
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>