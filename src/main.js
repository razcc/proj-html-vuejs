import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass, faUser, faBarsStaggered, faChevronDown, faChevronUp, faChevronRight, faSun, faCheck, faArrowRightLong, faX } from '@fortawesome/free-solid-svg-icons'

// Icone Brands
import { faGithub as faGithubBrands } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faUser, faBarsStaggered, faGithubBrands, faChevronDown, faChevronUp, faChevronRight, faSun, faCheck, faArrowRightLong, faX)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
