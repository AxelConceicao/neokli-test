<template>
  <div id="unavailable-page">
    Oops, cette page n'existe pas.
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'UnavailablePage',
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
#unavailable-page {
}
</style>

<style lang="scss">
#unavailable-page {
}
</style>
