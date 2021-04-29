<template>
  <div class="myinput">
    <input :value="value" placeholder="请输入" :type="typeUse" @input="changeValue" />
    <i v-if="icon" :class="'iconfont ' + icon"></i>

    <i
      v-if="type==='password' &&(typeUse==='text')"
      @click="showPass('password')"
      class="iconfont icon-eye"
    ></i>
    <i
      v-if="type==='password' &&(typeUse==='password')"
      @click="showPass('text')"
      class="iconfont icon-Eyesclosed"
    ></i>
  </div>
</template>

<script>
export default {
  name: "myinput",
  props: {
    value: {},
    type: {
      default: "text",
    },
    placeholder: {
      default: "请输入",
    },
    icon: {},
  },
  data() {
    return {
      typeUse: this.type,
    };
  },
  mounted() {},
  // 事件方法
  methods: {
    changeValue(e) {
      this.$emit("input", e.target.value);
    },
    showPass(str) {
      this.typeUse = str;
    },
  },
  // 计算属性
  computed: {},
  // 事件监听
  watch: {},
};
</script>

<style lang='scss' scoped>
.myinput {
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  input {
    width: 84%;
    height: 6vh;
    background-color: rgb(233, 233, 233);
    border: 0px;
    border-radius: 2rem;
    margin-top:3vh;
    margin-left:8%;
    margin-bottom:2vh;
  }
  i {
    position: absolute;
    top: 4.6vh;
    right: 13rem;
  }
}
</style>