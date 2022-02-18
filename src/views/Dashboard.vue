<template>
  <div id="dashboard">
    <el-row type="flex" align="middle">
      Fait avec
      <el-row class="mx-2" type="flex" align="middle">
        <img style="width: 20px" src="@/assets/logo.png" /><a target="_blank" href="https://vuejs.org/">
          &nbsp;VueJS v2.6.x
        </a>
      </el-row>
      et
      <el-row class="mx-2" type="flex" align="middle">
        <img style="width: 20px" src="@/assets/element-ui-logo.png" />
        <a target="_blank" href="https://element.eleme.io/#/fr-FR">&nbsp;Element UI </a>
      </el-row>
      par
      <el-row class="mx-2" type="flex" align="middle">
        <a target="_blank" href="https://www.conceicao.io/">Axel Conceicao</a>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
}
</script>

<style lang="scss" scoped>
#dashboard {
  font-size: 16px;
}
</style>

<style lang="scss">
#dashboard {
}
</style>
