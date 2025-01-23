import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAY0qxDWumSaWMsc4fuI3DMmpG6dUHmWnM",
    authDomain: "amorvile.firebaseapp.com",
    projectId: "amorvile",
    storageBucket: "amorvile.firebasestorage.app",
    messagingSenderId: "702567634407",
    appId: "1:702567634407:web:ffdf1915798b7df0a31942",
    measurementId: "G-15YSRNRG00"
    };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("loginform");

onAuthStateChanged(auth, (user) => {
if (user) {
        window.location.href = "landpage.html"
    }
});

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var mail = document.getElementById("mail")
    var pass = document.getElementById("pass")
    if(mail.value && pass.value){
        createUserWithEmailAndPassword(auth,mail.value,pass.value)
        .then((userCredential)=>{
            window.alert("Usuário criado com sucesso")
            window.location.href = "landpage.html"
        })
        .catch((error)=>{
            if(error.code === "auth/email-already-in-use"){
                signInWithEmailAndPassword(auth,mail.value,pass.value)
                .then((user)=>{
                    window.alert("Usuário encontrado com sucesso")
                    window.location.href = "landpage.html"
                })
                .catch((error)=>{
                    window.alert("Ocorreu um erro inesperado")
                })
            }
        })
    }
})