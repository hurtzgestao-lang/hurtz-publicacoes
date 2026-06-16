var tempoSessao = new Number();

$(document).ready(function() {
    resetarSessao();
    iniciarTimesSessao();
    chamarChecarCookie();
});

function iniciarTimesSessao() {
	
    if ((tempoSessao - 1) >= 0) {
    	
        var min = parseInt(tempoSessao / 60);
        var seg = tempoSessao % 60;               
        
        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        
        if (seg <= 9) {
            seg = "0" + seg;
        }
        
        if (min < 1 && seg == 59) {
        	PF('modalSessaoVaiExpirar').show();
    	}
       
        horaImprimivel = min + ':' + seg + 's';
        $("#timer-sessao" ).html(horaImprimivel);
		$("#timer-sessao-mobile").html(horaImprimivel);
        setTimeout('iniciarTimesSessao()', 1000);

        tempoSessao--;
                
    } else {
		PF('modalSessaoVaiExpirar').hide();
        PF('modalSessaoExpirada').show();
    }
}

function resetarSessao() {	
    tempoSessao = document.getElementById("tempoSessaoHidden") ? document.getElementById("tempoSessaoHidden").value : 0;
}

function chamarChecarCookie() {
        setTimeout(function() {
            checarCookie();
        }, 3000); // 3000 milissegundos =  segundos
}