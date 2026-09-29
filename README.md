# **Conexão Azul**
Uma *Single Page Application* (SPA) moderna e acessível, desenvolvida como um projeto acadêmico focado em padrões de desenvolvimento web, design inclusivo e fluxos de trabalho estruturados de controle de versão.

## **Descrição do Projeto**
A Conexão Azul foi projetada para fornecer uma experiência web visual e interativa fluida, adaptada para a acessibilidade do usuário. Construída como uma *Single Page Application*, ela entrega uma navegação rápida no lado do cliente sem recarregamentos completos da página, garantindo a persistência do estado e jornadas de usuário suaves. Este projeto serve como uma entrega acadêmica demonstrando arquiteturas *front-end* modernas, adesão estrita às diretrizes de acessibilidade web e modelos profissionais de ramificação do Git.

## **Principais Funcionalidades**
*   **Arquitetura *Single Page Application*:** Alimentada por roteamento no lado do cliente, permitindo transições de página instantâneas, atualizações de estado contínuas e carregamento otimizado de recursos.
*   **Roteamento Dinâmico no Cliente:** Manipulação de rotas personalizada que renderiza módulos de visualização dinamicamente sem solicitar novos documentos HTML do servidor.
*   **Acessibilidade WCAG 2.1 AA:** Projetada desde o início para garantir alto contraste, compatibilidade com leitores de tela, navegação completa pelo teclado e dimensionamento responsivo.
*   **Layout Responsivo:** Sistema de design totalmente adaptável que se ajusta de forma consistente em telas de celulares, tablets e desktops.

## **Tecnologias Utilizadas**

| Categoria | Tecnologia / Ferramenta | Propósito |
| :--- | :--- | :--- |
| **Arquitetura Principal** | HTML5 / JavaScript (ES6+) | Estrutura semântica da página e lógica principal da aplicação |
| **Estilização** | CSS3 / Estilos Modulares | Layout responsivo personalizado, temas e animações |
| **Roteamento** | Módulo de Roteador no Cliente | Visualizações dinâmicas e gerenciamento de estado do histórico |
| **Controle de Versão** | Git / GitHub | Gerenciamento de código e fluxo de trabalho de ramificação GitFlow |
| **Testes e Auditoria** | Axe DevTools / Lighthouse | Validação de acessibilidade (WCAG) e desempenho |

## **Instalação e Como Rodar Localmente**
Siga estes passos para executar o projeto em um ambiente de desenvolvimento local.

**Pré-requisitos**
*   Um navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari).
*   [Git](https://git-scm.com/) instalado na sua máquina.
*   Editor de código VS Code com a extensão *Live Server* instalada.

**Configuração Local**
1.  **Clone o Repositório**
    ```bash
    git clone [https://github.com/Gabriel-Garrett/conexao-azul-spa.git](https://github.com/Gabriel-Garrett/conexao-azul-spa.git)
    cd conexao-azul-spa
    ```
2.  **Inicie o Servidor Local**
    Abra a pasta do projeto no VS Code e inicie o *Live Server* clicando em "Go Live" no canto inferior direito da tela.
3.  **Acesse a Aplicação**
    Abra o seu navegador e acesse o endereço local gerado (geralmente `http://127.0.0.1:5500`).

## **Acessibilidade (Conformidade WCAG 2.1 AA)**
A acessibilidade é um foco central da Conexão Azul. A aplicação foi construída em conformidade com os padrões **WCAG 2.1 Nível AA** para garantir uma experiência inclusiva para todos os usuários, incluindo aqueles que dependem de tecnologias assistivas.

**Padrões Implementados**
*   **Navegação por Teclado:** Todos os elementos interativos (links, botões, controles de formulário) são alcançáveis e operáveis por meio de interações padrão do teclado (Tab, Shift+Tab, Enter, Espaço). Indicadores visuais de foco são mantidos em toda a aplicação.
*   **Semântica e Roles ARIA:** Uso adequado de marcos ARIA (main, nav, banner), regiões dinâmicas (aria-live) para atualizações de rota e descritores de estado (aria-expanded, aria-selected).
*   **Contraste de Cor e Tipografia:** O texto e os elementos da interface mantêm uma taxa de contraste mínima de 4.5:1 em relação aos seus fundos. O texto pode ser ampliado em até 200% sem perda de conteúdo ou funcionalidade.
*   **Anúncios para Leitores de Tela:** As mudanças dinâmicas de rota atualizam o título do documento e acionam notificações acessíveis para que as tecnologias assistivas anunciem novas visualizações imediatamente.

## **Estratégia de Controle de Versão (GitFlow)**
Este projeto adere estritamente ao modelo **GitFlow** para manter um histórico limpo, isolar o desenvolvimento de funcionalidades e garantir a estabilidade do código durante todo o ciclo de desenvolvimento acadêmico.

```text
main        --------------------------------------------------------> (Produção)
              \                                          /
develop        \-----[feature/rotas]----->[release]---/----------> (Integração)
