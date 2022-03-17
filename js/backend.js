import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
import { getAuth, onAuthStateChanged }  from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"


const author_name = document.getElementById('author_name')
const author_username = document.getElementById('author_username')
const author_code = document.getElementById('author-code')
const signinNav = document.getElementById('signin_nav')


const firebaseConfig = {
    apiKey: "AIzaSyAEDyL-Tq0zdVDMd44J7l0V_YG2T9ygElY",
    authDomain: "unitok-88e94.firebaseapp.com",
    projectId: "unitok-88e94",
    storageBucket: "unitok-88e94.appspot.com",
    messagingSenderId: "904571740303",
    appId: "1:904571740303:web:7f397309bb7f8024cdd0fa",
    measurementId: "G-5NPW3Y7T2E"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    signinNav.innerHTML = "Log Out"
    if(user.displayName == null){
        author_name.innerHTML = user.email
    }else{
        author_name.innerHTML = user.displayName;
    }
    author_username.innerHTML = user.email
      const uid = user.uid;
      author_code.value = uid
      console.log(user)

} else {
    // User is signed out
    // ...
  }
});