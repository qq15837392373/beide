<template>
  <div>
    <kanX @fh="$router.back(-1)" :topheader='topheaderaa'></kanX>
    <div v-for="item in Xiang" :key="item.id">
      <kanlist :kanjiaObj="item"></kanlist>
    </div>
  </div>
</template>

<script>
import kanX from "@/components/index/kanXiang";
import { querykan } from "@/plugins/api/login";
import kanlist from "@/components/index/kanList";

export default {
  components: { kanX, kanlist },
  data() {
    return {
      Xiang: {},
      topheaderaa:'砍价列表'
    };
  },
  mounted() {
    querykan().then((res) => {
      this.Xiang = res.goodsMap;
    });
  },
  // 事件方法
  methods: {},
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>