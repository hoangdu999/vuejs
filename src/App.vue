<template>
  <div>
    <the-header/>
      <router-view/>
    <the-footer/>
  </div>
</template>
<script>
import TheFooter from './components/footer/TheFooter.vue';
import TheHeader from './components/header/TheHeader.vue';

export default{
  components:{
    TheFooter,
    TheHeader
  }
}
</script>
<style scoped>
@import url(./assets/css/index.css);
</style>
