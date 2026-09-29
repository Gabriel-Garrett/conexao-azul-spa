export const salvarNoStorage = (novoDado) => {
    // Tenta recuperar a lista antiga (JSON.parse), se não existir, cria um array vazio
    const cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros_ong")) || [];
    
    // Adiciona o novo cadastro
    cadastrosSalvos.push(novoDado);
    
    // Salva tudo de volta como string (JSON.stringify)
    localStorage.setItem("cadastros_ong", JSON.stringify(cadastrosSalvos));
};