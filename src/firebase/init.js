import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyB4qZrXbkFSAIf5_yEBdP0dwPf6siLzbD8',
  authDomain: 'test-8063d.firebaseapp.com',
  databaseURL: 'https://test-8063d.firebaseio.com',
  projectId: 'test-8063d',
  storageBucket: 'test-8063d.appspot.com',
  messagingSenderId: '317174000513'
}

firebase.initializeApp(config)
