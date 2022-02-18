import essais from '@/data.json'

const essaisCliniques = {
  state: {
    essais: essais.data.map((essai) => ({ ...essai, favoris: false })),
  },
  getters: {},
  mutations: {
    setFavEssai(state, id) {
      state.essais.find((essai) => essai.id === id).favoris = !state.essais.find((essai) => essai.id === id).favoris
    },
  },
  actions: {},
}

export default essaisCliniques
