// Importa a função de salvar no localStorage
import { salvarNoStorage } from './storage.js';

export const iniciarValidacaoFormulario = () => {
    const form = document.getElementById("form-cadastro");
    
    // Se o formulário não existir na tela, interrompe a função
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        // Validação simples de campos vazios
        if (nome === "" || email === "") {
            // Usa o SweetAlert2 (que configuramos no index.html) em vez do alert() feio
            Swal.fire({
                title: 'Erro!',
                text: 'Preencha todos os campos corretamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        // Se estiver tudo certo, salva os dados
        salvarNoStorage({ nome, email });

        // Exibe o alerta de sucesso bonito
        Swal.fire({
            title: 'Sucesso!',
            text: 'Cadastro realizado com sucesso!',
            icon: 'success',
            confirmButtonText: 'Fechar'
        });

        // Limpa o formulário após o envio
        form.reset();
    });
};