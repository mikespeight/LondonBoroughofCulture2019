/**
 * Created by Mike on 29/08/2018.
 */

"use strict";


//countdown
function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}


function hoverMenus(){
	var timeOutOpen,
		timeOutOut,
		$menus = $('.navbar > ul li'),
		$openMenus = $('.navbar > ul li.dropdown');

	console.log('menus ', $menus.length);

	function clearMenus(){

		console.log('there are ',$openMenus.length, ' open menus');
		if($openMenus.length > 0) {
			$openMenus.each(function(){
				$(this).removeClass('open');
			});
		}
	}

	function openMenu(delay, $object){
		clearMenus();
		if(timeOutOut !== null){
			clearTimeout(timeOutOut);
		}
		timeOutOpen = setTimeout(function(){
			$object.addClass('open');
		}, delay);
		//$object.delay(delay).removeClass('open');
	};

	function closeMenu(delay, $object){
		if(timeOutOpen !== null){
			clearTimeout(timeOutOpen);
		}
		timeOutOut = setTimeout(function(){
			$object.removeClass('open');
		}, delay);
		//$object.delay(delay).removeClass('open');
	}

	var $thisDropdown = $('.navbar > ul li.dropdown');

	//$thisDropdown.hover(openMenu(250, e),closeMenu(250, e));
	$thisDropdown.hover(
		function(){
			//console.log('over');
			openMenu(300, $(this)); //Jquery ver delay not working
			//$(this).stop(true).delay(500).addClass('open');
		},
		function(){
			//console.log('out');
			closeMenu(300, $(this))
			//$(this).stop(true).delay(500).removeClass('open'); //Jquery ver delay not working
		}
	);
}



$(document).ready(function(){

	var deadline = '2019-01-01', //yyy-mm-dd
		$count = $('#count');

	$count.html(getTimeRemaining(deadline).days + 1);

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			)

			{
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 500, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					});
				}
			}
		});

	// main menu hover delay
	hoverMenus();

	// nav fixed on scroll
	$(document).scroll(function(){
		if($(this).scrollTop() > 120) {
			$(".page-wrapper").addClass('fixed-nav');
		} else {
			$(".page-wrapper").removeClass('fixed-nav');
		}
	});


});