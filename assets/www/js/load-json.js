$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');
	
	var today = new Date();
	
	if (!Date.prototype.toISOString) {
	    Date.prototype.toISOString = function() {
	        function pad(n) { return n < 10 ? '0' + n : n }
	        return this.getFullYear() + '-'
	            + pad(this.getMonth() + 1) + '-'
	            + pad(this.getDate()) + 'T'
	            + pad(this.getHours()) + ':'
	            + pad(this.getMinutes()) + ':'
	            + pad(this.getSeconds()) + 'Z';
	    };
	}
	
	function pad(n) { return n < 10 ? '0' + n : n };
	
	var todayStr = today.getFullYear() + '-' + pad(today.getMonth() + 1) + '-' + pad(today.getDate());
	
	output.append(todayStr);
	
	//var jqxhr = $.getJSON("file:///android_asset/www/js/example.json",
	
	var jqxhr = $.getJSON('http://relcal2.cloudfoundry.com/release/calendar/day/'+todayStr,
		    function(data){
			  output.append('<h1>Release Calendar</h1>');
			  output.append('<p class="sansserif">Today is</p>');
			  output.append('<p class="sansserif">D'+data.iterationDay+'</p>');
			  output.append('<p class="sansserif">I'+data.iterationNumber+'</p>');
			  output.append('<p class="sansserif">R'+data.release+'</p>');
		    })
		    .error(function() { alert("Error connecting to release calendar provider..."); })	
});