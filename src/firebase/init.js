import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var config = {
    
    apiKey: "AIzaSyDTQM3TKP1FyjM0aiyLaxaOGP66CnLGxvQ",
    authDomain: "udemy-ninja-chat-82744.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-82744.firebaseio.com",
    projectId: "udemy-ninja-chat-82744",
    storageBucket: "udemy-ninja-chat-82744.appspot.com",
    messagingSenderId: "373229095181"

  
  
  };
  const firebaseApp = firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()
