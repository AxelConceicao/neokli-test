<template>
  <div id="essais-cliniques">
    <el-tabs v-model="tabsStatus">
      <el-tab-pane name="all">
        <span slot="label">
          <el-row type="flex" align="middle">
            Tous les essais &nbsp;
            <el-tag :type="tabsStatus === 'all' ? 'primary' : 'info'">{{ essais.length }}</el-tag>
          </el-row>
        </span>
        <EssaisTable ref="allTable" :data="essais" />
      </el-tab-pane>
      <el-tab-pane name="favoris">
        <span slot="label">
          <el-row type="flex" align="middle">
            Essais favoris &nbsp;
            <el-tag :type="tabsStatus === 'favoris' ? 'primary' : 'info'">{{ essaisFavoris.length }}</el-tag>
          </el-row>
        </span>
        <EssaisTable ref="favorisTable" :data="essaisFavoris" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import EssaisTable from '@/components/EssaisTable'
import _ from 'lodash'

export default {
  name: 'EssaisCliniques',
  components: { EssaisTable },
  computed: {
    ...mapState({ essais: (state) => state.essaisCliniques.essais }),
    ...mapGetters([]),
    essaisFavoris() {
      return this.essais.filter((essai) => essai.favoris)
    },
  },
  data() {
    return {
      tabsStatus: 'all',
    }
  },
  watch: {
    essais: {
      deep: true,
      handler: _.debounce(function () {
        this.$refs.allTable.doLayout()
      }, 100),
    },
  },
  mounted() {},
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
}
</script>

<style lang="scss" scoped>
#essais-cliniques {
  padding: 1rem 2rem !important;
}
</style>

<style lang="scss">
#essais-cliniques {
  .el-tabs__item {
    user-select: none;
  }
}
</style>
