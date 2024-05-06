$(document).ready(function() {
    // Aplicando máscaras aos campos
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');

    // Submeter o formulário
    $('#cadastroForm').submit(function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        
        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor
        // Por exemplo, usando AJAX ou submeter o formulário normalmente
        // Aqui, por simplicidade, vamos apenas mostrar os dados no console
        var formData = $(this).serialize();
        console.log(formData);
    });
});
