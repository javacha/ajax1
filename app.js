


$(document).ready(function(){

    /*   V1 no anda con getJson
    console.log('cargando seteos spinner');
    $("#spinner").bind("ajaxSend", function() {
        console.log('va a arrancar el spinner....');
        $(this).show();
    }).bind("ajaxStop", function() {
        console.log('OK  chau spinner....');
    }).bind("ajaxError", function() {
        console.log('ERR chau spinner....');
    });
    */

    //  V2 anda con getJson
    $(document).on({
        ajaxStart: function() { activarProcesando() },
        //ajaxStop: function() { $('#spinner').hide(); }    
        ajaxComplete: function() { desactivarProcesando() }    
    })
});

function activarProcesando() {
    $('#spinner').show(); 
    $.blockUI({ message: "" });
}

function desactivarProcesando() {
    $('#spinner').hide();  
    $.unblockUI();
}




var url1 = 'http://dummy.restapiexample.com/api/v1/employees';
var url2 = 'https://api.mlab.com/api/1/databases/javacha-com-test/collections/clientes?apiKey=rwzdYqTvXXVIyDH1z3JwtTf_CHkwf3CM';

$("#queryBtn").click(function() {

    console.log('buscando info - ' + new Date());
    $.getJSON(url2, function (data) {

        $(data).each(function (i, hero) {
            $('#heroesBody').append($("<tr>")
                .append($("<td>").append(hero.nombre))
                .append($("<td>").append(hero.email))
                .append($("</tr>")));          
        })
    })
    .done(function () {
        console.log('completed');
    })
    .fail(function (e) {
        console.log('error:');
        console.error(e);
    })
    .always(function () {
        //alert("FIN");
        
    })
});


// Probar

function removeBack(){
	window.location.hash="nbb";
	window.location.hash="";
	window.onhashchange=function(){window.location.hash="";}
}
