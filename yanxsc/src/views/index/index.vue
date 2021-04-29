<template>
  <div id="ida">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <up class="up1"></up>
    <div class="xia"></div>
    <kan :qmkj="qmkj" @qmk="qmk"></kan>
    <kanlist :kanjiaObj="kanjiaObj" @kanli="kanli"></kanlist>
    <div class="xia"></div>
    <kan :jxzt="jxzt" @jxz="jxz"></kan>
    <jxbanner @qudetail='qudetail'></jxbanner>
    <kan :rqtj='rqtj'></kan>
    <bottoma :qkk='qkk'></bottoma>
  </div>
</template>



<script>
import { querybanner, querykan } from "@/plugins/api/login";
import up from "@/components/my/up";
import kan from "@/components/index/kanJia";
import kanlist from "@/components/index/kanList";
import jxbanner from "@/components/index/jxbanner";
import bottoma from "@/components/index/bottoma";
export default {
  components: {
    up,
    kan,
    kanlist,
    jxbanner,
    bottoma
  },
  data() {
    return {
      bannerList: [],
      kanjiaObj: {},
      qmkj: "全民砍价",
      jxzt: "精选专题",
      rqtj: "人气推荐",
      qkk:[],
    };
  },
  mounted() {
    this.requestBanner();
    this.requestkan();
  },
  // 事件方法
  methods: {
    requestBanner() {
      querybanner().then((res) => {
        this.bannerList = res || [];
      });
    },
    kJ() {
      console.log("hhh");
    },
    requestkan() {
      querykan().then((res) => {
        this.qkk=res;
    console.log(this.qkk);
        let ide = res.result[res.result.length - 1].goodsId;
        this.kanjiaObj = res.goodsMap[ide];
      });
    },
    //全民砍价
    qmk() {
      this.$router.push({
        path: "/kanX",
      });
    },
    jxz() {
        this.$router.push({
        path: "/jplb",
      });
    },
    kanli() {
      this.$router.push({
        path: "/kanX",
      });
    },
    qudetail(id) {
        this.$router.push({
        path: "/zlxq",
        query:{id}
      });
    }
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
img {
  width: 100%;
}
#ida {
  position: relative;
  .up1 {
    position: absolute;
    top: 40vh;
  }
  .xia {
    width: 100%;
    height: 2vh;
    background-color: rgb(241, 241, 241);
  }
}
</style>