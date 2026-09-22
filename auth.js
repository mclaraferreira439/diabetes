import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


onAuthStateChanged(auth, (user) => {

    const botaoLogin = document.getElementById("botaoLogin");
    const nomeUsuario = document.getElementById("nomeUsuario");
    const botaoSair = document.getElementById("botaoSair");


    if (user) {

        // Esconde o botão Entrar / Cadastrar
        if (botaoLogin) {
            botaoLogin.style.display = "none";
        }


        // Mostra o nome do usuário
        if (nomeUsuario) {

            nomeUsuario.textContent =
                "Olá, " + (user.displayName || "usuário") + "! 💙";

            nomeUsuario.style.display = "inline";
        }


        // Mostra o botão Sair
        if (botaoSair) {
            botaoSair.style.display = "inline-block";
        }

    } else {

        // Mostra o botão Entrar / Cadastrar
        if (botaoLogin) {
            botaoLogin.style.display = "inline-block";
        }


        // Esconde o nome
        if (nomeUsuario) {
            nomeUsuario.textContent = "";
            nomeUsuario.style.display = "none";
        }


        // Esconde o botão Sair
        if (botaoSair) {
            botaoSair.style.display = "none";
        }

    }

});


async function sair() {

    try {

        await signOut(auth);

        window.location.href = "diabetes2.html";

    } catch (erro) {

        console.error("Erro ao sair:", erro);

        alert("Erro ao sair da conta.");

    }

}


window.sair = sair;