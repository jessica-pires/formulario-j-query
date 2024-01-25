
$(document).ready(function () {
    $('#telefone').mask('(00)00000-0000',{
        placeholder: '(00)00000-0000'
    })
    $('#cep').mask('00000-000',{
        placeholder: '00000-000'
    })
    $('#CPF').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    })
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cep:{
                required: true
            },
            CPF:{
                required:true
            },

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            CPF: 'Campo Obrigatório',
            telefone:'Campo Obrigatório',
            email:'Campo Obrigatório',
            cep:'Campo Obrigatório'
        },
    })
    $('button').click((e) =>{ 
        e.preventDefault();
        if($('form').valid()){
            alert('campos preenchidos')

        }

        })

        
    
});