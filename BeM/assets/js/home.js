$(document).ready(function(){
	
	// Appends
	$('.month, .acc-cont').each(function(){ $(this).append('<span>'); });

	// Stages
	/*$('#stages .stage').each(function(index){ if( index == 0 ) $('#nav-stages').append('<a class="on"></a>'); else $('#nav-stages').append('<a></a>'); });
	$('#stages .iosSlider').iosSlider({
		autoSlide: true,
		autoSlideTimer: 7000,
		snapToChildren: true,
		infiniteSlider: true,
		navSlideSelector: $('#nav-stages a'),
		onSlideChange: function(args){
			var index = args.currentSlideNumber; 
			$('#nav-stages .on').removeClass('on');
			$('#nav-stages a:eq(' + index +')').addClass('on');
		}
	});*/

	// Noticias
	$('#horizontal-wrap').parent().append('<div id="overlay"></div><div id="overlay-right"></div>');
	var $container = $('#isotope');
	$container.isotope({
		itemSelector : '.item',
		layoutMode : 'fitColumns',
		resizable: true
	});

	// Scroll noticias
	var pane = $('.scroll-pane');
	pane.jScrollPane({ animateScroll: true });
	var api = pane.data('jsp');
	
	// Videos
	$('#isotope .play').live('click', function(){
		var w = $(window).width();
		var l = $(this).parent().position(); l = l.left + 680;
		$(this).parent().find('.video-detail').show();
		$(this).hide();
		$(this).parent().addClass('over').animate({ width: 1124, height: 800, top: '-98px' }, { queue: false, duration: 800, complete: function(){ $('#isotope').isotope( 'reLayout'); } });
		api.scrollToX(l);
		//bodyelem.animate({ scrollLeft: l }, { queue: false, duration: 800 });
	});
	
	$('.video-detail .close').live('click', function(){
		$('.over .video-detail').hide();
		$('.over .play').show();
		$('.over').removeClass('over').animate({ width: 510, height: 510, top: '0' }, { queue: false, duration: 800, complete: function(){ $('#isotope').isotope( 'reLayout'); } });
	});
	
	// Scroll a noticias
	var w = $(window).width();

	$('.next').live('click', function(){	
		api.scrollByX(600);
		$('.next').addClass('back'); 
		$('.scroll-right').show();
		$('#news-menu').css({ left: '100px', 'z-index': '70' });
	});

	/*$('.next').live('click', function(){	
		api.scrollByX(w);
		$('.next').addClass('back'); 
		$('.scroll-right').show();
		$('#news-menu').css({ position: 'fixed', left: '180px' }); 
		scrollPosition();
		if($.browser.safari) { bodyelem = $("body"); }
		else bodyelem = $("html,body");
		bodyelem.animate({ scrollLeft: '710' }, { queue: false, duration: 800 });
	});*/
	
	$('.scroll-right').live('click', function(){
		api.scrollByX(w);	
		
		var stpos = $('.jspPane').position();
		var isotopew = $('#isotope').width();
		isotopew = -1 * (isotopew - 730);
		
		if( stpos.left > isotopew ){
			// Infinite scroll
			$container.infinitescroll({
				navSelector  : '#page_nav', 
				nextSelector : '#page_nav a',
				itemSelector : '.item',
				loading: {
					img: 'http://i.imgur.com/qkKy8.gif'
				}
			}, 
			function( newElements ) {
				$container.isotope( 'appended', $( newElements ) );
				api.destroy();
				pane = $('.scroll-pane');
				pane.jScrollPane({ animateScroll: true });
				api = pane.data('jsp');
			});
		}
	}); 
	
	$('.back').live('click', function(){
		api.scrollByX(-w);
		var stpos = $('.jspPane').position();
		if( stpos.left == 0 ){
			$('#news-menu').css({ left: '964px', 'z-index': '30' });
			$('.next').removeClass('back'); 
			$('.scroll-right').hide();
		}
		/*$('.scroll-right').hide();
		defaultPosition(); 
		if($.browser.safari) { bodyelem = $("body"); }
		else bodyelem = $("html,body");
		bodyelem.animate({ scrollLeft: '0' }, { queue: false, duration: 800 });*/
	});
	
	$('#horizontal-cont').bind('scroll', function(){
		var stpos = $('.jspPane').position();
		if( stpos.left < -700 ){
			$('.next').addClass('back'); 
			$('.scroll-right').show();
			$('#news-menu').css({ left: '100px', 'z-index': '70' });
		}
		if( stpos.left == 0 ){
			$('#news-menu').css({ left: '964px', 'z-index': '30' });
			$('.next').removeClass('back'); 
			$('.scroll-right').hide();
		}
		var isotopew = $('#isotope').width();
		isotopew = -1 * (isotopew - 730);
		
		if( stpos.left > isotopew ){
			// Infinite scroll
			$container.infinitescroll({
				navSelector  : '#page_nav', 
				nextSelector : '#page_nav a',
				itemSelector : '.item',
				loading: {
					img: 'http://i.imgur.com/qkKy8.gif'
				}
			}, 
			function( newElements ) {
				$container.isotope( 'appended', $( newElements ) );
				api.destroy();
				pane = $('.scroll-pane');
				pane.jScrollPane({ animateScroll: true });
				api = pane.data('jsp');
			});
		}
		/*var pos = $('#horizontal-cont').scrollLeft(); var posY = $(document).scrollTop();
		var dw = $(document).width(); var ww = $(window).width();
		var w = $('#isotope').width(); w = dw - w - 300;
		if( posY < 700 ){
			//$('body').width('auto').css({ 'overflow-x':'auto'});
			if( pos >= 710 ) scrollPosition();
			if( pos < 710 ) defaultPosition();
		} else {
			if($.browser.safari) { bodyelem = $("body"); }
			else bodyelem = $("html,body");
			if( pos >= 710 ) bodyelem.animate({ scrollLeft: '0' }, 800);
			//$('body').width(ww).css({ 'overflow-x':'hidden'});
		}
		if( pos > w ){ 
			$container.infinitescroll({
				navSelector  : '#page_nav', 
				nextSelector : '#page_nav a',
				itemSelector : '.item',
				loading: {
					img: 'http://i.imgur.com/qkKy8.gif'
				}
				},
				// call Isotope as a callback
				function( newElements ) {
					$container.isotope( 'appended', $( newElements ) ); 
				});
		}*/
	});
	
	// Social grid
	$('#social-tl').prepend('<div id="social-overlay">');
	$('#socialist4').socialist({
		networks: [
			{name:'facebook',id:'ZigniaLiveOficial'},
			//{name:'twitter',id:'zignialive'},
			{name:'youtube',id:'ZigniaLiveOficial'}
		 ],
		maxResults: 4,
		fields:['source','heading','text','date','image','followers','likes']
	});
	
	var res = 4;
	
	$('#all').click(function(){ $('#social-menu a').removeClass('on'); $(this).addClass('on'); $('#socialist' + res).isotope({ filter: '' }); });
	$('#s-tw').click(function(){ $('#social-menu a').removeClass('on'); $(this).addClass('on'); $('#socialist' + res).isotope({ filter: '.socialist-twitter' }); });
	$('#s-fb').click(function(){ $('#social-menu a').removeClass('on'); $(this).addClass('on'); $('#socialist' + res).isotope({ filter: '.socialist-facebook' }); });
	$('#s-yt').click(function(){ $('#social-menu a').removeClass('on'); $(this).addClass('on'); $('#socialist' + res).isotope({ filter: '.socialist-youtube' }); });
	
	$('#more-social').live('click', function(){
		if($.browser.safari) { bodyelem = $("body"); }
		else bodyelem = $("html,body");
		bodyelem.animate({ scrollTop: '550' }, 800);
		$('#socialist' + res).parent().prepend('<div id="socialist' + (res+2) + '">');
		$('#socialist' + res).remove();
		res+=2;
		$('#socialist' + res).socialist({
			networks: [
				{name:'facebook',id:'ZigniaLiveOficial'},
				//{name:'twitter',id:'zignialive'},
				{name:'youtube',id:'ZigniaLiveOficial'}
			 ],
			maxResults: res,
			fields:['source','heading','text','date','image','followers','likes']
		});
		$('#social-menu a').removeClass('on'); $('#all').addClass('on');
	});
	
	// Historia
	var slides = $('#history .slide').length;
	$('#next').hide();
	$('a.month:last').addClass('on');
	$('#history').iosSlider({
		autoSlide: false,
		autoSlideTimer: 10000,
		snapToChildren: true,
		navSlideSelector: $('a.month'),
		navPrevSelector: $('#prev'),
		navNextSelector: $('#next'),
		startAtSlide: slides,
		onSlideChange: function(args){
			var index = args.currentSlideNumber;
			$('.month.on').removeClass('on'); $('a.month:eq(' + index + ')').addClass('on');
			if(index == 0) { $('#prev').hide() } else { $('#prev').show(); }
			var l = $('#history .slide').length;
			if(index == (l-1)) { $('#next').hide() } else { $('#next').show(); }
		}
	});
	$('.month').click(function(){ $('.month.on').removeClass('on'); $(this).addClass('on'); });
	
	var slidestl = $('#accordion .slide').length;
	$('#next-tl').hide();
	$('#accordion .iosSlider').iosSlider({
		autoSlide: false,
		autoSlideTimer: 10000,
		snapToChildren: true,
		navPrevSelector: $('#prev-tl'),
		navNextSelector: $('#next-tl'),
		startAtSlide: slidestl,
		onSlideChange: function(args){
			var index = args.currentSlideNumber;
			if(index == 0) { $('#prev-tl').hide() } else { $('#prev-tl').show(); }
			var l = $('#history .slide').length;
			if(index == (l-1)) { $('#next-tl').hide() } else { $('#next-tl').show(); }
		}
	});
	
	
	// Accordion años
	$('.acc-head').click(function(){
		$('.acc-head').removeClass('selected');
		$('.acc-cont').removeClass('selected');
		$(this).addClass('selected');
		$(this).next().addClass('selected');
	});
	
	// Calendarios
	$.datepicker.setDefaults( $.datepicker.regional[ "es" ] );
	$("#datepicker" ).datepicker({ inline: false, showOn: "both", buttonImage: "assets/img/icons/cal.png", buttonImageOnly: true });
	$("#datepicker2" ).datepicker({ inline: false, showOn: "both", buttonImage: "assets/img/icons/cal.png", buttonImageOnly: true });
	
});

function defaultPosition(){  
	$('.scroll-right').hide(); 
	/*$('#news').animate({ left: '700' }, { queue: false, duration: 800 });
	$('#overlay').animate({ left: '950' }, { queue: false, duration: 800, complete: function(){ 
		$('.next').removeClass('back'); 
		$('#news-menu').css({ position: 'absolute', left: '260px' }); 
		$('html, body, *').unbind('mousewheel'); 
	} });*/
	$('#news-menu').animate({ position: 'absolute', left: '260' }, { queue: false, duration: 800 });
}
function scrollPosition(){
	/*$('#horizontal').animate({ left: '-800px' }, { queue: false, duration: 800, complete: function(){ 
		$('.next').addClass('back'); 
		$('.scroll-right').show(); */
		$('#news-menu').css({ position: 'fixed', left: '90px' }); 
		/*$('html, body, *').mousewheel(function(e, delta) {
			this.scrollLeft += (delta);
			e.preventDefault();
		});
	} });*/
	//$('#overlay').animate({ left: '580' }, { queue: false, duration: 800 });
}