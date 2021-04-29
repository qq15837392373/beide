<template>
  <div class="home">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
    import tabbar from '@/components/my/tabbar'
export default {
  name: 'Home',
    components:{
        tabbar
    }
}
</script>

<style scoped lang="scss" >
  
</style>


