$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const email = $('#input-email').val()
        if(!validateEmail(email)){
            $('#error-message').css('display', 'block')
            $('#input-email').addClass('input-error')            
        }else{
            $('.container').css('display', 'none')
            $('#thanks').css('display', 'block')
            $('#input-email').val('')
            $('#input-email').removeClass('input-error')  
            $('#error-message').css('display', 'none')
        }

        $('#output-email').text(email)
        
    })
    
    $('#btn-dismiss').on('click', function(){
        $('.container').css('display', '')
        $('#thanks').css('display', 'none')
    })
    
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
})