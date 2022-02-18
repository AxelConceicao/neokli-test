<template>
  <el-row type="flex" align="middle" justify="center">
    <a target="_blank" href="https://www.conceicao.io/" type="primary">{{ msg }}</a>
  </el-row>
</template>

<script>
export default {
  name: 'ElementUI',
  props: {
    msg: String,
  },
}
</script>

<style scoped lang="scss"></style>
