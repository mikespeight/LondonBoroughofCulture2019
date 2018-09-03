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


$(document).ready(function(){

	var deadline = '2019-01-01', //yyy-mm-dd
		$count = $('#count');

	$count.html(getTimeRemaining(deadline).days + 1);

});