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
		$('#close').click(function(){ $('#search-overlay').hide(300); $('#search').removeClass('on'); });
	});
	$('#search.on').live('click', function(){ 
		$('#search-overlay').hide(300); $('#search').removeClass('on');
	});
	
	var demo = [
   { value: 'Transferencias', type: 'Concierto' },
   { value: 'The Killers', type: 'Artista' },
   { value: 'The Kill', type: 'Obra Musical' },
   { value: 'Kill Bill 5', type: 'Premiere' }
	];
	
	$('#autocomplete').autocomplete({
		lookup: demo,
		onSelect: function (suggestion) {
			$.get('busqueda.html', function(data){ $('#results .cont').html(data); });			
			$('#s-intro').html( );
		}
	});
});
function fnsearch(e){ 
	if (e.keyCode == 27){ 
		$('#search-overlay').hide(300); $('#search').removeClass('on');
	} 
	if (e.keyCode >= 65 && e.keyCode <= 90){
		$('#search').addClass('on');
		var w = $(document).width(); var h = $(document).height(); var h2 = $('#footer').height(); h = h - h2 - 25;
		$('#search-overlay').width(w).height(h).show(300);
		$('#autocomplete').focus();
	}
	$('#close').click(function(){ $('#search-overlay').hide(300); $('#search').removeClass('on'); });
}

  
