import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
import { FacebookAuthProvider,
  TwitterAuthProvider,signInWithRedirect, GoogleAuthProvider,getAuth, getRedirectResult , createUserWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"

const signUpBtn = document.getElementById('signup_btn') 
const signUpEmail = document.getElementById('signup_email_input')
const signUpPassword = document.getElementById('signup_email_password')
const signUpUsername = document.getElementById('signup_email_username') 
const google_auth = document.getElementById('google_auth')
const fb_auth = document.getElementById('fb_auth')
const twitter_auth = document.getElementById('twitter_auth')

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
  const auth = getAuth(app)
  const database = getDatabase(app)
 
  const provider = new GoogleAuthProvider(app);
  const provider2 = new FacebookAuthProvider(app);
const provider3 = new TwitterAuthProvider(app);



  signUpBtn.addEventListener('click', (e)=>{
    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
      .then((userCredential) => {
        // Signed In
        const user = userCredential.user

        set(ref(database, 'users/'+ user.uid), {
          username: signUpUsername,
          email: signUpEmail
        })
        alert("User Created")
        console.log(signUpPassword.value, signUpPassword.value)
      window.location.href = "http://127.0.0.1:5500/author.html"

      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;

        alert(`Oops, Error Occured, ${errorCode}, ${errorMessage}`)
      })
  })

  
  google_auth.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "http://127.0.0.1:5500/author.html"
    console.log(user)
  }).catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    const email = err.email;
    const credential = GoogleAuthProvider.credentialFromError(err);
    // alert(`Oops, Error Occured, ${errorCode}, ${errorMessage}`)
  });
  })
 
  fb_auth.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider2);
    getRedirectResult(auth)
  .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
  })
  
  twitter_auth.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider3);

    getRedirectResult(auth)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    // ...

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });

  })