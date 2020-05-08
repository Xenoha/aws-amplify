import Vue from "vue";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "./aws-exports";

Amplify.configure(config);
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
