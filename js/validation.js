// Importa a função de salvar no localStorage
import { salvarNoStorage } from './storage.js';

export const iniciarValidacaoFormulario = () => {
    const form = document.getElementById("form-cadastro");
    
    // Se o formulário não existir na tela, interrompe a função
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura todos os campos que definimos no HTML
        const nome = document.getElementById("nome").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const cep = document.getElementById("cep").value.trim();

        // Validação simples (embora os atributos 'required' e 'pattern' do HTML5 já façam a maior parte)
        if (!nome || !cpf || !email || !telefone || !cep) {
            Swal.fire({
                title: 'Erro!',
                text: 'Preencha todos os campos corretamente.',
                icon: 'error',
                confirmButtonColor: '#dc3545', // Usa o nosso vermelho padrão de erro
                confirmButtonText: 'Ok'
            });
            return;
        }

        // Se estiver tudo certo, salva os dados completos
        salvarNoStorage({ nome, cpf, email, telefone, cep });

        // Exibe o alerta de sucesso bonito com o verde da nossa paleta
        Swal.fire({
            title: 'Sucesso!',
            text: 'Cadastro realizado com sucesso!',
            icon: 'success',
            confirmButtonColor: '#28a745', 
            confirmButtonText: 'Fechar'
        });

        // Limpa o formulário após o envio
        form.reset();
    });
};