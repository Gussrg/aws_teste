// Validação simples do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode enviar o formulário para um servidor, por exemplo
    }
});
