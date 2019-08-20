import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyCAOe9wlkKv1dQiEprZioGDN31mowue4zA",
  authDomain: "realtime-chat-5e40f.firebaseapp.com",
  databaseURL: "https://realtime-chat-5e40f.firebaseio.com",
  projectId: "realtime-chat-5e40f",
  storageBucket: "realtime-chat-5e40f.appspot.com",
  messagingSenderId: "433407538546",
  appId: "1:433407538546:web:9eaa7e43d8a711c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

window.db = db;

db.settings({
  timestampsInSnapshots:true
});



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
