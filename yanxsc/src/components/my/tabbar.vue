<template>
  <div class="tabbar">
    <!-- $route.name 高亮配置-->
    <!-- <p
      @click="routerTolink(item)"
      :class="$route.name===item.url?'active':''"
      v-for="item in tabList"
      :key="item.id"
    >{{item.name}}</p> -->
    <!-- 定义变量接收是哪一个id 如果id==item.id高亮-->
    <!--<p :class="activeId===item.id?'active':''" v-for="item in tabList" :key="item.id">{{item.name}}</p>-->

    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        @click="routerTolink(item)"
        :class="$route.name===item.url?'active':''"
        v-for="item in tabList"
        :key="item.id"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data: function () {
    return {
      tabList: [
        { name: "首页", id: 1, url: "index" },
        { name: "分类", id: 2, url: "type" },
        { name: "购物车", id: 3, url: "shopcar" },
        { name: "我的", id: 4, url: "mine" },
      ],
       active: "",
    };
  },
  methods: {
    // 点击路由跳转
    routerTolink(item) {
      this.$router.push("/" + item.url);
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 4vh;
  font-size: 4.9rem;

  width: 100%;
  position: absolute;
  bottom: 0vh;

  .active {
    color: red;
  }
}
</style>
