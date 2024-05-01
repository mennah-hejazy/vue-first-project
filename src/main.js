import { createApp } from 'vue';
import App from './App.vue';
import LearningResource from './components/learning-resources/LearningResource.vue';

import BasedCard from './components/UI/BasedCard.vue';
import BasedButton from './components/UI/BasedButton.vue';
import BasedDialog from './components/UI/BasedDialog.vue'
const app = createApp(App);
app.component('learning-resource', LearningResource);
app.component('based-card', BasedCard);
app.component('based-button', BasedButton);
app.component('based-dialog', BasedDialog);


app.mount('#app');
