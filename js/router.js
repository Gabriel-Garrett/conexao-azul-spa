// Importa a função que liga os eventos do formulário
import { iniciarValidacaoFormulario } from './validation.js';

const routes = {
    "/": "/html/home.html",       // <--- Deve apontar para o home.html e nunca para index.html
    "/cadastro": "/html/cadastro.html",
    "/projetos": "/html/projetos.html"
};

const router = async () => {
    const path = window.location.pathname;
    const routeMatch = routes[path] || routes["/"];

    try {
        const response = await fetch(routeMatch);
        const html = await response.text();
        document.getElementById("conteudo-principal").innerHTML = html;

        // Se a página carregada for a de cadastro, reativa os eventos do formulário!
        if (path === "/cadastro") {
            iniciarValidacaoFormulario();
        }
    } catch (erro) {
        console.error("Erro ao carregar a rota:", erro);
    }
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// Exporta a função que inicializa o roteamento
export const iniciarRoteador = () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    window.addEventListener("popstate", router);
    document.addEventListener("DOMContentLoaded", router);
};