<template>
  <div>
    <kanx @fh="$router.back(-1)" :topheader="eee" ></kanx>
    <detail :cid='cid'></detail>
  </div>
</template>

<script>
import { querydetail } from "@/plugins/api/login";
import kanx from "@/components/index/kanXiang";
import detail from "@/components/index/yxdetail";
export default {
  components: { kanx,detail },
  data() {
    return {
      eee: "专栏详情",
      cid: [],
      id:this.$route.query.neir,
      id1:this.$route.query.id,
    };
  },
  mounted() {
    this.get1();
  },
  // 事件方法
  methods: {
    wend() {
      this.$router.push({
        path:'/zlxq'
      })
    },
    get1() {
      querydetail(this.id||this.id1).then((res) => {
        this.cid = res;
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