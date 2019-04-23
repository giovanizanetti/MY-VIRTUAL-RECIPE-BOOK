import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAm-hq9ZtJHgsQhmxVONaklTTH0UCVsMQg",
  authDomain: "my-virtulal-recepebook-app.firebaseapp.com",
  databaseURL: "https://my-virtulal-recepebook-app.firebaseio.com",
  projectId: "my-virtulal-recepebook-app",
  storageBucket: "my-virtulal-recepebook-app.appspot.com",
  messagingSenderId: "846387924991"
};
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase