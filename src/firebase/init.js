import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyCeKFp2KhYXUOOxbqz4voV2iEWpaZsjrnw",
    authDomain: "udemy-ninja-chat-8d016.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-8d016.firebaseio.com",
    projectId: "udemy-ninja-chat-8d016",
    storageBucket: "udemy-ninja-chat-8d016.appspot.com",
    messagingSenderId: "147143825490"
  };
  const firebaseApp = firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()
