<template>
  <div id="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <ElementUI msg="Axel Conceicao" />
    <img class="ml-5" alt="Vue logo" src="@/assets/element-ui-logo.png" />
  </div>
</template>

<script>
import ElementUI from '@/components/ElementUI.vue'

export default {
  name: 'Home',
  components: {
    ElementUI,
  },
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 200px;
  }
}
</style>
