<template>
  <div class="login">
    <div class="cc">
      <p class="zh">登陆账号</p>
      <p class="z">虾米严选商城欢迎你</p>
      <myinput class="oo" icon="icon-user" v-model="username" :placeholder="'请输入手机号'"></myinput>
      <myinput class="oo" v-model="password" :type="'password'" :placeholder="'请输入手机号'"></myinput>
      <!-- <button @click="submiteee" class="dl">登陆</button>
      <p class="wj" @click="wjmm"><a>忘记密码</a></p>
      <a href="#" class="zu">还没有注册立即注册</a>-->
    </div>
    <div class="buttom">
      <button @click="submiteee" class="dl">登陆</button>
      <p class="wj" @click="wjmm">
        <a>忘记密码</a>
      </p>
      <p class="wj">
        <a href="#" class="zu">还没有注册立即注册</a>
      </p>
    </div>
  </div>
</template>

<script>
import myinput from "@/components/my/myinput";
import  {requestLogin}  from "@/plugins/api/index";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Login",
  components: {
    myinput,
  },
  data() {
    return {
      password: "",
      username: "",
    };
  },
  mounted() {},
  // 事件方法
  methods: {
    ...mapMutations({
      setToken: "setToken",
    }),
    submiteee() {
      console.log(this);
      let vm = this;
      let obj = {
        mobile: vm.username,
        pwd: vm.password,
      };

      requestLogin(obj).then((res) => {
        if(res.token){
          alert('登陆成功')
          this.$router.push({
            path:'/index'
          })
        }
        vm.setToken(res.token);
      });

    },
    wjmm() {
      this.$router.push({
        path: "/upDate",
      });
    },
  },
  // 计算属性
  computed: {
    ...mapGetters({
      getToken: "getToken",
    }),
  },
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.login {
  width: 95vw;
  height: 95vh;
  margin-top: 2.5vh;
  margin-left: 2.5vw;
  border: 1.3px solid rgb(233, 233, 233);
  overflow: hidden;
  .cc {
    width: 100vw;
    .zh {
      margin-top: 2vh;
      margin-left: 8%;
      font-size: 3vh;
      color: rgb(122, 122, 122);
    }
    .z {
      margin-top: 2vh;
      margin-left: 8%;
      font-size: 1.5vh;
      color: rgb(122, 122, 122);
    }
  }
  .buttom {
    width: 100vw;
    margin-top: 1vh;
    .dl {
      width: 60%;
      height: 6vh;
      background-color: skyblue;
      border-radius: 1rem;
      border: 0px;
      margin: 1rem 20%;
      margin-bottom: 2vh;
    }

    .wj {
      width: 100%;
      color: rgb(161, 161, 161);
      font-size: 0.5rem;
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 2vh;
    }
    .zu {
      width: 100%;
      font-size: 0.5rem;
      text-align: center;
    }
  }
}
</style>