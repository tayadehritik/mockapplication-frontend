import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import 'primeflex/primeflex.css';


import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const app = createApp(App)

app.use(router)
app.use(PrimeVue,{
    theme: {
        preset: Aura
    }
})

app.component('Button', Button);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('TabList', TabList);
app.component('Tabs', Tabs);
app.component('Tab', Tab);
app.component('TabPanel', TabPanel);
app.component('TabPanels', TabPanels);

app.mount('#app')
