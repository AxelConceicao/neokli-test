<template>
  <div id="essais-table">
    <el-row class="search-area mb-4 pl-2" type="flex" align="middle" justify="space-between">
      <el-row :gutter="10" style="width: 100%">
        <el-col :xs="24" :sm="12" :lg="6" class="p-2">
          <el-input class="search-essai" placeholder="Rechercher un ID" clearable v-model="search">
            <ion-icon slot="prefix" name="search-outline"></ion-icon>
          </el-input>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" class="p-2">
          <el-select
            filterable
            v-model="specialite"
            placeholder="Sélectionner une spécialité"
            @change="handleSpecialiteChange"
          >
            <el-option v-for="(v, k) in specialiteList" :label="v" :value="v" :key="k"></el-option>
          </el-select>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" class="p-2">
          <el-select filterable v-model="organe" placeholder="Sélectionner un organe">
            <el-option v-for="(v, k) in organeBySpecialite" :label="v" :value="v" :key="k"></el-option>
          </el-select>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" class="p-2">
          <el-select filterable v-model="situation" placeholder="Sélectionner une situation">
            <el-option v-for="(v, k) in situationList" :label="v" :value="v" :key="k"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-row>
    <el-table
      :data="cleanData"
      ref="essaisTable"
      class="essais-table"
      empty-text="Aucun essai"
      header-row-class-name="header-row"
      :default-sort="{ prop: 'id', order: 'ascending' }"
      :header-cell-class-name="handleCellClass"
    >
      <el-table-column label="Identifiant" prop="id" sortable>
        <template slot-scope="scope">
          <span class="important">#{{ scope.row['id'] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Spécialité" prop="specialite" sortable> </el-table-column>
      <el-table-column label="Organe" prop="organe" sortable> </el-table-column>
      <el-table-column label="Situation" prop="situation" sortable align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row['situation'] === 'Métastatique' ? 'primary' : 'warning'">
            {{ scope.row['situation'] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Favoris" prop="favoris" sortable align="center">
        <template slot-scope="scope">
          <div class="favoris-icon" :class="[scope.row['favoris'], 'is-fav']" @click="onFav(scope.row.id)">
            <i :class="scope.row['favoris'] ? 'fas fa-heart' : 'fal fa-heart'"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'EssaisTable',
  props: ['data'],
  computed: {
    ...mapState([]),
    ...mapGetters([]),
    organeBySpecialite() {
      if (!this.specialite || this.specialite === 'Aucune spécialité') return this.organeList
      let keys = this.data.filter((essai) => essai.specialite === this.specialite).map((essai) => essai['organe'])
      keys = [...new Set(keys)]
      return ['Aucun organe', ...keys]
    },
    layoutDependencies() {
      return { search: this.search, specialite: this.specialite, organe: this.organe, situation: this.situation }
    },
  },
  data() {
    return {
      search: '',
      specialite: '',
      specialiteList: [],
      organe: '',
      organeList: [],
      situation: '',
      situationList: [],
      cleanData: [],
    }
  },
  created() {
    this.specialiteList = ['Aucune spécialité', ...this.getOccurencesByKey('specialite')]
    this.organeList = ['Aucun organe', ...this.getOccurencesByKey('organe')]
    this.situationList = ['Aucune situation', ...this.getOccurencesByKey('situation')]
  },
  mounted() {
    this.doLayout()
  },
  watch: {
    data: {
      deep: true,
      handler: _.debounce(function () {
        this.doLayout()
      }, 100),
    },
    layoutDependencies: {
      handler: _.debounce(function () {
        this.doLayout()
      }, 100),
    },
  },
  methods: {
    ...mapMutations(['setFavEssai', 'setSearch']),
    ...mapActions([]),
    doLayout: function () {
      var data = JSON.parse(JSON.stringify(this.data))
      this.search && (data = data.filter((essai) => essai.id.toLowerCase().includes(this.search.toLowerCase())))
      this.specialite &&
        this.specialite !== 'Aucune spécialité' &&
        (data = data.filter((essai) => essai.specialite === this.specialite))
      this.organe && this.organe !== 'Aucun organe' && (data = data.filter((essai) => essai.organe === this.organe))
      this.situation && this.situation !== 'Aucune situation' && (data = data.filter((essai) => essai.situation === this.situation))
      this.cleanData = data
    },
    getOccurencesByKey: function (key) {
      const keys = this.data.map((essai) => essai[key])
      return [...new Set(keys)]
    },
    onFav: function (id) {
      this.setFavEssai(id)
      this.doLayout()
    },
    handleCellClass: function ({ columnIndex }) {
      var classes = ['header-cell']
      if (columnIndex === 0) {
        classes.push('start-of-header')
      } else if (columnIndex === 4) {
        classes.push('end-of-header')
      }
      return classes.join(' ')
    },
    handleSpecialiteChange: function () {
      this.organe = ''
    },
  },
}
</script>

<style lang="scss" scoped>
#essais-table {
}
</style>

<style lang="scss">
#essais-table {
  .header-cell {
    text-transform: uppercase;
    font-size: 12px;
    color: var(--color-text-primary);
    font-weight: 500 !important;
    background-color: #f3f8f8;
    &.start-of-header {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &.end-of-header {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .important {
    color: var(--color-text-primary);
    font-weight: 500 !important;
  }
  .favoris-icon {
    cursor: pointer;
    &.is-fav,
    &:hover {
      color: var(--color-danger);
    }
    i {
      font-size: 1rem;
    }
  }
  .search-area {
    background-color: #f3f8f8;
    border-radius: 10px;
    .search-essai,
    .el-select {
      width: 100% !important;
    }
    .search-essai {
      .el-input__prefix {
        margin-left: 0.25rem;
        display: flex;
        align-items: center;
        ion-icon {
          font-size: 1rem;
          color: var(--color-primary);
        }
      }
    }
  }
}
</style>
