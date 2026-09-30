import { iniciarRoteador } from './router.js';

// Seleciona os elementos do menu no DOM
const btnMenu = document.getElementById('menu-toggle');
const menuPrincipal = document.getElementById('menu-principal');

// Lógica do Menu Responsivo com Acessibilidade (WAI-ARIA)
if (btnMenu && menuPrincipal) {
    btnMenu.addEventListener('click', () => {
        // 1. Alterna a classe visual do CSS para exibir/ocultar o menu no mobile
        menuPrincipal.classList.toggle('ativo');
        
        // 2. Verifica se a classe 'ativo' foi adicionada (menu aberto)
        const menuAberto = menuPrincipal.classList.contains('ativo');
        
        // 3. Atualiza o atributo no HTML para avisar os leitores de tela em tempo real
        btnMenu.setAttribute('aria-expanded', menuAberto);
    });
}

// Inicia a aplicação e gerencia as rotas da SPA
iniciarRoteador();