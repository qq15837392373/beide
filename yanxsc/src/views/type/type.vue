<template>
  <div>
    <sous v-model="txt"></sous>
    <div class="xia">
      <leftd class="zuocl" :zuo="zuo" @hbs="hbs" :se="se"></leftd>

      <div class="youcl">
        <div class="ytop">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="it in bannero" :key="it.id">
              <img :src="it.picUrl" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="xbottom">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sous from "@/components/fenlei/sous";
import leftd from "@/components/fenlei/leftd";
import { queryshopfen } from "@/plugins/api/login";
import { querybanner } from "@/plugins/api/login";
export default {
  components: { sous, leftd },
  data() {
    return {
      txt: "",
      zuo: [],
      se: "",
      bannero: [],
    };
  },
  mounted() {
    this.queryshoplisto();
    this.requestBannero();
  },
  // 事件方法
  methods: {
    input(val) {
      this.txt = val;
    },
    queryshoplisto() {
      queryshopfen().then((res) => {
        res.forEach((item) => {
          if (item.pid === 0) {
            this.zuo.push(item);
          }
        });
      });
    },
    //换色
    hbs(dang) {
      this.zuo.forEach((item) => {
        if (dang === item) {
          this.se = item.id;
        }
      });
    },
    requestBannero() {
      querybanner().then((res) => {
        this.bannero = res || [];
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
.xia {
  width: 100%;
  display: flex;

  .zuocl {
    flex: 3;
  }

  .youcl {
    flex: 7;
    overflow: hidden;
    .ytop {
      width: 80%;
      height: 20vh;
      margin-left: 10%;
      margin-top: 2vh;
      margin-bottom: 2vh;
      img {
        width: 100%;
        height: 20vh;
      }
    }
    .xbottom {
      width: 95%;
      margin-left: 2.5%;
    }
  }
}
</style>