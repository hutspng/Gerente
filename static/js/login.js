document.querySelector("#login").addEventListener("click", function() {
    // Pegar os valores no momento do clique
    const codeNomeInput = document.querySelector("#CodeNome");
    const senhaInput = document.querySelector("#Codigo");
    
    // Verificar se os elementos existem
    if (!codeNomeInput || !senhaInput) {
        console.error("Elementos não encontrados!");
        return;
    }

    const codeNome = codeNomeInput.value.trim();
    const senha = senhaInput.value.trim();

    // Validação dos campos
    if (codeNome === "") {
        codeNomeInput.placeholder = "CAMPO OBRIGATÓRIO";
        codeNomeInput.style.borderColor = "red";
        return;
    }

    if (senha === "") {
        senhaInput.placeholder = "CAMPO OBRIGATÓRIO";
        senhaInput.style.borderColor = "red";
        return;
    }

    // Validação das credenciais
    if (codeNome === "bolinha" && senha === "xebiu") {
        window.location.href = "../templates/home.html";
    } else {
        alert("CodeNome ou código incorretos");
        // Limpar campos
        senhaInput.value = "";
        senhaInput.focus();
    }
});

