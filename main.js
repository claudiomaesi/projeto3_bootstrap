$(document).ready(function() {    
   
   
   /* MÁSCARA TELEFONE */
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    })

    /* VALIDAÇÃO DOS CAMPOS DO FORMULÁRIO */
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },

        /* MENSAGENS PARA OS CAMPOS DO FORMULÁRIO */
        messages: {
            nome: 'Preencha seu nome completo',            
            email: 'Preencha seu e-mail',
            mensagem: 'Preencha a sua mensagem'        
        },
    })
})