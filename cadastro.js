import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const formulario = document.getElementById("formCadastro");


formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    console.log("1 - Formulário enviado");


    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;


    console.log("2 - Dados recebidos:", {
        nome: nome,
        email: email
    });


    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }


    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }


    try {

        console.log("3 - Criando usuário no Firebase Authentication...");


        const resultado = await createUserWithEmailAndPassword(
            auth,
            email,
            senha
        );


        const usuario = resultado.user;


        console.log("4 - Usuário criado!");
        console.log("UID:", usuario.uid);


        console.log("5 - Salvando dados no Firestore...");


        await setDoc(
            doc(db, "usuarios", usuario.uid),
            {
                nome: nome,
                email: email
            }
        );


        console.log("6 - Dados salvos no Firestore!");


        await updateProfile(usuario, {
            displayName: nome
        });


        console.log("7 - Nome salvo no perfil!");


        alert("Cadastro realizado com sucesso! 💙");


        console.log("8 - Indo para diabetes2.html");


        window.location.href = "diabetes2.html";


    } catch (erro) {

        console.error("ERRO NO CADASTRO:");
        console.error("Código:", erro.code);
        console.error("Mensagem:", erro.message);


        alert(
            "Erro no cadastro:\n\n" +
            erro.code +
            "\n\n" +
            erro.message
        );

    }

});