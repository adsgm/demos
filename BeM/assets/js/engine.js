$(document).ready(function() {

	// Menu overlay
	$('body').append('<div id="menu-overlay">');
	$(document).bind('scroll', function(){
		var posY = $(document).scrollTop();
		if(posY > 100) $('#menu-overlay').slideDown(400);
		if(posY <= 100) $('#menu-overlay').slideUp(400);
	});

	// Newsletter
	$('#newsletter a').click(function(){ 
		$(this).hide(); 
		$(document).unbind('keydown');
		$('#newsletter input').show().focus().blur(function(){
			$(this).hide();
			$(this).parent().find('a').show();
			$(document).bind('keydown', function(e){ fnsearch(e); });
		});
	});
	$('#newsletter input').focus()
	
	// Fullscreen
	$('#full').click(function(){
		if (screenfull.enabled) {
			screenfull.request();
		}
	});

	// Tabs de Busqueda
	$('.questions').click(function () {
		$(this).toggleClass('active');
		$(this).parent().parent().find('.questGuia a').toggleClass('equis');
		if($(this).hasClass('active')) {
		$(this).parent().parent().find('.showresult').show("slide", { direction: "down" }, 300);;
		$(this).parent().parent().find('.showgeneral').hide();
	}
	else{
		$(this).parent().parent().find('.showresult').hide();
		$(this).parent().parent().find('.showgeneral').show("slide", { direction: "down" }, 300);;
	}
  });

	// Search
	$(document).bind('keydown', function(e){ fnsearch(e); });
	$('#search').live('click', function(){ 
		$(this).addClass('on');
		var w = $(document).width(); var h = $(document).height(); //var h2 = $('#footer').height(); h = h - h2 - 25;
		$('#search-overlay').width(w).height(h);
		$('#search-overlay').show(300);
		$('#tfBuscar').focus();
		$('#close2').click(function(){ $('#search-overlay').hide(300); $('#search').removeClass('on'); });
	});
	$('#search.on').live('click', function(){ 
		$('#search-overlay').hide(300); $('#search1').removeClass('on');
	});
	// Search
	$(document).bind('keydown', function(e){ fnsearch(e); });
	$('#search1').live('click', function(){ 
		$(this).addClass('on');
		var w = $(document).width(); var h = $(document).height(); //var h2 = $('#footer').height(); h = h - h2 - 25;
		$('#search-overlay').width(w).height(h);
		$('#search-overlay').show(300);
		$('#tfBuscar').focus();
		$('#close2').click(function(){ $('#search-overlay').hide(300); $('#search1').removeClass('on'); });
	});
	$('#search.on').live('click', function(){ 
		$('#search-overlay').hide(300); $('#search1').removeClass('on');
	});
	
	$(document).on("ready", main);
	
		function buscar(){
	var tarjetas = $(".tarjeta");
	var texto    = $("#tfBuscar").val();
	   $("#tfBuscar").focus();
	texto        = texto.toLowerCase();
	tarjetas.show();
	for(var i=0; i< tarjetas.size(); i++){
		var contenido = tarjetas.eq(i).text();
		contenido     = contenido.toLowerCase();
		var index     = contenido.indexOf(texto);
		 
		if(index == -1){
			tarjetas.eq(i).hide();
		}		
	}
}

});
 

		$(document).on("ready", main);
		function main(){
			$("#tfBuscar").on("keyup", buscar);
		}
		function buscar(){
			var tarjetas = $(".tarjeta");
			var texto = $("#tfBuscar").val();
			texto = texto.toLowerCase();
			tarjetas.show();
			for(var i=0; i< tarjetas.size(); i++){
				var contenido = tarjetas.eq(i).text();
				contenido = contenido.toLowerCase();
				var index = contenido.indexOf(texto);
				if(texto.toLowerCase()=='pagos'||texto.toLowerCase()=='transferencias'){
							$('.busqueda1').removeClass('hide')
							$('#no-encontrado').addClass('hide')
						}else{
							$('.busqueda1').addClass('hide')
							$('#no-encontrado').removeClass('hide')
							
						}
				}
			}	
	function fnsearch(e){ 
	if (e.keyCode == 27){ 
		$('#search-overlay').hide(300); $('#search1').removeClass('on');
	} 
	if (e.keyCode >= 65 && e.keyCode <= 90){
		$('#search1').addClass('on');
		var w = $(document).width(); var h = $(document).height(); var h2 = $('#footer').height(); h = h - h2 - 25;
		$('#search-overlay').width(w).height(h).show(300);
		$('#tfBuscar').focus();
	}
	$('#close2').click(function(){ $('#search-overlay').hide(300); $('#search').removeClass('on'); });
}
// Inicio
	// Search
	$(document).ready(function() {
		var w = $(document).width(); var h = $(document).height(); 
		$('#search-overlay1').width(w).height(h);
	$('#close3').live('click', function(){ 
	$('#search-overlay1').hide();
	});
});