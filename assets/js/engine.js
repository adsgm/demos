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
		$('#search-overlay').hide(300); $('#search').removeClass('on');
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
 $(function() {
    $( "#tabs" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom .ui-tabs-nav" ).appendTo( ".tabs-bottom" );
  });
   $(function() {
    $( "#tabs1" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom1 .ui-tabs-nav" ).appendTo( ".tabs-bottom1" );
  });
   $(function() {
    $( "#tabs2" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom2 .ui-tabs-nav" ).appendTo( ".tabs-bottom2" );
  });
  $(function() {
    $( "#tabs3" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom3 .ui-tabs-nav" ).appendTo( ".tabs-bottom3" );
  });
   $(function() {
    $( "#tabs4" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom4 .ui-tabs-nav" ).appendTo( ".tabs-bottom4" );
  });
   $(function() {
    $( "#tabs5" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom5 .ui-tabs-nav" ).appendTo( ".tabs-bottom5" );
  });
   $(function() {
    $( "#tabs6" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom6 .ui-tabs-nav" ).appendTo( ".tabs-bottom6" );
  });
   $(function() {
    $( "#tabs7" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom7 .ui-tabs-nav" ).appendTo( ".tabs-bottom7" );
  });
   $(function() {
    $( "#tabs8" ).tabs();
    // move the nav to the bottom
    $( ".tabs-bottom8 .ui-tabs-nav" ).appendTo( ".tabs-bottom8" );
  });

  $(function() {
    $( document ).tooltip();
  });
  // esta rutina se ejecuta cuando jquery esta listo para trabajar
$(function() 
{
    // configuramos el control para realizar la busqueda de cedulas
  
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
