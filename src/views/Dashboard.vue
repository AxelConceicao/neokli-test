<template>
  <div id="dashboard">
    Tableau de bord
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
}
</style>

<style lang="scss">
#dashboard {
}
</style>
