import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store'
import router from './router'
import locale from 'element-ui/lib/locale/lang/fr'

// CSS
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/display.css'
import './styles/element-variables.scss'
import './styles/global.scss'
import './styles/helpers/all.scss'
import './styles/helpers/spacing.css'

Vue.use(ElementUI, { locale, size: 'small' })
Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
