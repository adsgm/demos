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

	// Search
	$(document).bind('keydown', function(e){ fnsearch(e); });
	$('#search').live('click', function(){ 
		$(this).addClass('on');
		var w = $(document).width(); var h = $(document).height(); //var h2 = $('#footer').height(); h = h - h2 - 25;
		$('#search-overlay').width(w).height(h);
		$('#search-overlay').show(300);
		$('#autocomplete').focus();
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
		$('#autocomplete').focus();
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
			/* javascript de tabs*/
			$('.questions').click(function () {
				$(this).addClass('active')
				$(this).('.showgeneral , .showresult').slideToggle({direction: "up"}, 300);});

  
			