$("document").ready(function() {
	desabilitarBotaoAcaoSolicitarCertidao();
});

$(window).on('load', function () {
    $('#altcha').on('statechange', function (ev) {
        
       	const altchaWidget = this;
        const $altchaWidget = $(altchaWidget);
        const $altchaHidden = $altchaWidget.closest('form').find('[id$="altchaPayloadInput"]');
        const detail = ev.originalEvent.detail;
        const state = detail.state;
        const payload = detail.payload;
        
        $altchaHidden.val('');
        
        switch (state) {
            case 'verified':
                habilitarBotaoAcao();
                habilitarBotaoAcaoSolicitarCertidao();
                habilitarBotaoConsultaCertidao();
                $altchaHidden.val(JSON.stringify(payload));
                console.log($altchaHidden);
                break;

			case 'expired':
            case 'error':
           	 	$altchaHidden.val('');
                desabilitarBotaoAcao();
                desabilitarBotaoAcaoSolicitarCertidao();
                desabilitarBotaoConsultaCertidao();
                break;
        }
    });
});

function desabilitarBotaoAcaoSolicitarCertidao() {
	$("#botaoAcaoSolicitarCertidao")
		.attr("class",
			"ui-button ui-widget ui-state-disabled ui-corner-all ui-button-text-only botao");
	$("#botaoAcaoSolicitarCertidao").attr("aria-disabled", "true");
	$("#botaoAcaoSolicitarCertidao").attr("disabled", "disabled");
}

function habilitarBotaoAcaoSolicitarCertidao() {
	$("#botaoAcaoSolicitarCertidao")
		.attr("class",
			"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only botao");
	$("#botaoAcaoSolicitarCertidao").removeAttr("disabled");
	$("#botaoAcaoSolicitarCertidao").attr("aria-disabled", "false");

}

$("document").ready(function() {
	desabilitarBotaoAcao();
	desabilitarBotaoConsultaCertidao();
});

function habilitarBotaoAcao() {
	$("#botaoAcao").attr("class", "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only botao");
	$("#botaoAcao").removeAttr("disabled");
	$("#botaoAcao").attr("aria-disabled", "false");
	$("#botaoAcaoSecundario").attr("class", "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only botao");
	$("#botaoAcaoSecundario").removeAttr("disabled");
	$("#botaoAcaoSecundario").attr("aria-disabled", "false");
}

function desabilitarBotaoAcao() {
	$("#botaoAcao").attr("class", "ui-button ui-widget ui-state-disabled ui-corner-all ui-button-text-only botao");
	$("#botaoAcao").attr("aria-disabled", "true");
	$("#botaoAcao").attr("disabled", "disabled");
	$("#botaoAcaoSecundario").attr("class", "ui-button ui-widget ui-state-disabled ui-corner-all ui-button-text-only botao");
	$("#botaoAcaoSecundario").attr("aria-disabled", "true");
	$("#botaoAcaoSecundario").attr("disabled", "disabled");
}

function habilitarBotaoConsultaCertidao() {
	$("#botaoAcaoConsulta").attr("class", "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only botao");
	$("#botaoAcaoConsulta").removeAttr("disabled");
	$("#botaoAcaoConsulta").attr("aria-disabled", "false");
}

function desabilitarBotaoConsultaCertidao() {
	$("#botaoAcaoConsulta").attr("class", "ui-button ui-widget ui-state-disabled ui-corner-all ui-button-text-only botao");
	$("#botaoAcaoConsulta").attr("aria-disabled", "true");
	$("#botaoAcaoConsulta").attr("disabled", "disabled");
}