$(document).ready(function(){

	$('#social').click(
		function(){
			$('.footer-social').slideToggle();
			$('#social').toggleClass('on');
		}
	);
	
	$(window).bind('scroll', function(){
		Move();
	});
	
	function Move(){

		pos = $(window).scrollTop();

		if( pos < 249 ) {
			$('header').stop(true).animate({ height: 77 }, {
			duration: 400,
			queue: false,
			specialEasing: {
				height: 'easeInOutQuad'
			}});
			
			$('header').find('img').stop().animate({ height: 77, width: 77 }, {
			duration: 400,
			queue: false,
			specialEasing: {
				height: 'easeInOutQuad',
				width: 'easeInOutQuad'
			}
			});
			
			$('header').find('span').animate({ height: 77, width: 77 }, {
			duration: 400,
			queue: false,
			specialEasing: {
				height: 'easeInOutQuad',
				width: 'easeInOutQuad'
			}
			});
	
			$('nav a').stop(true).animate({ 'line-height': '77px' }, {
				duration: 1000,
				queue: false,
				specialEasing: {
					'line-height': 'easeInOutQuad'
				},
				complete: function(){
					$('header span').fadeOut(400);
				}
			});
		}	

		if( pos >= 250  ) {
			$('header').stop(true).animate({ height: 37 }, {
			duration: 400,
			queue: false,
			specialEasing: {
				height: 'easeInOutQuad'
			}});
		
			$('header').find('img').stop(true).animate({ height: 37, width: 37 }, {
			duration: 400,
			queue: false,
			specialEasing: {
				height: 'easeInOutQuad',
				width: 'easeInOutQuad'
			}
			});
		
			$('header').find('span').animate({ height: 37, width: 37 }, {
			duration: 400,
			queue: false,
			specialEasing: {
				height: 'easeInOutQuad',
				width: 'easeInOutQuad'
			}
			});
	
			$('nav a').stop(true).animate({ 'line-height': '37px' }, {
				duration: 1000,
				queue: false,
			complete: function(){
				$('header span').fadeIn(400);
			}
			});
		}
		//if( pos > 500 ) { $('header span').fadeIn(400); }
	}

});