// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase, ref, set, get, child  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6f_uotPNTCvzUwJLhnLTTnDctEdkySUc",
    authDomain: "fir-login-form-c95e1.firebaseapp.com",
    projectId: "fir-login-form-c95e1",
    storageBucket: "fir-login-form-c95e1.appspot.com",
    messagingSenderId: "1072697665513",
    appId: "1:1072697665513:web:911fe0a0680df007444d78"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  //get ref to database services
  const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();

    set(ref(db,'user/' + document.getElementById("username").value),
    {
        Username: document.getElementById("username").value,
        Email: document.getElementById("email").value,
        PhoneNumber: document.getElementById("phone").value,

    });
    alert("Login Sucessful !")
})