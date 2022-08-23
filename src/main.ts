import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/graphql";

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(createPinia())
  .use(i18n)
  .use(router)
  .mount("#app");
