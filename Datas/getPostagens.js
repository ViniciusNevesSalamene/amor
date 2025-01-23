import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAY0qxDWumSaWMsc4fuI3DMmpG6dUHmWnM",
    authDomain: "amorvile.firebaseapp.com",
    databaseURL: "https://amorvile-default-rtdb.firebaseio.com",
    projectId: "amorvile",
    storageBucket: "amorvile.firebasestorage.app",
    messagingSenderId: "702567634407",
    appId: "1:702567634407:web:ffdf1915798b7df0a31942",
    measurementId: "G-15YSRNRG00"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

function getData(){
    get(postsRef).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    });
}

function insertData(title,date,descricao,usuario){
    const newPostRef = push(postsRef);
    set(newPostRef, {
        titulo: title,
        data: date,
        desc: descricao,
        user: usuario
    }).then(() => {
        window.alert("Post realizado com sucesso");
    });
}