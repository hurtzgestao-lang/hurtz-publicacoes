function aguardeHide(tempo) {
	if (tempo != undefined) {
		setTimeout("PF('modalAguarde').hide()", tempo);
	} else {
		PF('modalAguarde').hide();
	}
}

function irCadastroAtividade() {
	$('html,body').animate({
		scrollTop: 345
	}, 'slow');
}

function stopRKey(evt) {
	var evt = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement
		: null);
	if ((evt.keyCode == 13) && (node.type == "text")) {
		return false;
	}
}
document.onkeypress = stopRKey;

function iniciarDialog() {
	$('.positionFixed').css('position', 'fixed');
}

function id(id) {
	return PrimeFaces.escapeClientId(id);
}

function prevenirVoltar() {
	window.onpopstate = function() {
		window.history.forward();
	};
	for (i = 0; i < 15; i++) {
		history.pushState('', '');
	}
}
prevenirVoltar();

$(document).ready(function() {

	$(".ui-wizard-nav-next").click(function() {
		$('html,body').animate({
			scrollTop: 145
		}, 'slow');
	});

	$(".ui-wizard-nav-back").click(function() {
		$('html,body').animate({
			scrollTop: 145
		}, 'slow');
	});

	window.onscroll = function() {

		var scroll = window.scrollY;

		var element = document.querySelector(".navbar");

		if (element != null) {
			var topDist = element.offsetTop;
			if (scroll > element.offsetTop) {
				document.querySelector('nav').classList.add("sticky");
				document.querySelector('.back-to-top').classList.add('show');
			} else {
				document.querySelector('nav').classList.remove("sticky");
				document.querySelector('.back-to-top').classList.remove('show');
			}
		}
	};
});

function backToTop() {
	$('html,body').animate({
		scrollTop: 0
	}, 'slow');
};

function callToAction() {
	var offset = 90;
	$('html, body').animate({
		scrollTop: $("#fluxo-destaque-container").offset().top - offset
	}, 500);
}

function abrirPopup(URL, titulo, largura, altura) {
	var left = (screen.width - largura) / 2;
	var top = (screen.height - altura) / 4;
	var janela = window
		.open(
			URL,
			titulo,
			'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='
			+ largura
			+ ', height='
			+ altura
			+ ', top='
			+ top
			+ ', left=' + left);
}