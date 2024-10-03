import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NavBar from "./components/NavBar.vue";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.component('NavBar', NavBar);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.mount("#app");
