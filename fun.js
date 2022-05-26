$(document).ready(function(){
    $('.container__calculator').submit(function(evt){
        evt.preventDefault();
        const speed = $('#speed').val();
        let unit = 1.6;
        if($('#km').is(':checked')){
            unit = 1; 
        }
        let answer = Math.round(3600/(speed*unit));
        $('#input__km').text(answer);
        $('#input__mm').text(answer/10);
        $('#input__m').text(answer/100);
    });
});