import { iniciarValidacaoFormulario } from './validation.js';

const routes = {
    "/": { template: "/html/home.html", title: "Início - Conexão Azul" },
    "/cadastro": { template: "/html/cadastro.html", title: "Cadastro - Conexão Azul" },
    "/projetos": { template: "/html/projetos.html", title: "Projetos Sociais - Conexão Azul" }
};

const router = async () => {
    const path = window.location.pathname;
    const routeMatch = routes[path] || routes["/"];

    try {
        const response = await fetch(routeMatch.template);
        const html = await response.text();
        document.getElementById("conteudo-principal").innerHTML = html;
        document.title = routeMatch.title;

        // ATUALIZAÇÃO VISUAL: Move o sublinhado amarelo para a página ativa
        document.querySelectorAll('nav a[data-link]').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });

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

export const iniciarRoteador = () => {
    document.body.addEventListener("click", e => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            navigateTo(link.href);
        }
    });

    window.addEventListener("popstate", router);
    document.addEventListener("DOMContentLoaded", router);
};