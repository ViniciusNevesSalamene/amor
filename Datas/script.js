import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAY0qxDWumSaWMsc4fuI3DMmpG6dUHmWnM",
    authDomain: "amorvile.firebaseapp.com",
    projectId: "amorvile",
    storageBucket: "amorvile.firebasestorage.app",
    messagingSenderId: "702567634407",
    appId: "1:702567634407:web:ffdf1915798b7df0a31942",
    measurementId: "G-15YSRNRG00"
    };


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const postsRef = ref(database, 'posts');

function getData(){
    return get(postsRef).then((snapshot) => {
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

var dados = getData();
var usuario;
onAuthStateChanged(auth, (user) => {
if (user) {
    if(user.email == "viniciusneve00@gmail.com"){
        usuario = "Vinicius";
    }else if(user.email == "leticiavitoriaa2005@gmail.com"){
        usuario = "Leticia"
    }
    } else {
        window.alert("Usuário não Identificado")
        window.location.href = "login.html"; 
    }
});


const form = document.getElementById("creationform");
var postagens = document.getElementById("postagens");

async function carregarPosts() {
    try {
        const dados = await getData();
        if (dados) {
            for (const key in dados) {
                if (dados.hasOwnProperty(key)) {
                    const post = dados[key];
                    postagens.appendChild(createDate(post.titulo, post.user, post.data, post.desc));
                }
            }
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

// Chame a função
carregarPosts();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var tit = document.getElementById("title");
    var dat = document.getElementById("data");
    var des = document.getElementById("descricao");

    if(usuario != 'Vinicius' && usuario != 'Leticia'){
        window.alert("Você não tem essa permissão")
    }else{
        if (tit.value !== null && des.value !== null) {
            var dataFormatada = formatarDataInput(dat.value); // Formata a data selecionada
            insertData(tit.value, dataFormatada, des.value, usuario);
        }
        window.location.href = window.location.href;
    }
});

function createDate(titulo,user,data,descricao){
    var div = document.createElement("div");
    div.id = "dataEspecial";
    var header = document.createElement("div")
    header.id = "header"
    var title = document.createElement("span");
    title.textContent = titulo;
    title.id = "titulo"
    header.appendChild(title);
    var tempo = document.createElement("span");
    tempo.textContent = data
    tempo.id = "tempo"
    header.appendChild(tempo)
    div.appendChild(header)
    var desc = document.createElement("span");
    desc.textContent = descricao
    desc.id = "desc"
    div.appendChild(desc)
    var ass = document.createElement("span");
    ass.textContent = `Ass: ${user}`
    ass.id = "ass"
    div.appendChild(ass)
    return div;
}

function formatarDataInput(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}
