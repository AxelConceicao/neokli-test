<template>
  <el-container id="page">
    <el-aside width="220px">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <el-row type="flex" align="middle">
          {{ $route.name }}
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Menu from '@/components/Menu'

export default {
  name: 'Page',
  components: { Menu },
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
#page {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>

<style lang="scss">
#page {
}
</style>
