<template>
  <div class="upd">
    <div class="top">
      <h2>用户更换密码</h2>
      <span>很高兴您将成为商城会员(修改一次只需要一步)</span>
    </div>
    <div class="buttom">
        <upd></upd>
        <upd></upd>
        <upd></upd>
        <upd></upd>
        <upd></upd>

    </div>
  </div>
</template>

<script>
import upd from '@/components/my/up'
export default {
  name: "upDate",
  components:{upd},
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
.upd {
  height: calc(100vh - 6vh);
  margin-top: 3vh;
  border: 2px solid rgb(238, 238, 238);
  .top {
    display: flex;
    flex-wrap: wrap;
    h2 {
      flex: 1;
      margin-top: 2vh;
      margin-bottom: 4vh;
    }
    span {
      width: 90%;
      margin-left: 10%;
      color: rgb(175, 175, 175);
      font-size: 16px;
    }
  }
  .buttom{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 10%;
    margin-top: 2rem;
  }
}
</style>