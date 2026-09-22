import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const formulario = document.getElementById("formLogin");


formulario.addEventListener("submit", async function(event) {

    event.preventDefault();


    const email = document.getElementById("email").value.trim();

    const senha = document.getElementById("senha").value;


    if (!email || !senha) {

        alert("Preencha o e-mail e a senha.");

        return;
    }


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            senha
        );


        alert("Login realizado com sucesso! 💙");


        window.location.href = "diabetes2.html";


    } catch (erro) {

        console.error("Erro no login:", erro);


        if (erro.code === "auth/invalid-credential") {

            alert("E-mail ou senha incorretos.");

        }

        else if (erro.code === "auth/too-many-requests") {

            alert("Muitas tentativas. Tente novamente mais tarde.");

        }

        else {

            alert("Erro ao fazer login: " + erro.message);

        }

    }

});