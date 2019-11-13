import Vue from 'vue'
import App from './App.vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'

Vue.config.productionTip = false

Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, AmplifyModules)

// It's important that you instantiate the Vue instance after calling Vue.use!

new Vue({
  render: h => h(App)
}).$mount('#app')