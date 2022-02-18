<template>
  <div id="search-area">
    <el-row class="search-area mb-4 p-2" type="flex" align="middle">
      <el-input class="search-essai mr-4" placeholder="Rechercher" clearable :v-model="search">
        <ion-icon slot="prefix" name="search-outline"></ion-icon>
      </el-input>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'SearchArea',
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
#search-area {
}
</style>

<style lang="scss">
#search-area {
}
</style>
