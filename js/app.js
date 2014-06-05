$('document').ready(function(){

    if (localStorage.getItem("hueIP") === null) {
        localStorage["hueIP"] 		= 0;
        localStorage["flashvalue"] 	= 0;
    } 
    else
    {
       
    }		

    console.log("Auto: "+localStorage["hueIPauto"]);

    console.log(localStorage["hueIP"]);

    $("#settingsForm").submit(function() {

    	var hueIPvalue			=	$("#hueIP").val();
    	localStorage["hueIP"] 	=	hueIPvalue;	
	  	
	  	console.log("IP opgeslagen: "+localStorage["hueIP"]);


	});

	$("#flashvalue").change(function() {

		var flashvalue				=	$("#flashvalue").val();
    	localStorage["flashvalue"] 	=	flashvalue;	
	  	
	  	console.log("Flashvalue opgeslagen: "+localStorage["flashvalue"]);

	  	setLights();

	});

	var autoIP	=	localStorage["hueIPauto"];
	console.log("Auto IP: "+autoIP);
	document.getElementById("showIP").innerHTML = autoIP;

	if(autoIP == "none"){
		standardButtons();
		reloadButton();
		noBridgeFound();
	}
	else
	{
		connectBridge();
		standardButtons();
		lightButtons();
	}

	var hjs = HueJS({
		ipAddress:autoIP,
		devicetype:"test2",
		username: "001788fffe16ba56"
	});
	

		function connectBridge() {
			$('#btn1').click(function(e){
				// btn1 = connect
				e.preventDefault();
				hjs.authenticate( function(f){

				$("div#btn1").removeClass("blue");
				$("div#btn1").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("blue");
				    $(this).removeClass("btnTap").dequeue();
				});	


				$("#popupLinkA").click();

				},
				function(f){
					alert("Error tijdens het inloggen");
					console.log(f);
				});
			});
		}; // einde connectBridge		

		function noBridgeFound() {

			$("#popupLinkB").click();

		}	// einde noBridgeFound
		
		function search() {
			location.reload();
		}

		function resetLights() {
			res = hjs.setValue([1,2,3],{bri:254,on:true});
			res = hjs.setValue([1,2,3],{hue:360, sat:33});
		}

		function lightButtons () {
			$('#btn3').click(function(e){
				// btn3 = resetlights
				e.preventDefault();

				$("div#btn3").removeClass("line");
				$("div#btn3").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("line");
				    $(this).removeClass("btnTap").dequeue();
				});

				stopWatch();

				resetLights();

				console.log("Yo!");

			});

			$('#btn4').click(function(e){
				// btn4 = start dancing
				e.preventDefault();

				$("div#btn4").removeClass("line");
				$("div#btn4").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("line");
				    $(this).removeClass("btnTap").dequeue();
				});	

				startWatch();
			});	

		} // einde lightButtons

		function reloadButton() {
			$('#btn1').click(function(e){
				// btn1 = connect
				e.preventDefault();


				$("div#btn1").removeClass("line");
				$("div#btn1").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("line");
				    $(this).removeClass("btnTap").dequeue();
				});	

				search();

			});
		} // einde reloadButton
		
		function standardButtons() {
			$('#btn7').click(function(e){
				// btn7 = settings
				e.preventDefault();

				$("div#btn7").removeClass("line");
				$("div#btn7").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("line");
				    $(this).removeClass("btnTap").dequeue();
				});			

				$("div#settings").slideToggle( "slow", function() {
			    	// Animation complete.
			  	});	

			});	

			$('#btn8').click(function(e){
				// btn8 = flash
				e.preventDefault();

				$("div#btn8").removeClass("line");
				$("div#btn8").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("line");
				    $(this).removeClass("btnTap").dequeue();
				});		

				$("div#flash").slideToggle( "slow", function() {
			    	// Animation complete.
			  	});			

			});	

			$('#colorPicker').click(function(e){
				// colorpicker = color
				e.preventDefault();

				$("div#colorPicker").removeClass("line");
				$("div#colorPicker").addClass("btnTap").delay(200).queue(function(){
				    $(this).addClass("line");
				    $(this).removeClass("btnTap").dequeue();
				});		

				$("div#color").slideToggle( "slow", function() {
			    	// Animation complete.
			  	});					

			});		

			$('#title').click(function(e){
				e.preventDefault();

				$("div#flash").hide("slow");
				$("div#color").hide("slow");
				$("div#settings").hide("slow");

			});	

			$('#search').click(function(e){
				e.preventDefault();

				$("div#search").removeClass("buttonfull");
				$("div#search").addClass("buttonfullTap").delay(200).queue(function(){
				    $(this).addClass("buttonfull");
				    $(this).removeClass("buttonfullTap").dequeue();
				});

				console.log("Search!");

				search();

			});						

		} // einde standardButtons
		


		$('.bluedark').click(function() {
			setColor("blue");
		});

		$('.greendark').click(function() {
			setColor("green");
		});	

		$('.pink').click(function() {
			setColor("pink");
		});		

		$('.orange').click(function() {
			setColor("orange");
		});		

		$('.yellow').click(function() {
			setColor("yellow");
		});	

		$('.red').click(function() {
			setColor("red");
		});	
	
		function setColor(color) {
			console.log("Color Called!");

			if(color == "blue"){
				res = hjs.setValue([1,2,3],{hue:46920, sat:200, bri:200});	// Blue
				console.log("Set: Blue!");
			}
			else if(color == "green")
			{
				res = hjs.setValue([1,2,3],{hue:25500, sat:200, bri:200});	// Green
				console.log("Set: Green!");
			}
			else if(color == "pink")
			{
				res = hjs.setValue([1,2,3],{hue:50000, sat:200, bri:200}); 	// Pink
			}
			else if(color == "orange")
			{
				res = hjs.setValue([1,2,3],{hue:2400, sat:100, bri:100});	// Light Orange
			}
			else if(color == "yellow")
			{
				res = hjs.setValue([1,2,3],{hue:20000, sat:200, bri:200}); 	// Light Yellow
			}
			else if(color == "red")
			{
				res = hjs.setValue([1,2,3],{hue:65535, sat:200, bri:200});	// Red
			}
			else
			{
				// doe niks
			}
			

		}




		function setLights(accelerationX, accelerationY, accelerationZ) {

			console.log("Running setLights with Flashvalue: "+localStorage["flashvalue"]);

			var flashSet = localStorage["flashvalue"];

			if(flashSet == 0){
				console.log("Flash auto");
				res = hjs.setValue([1,2,3],{on:false});
			}
			else {

				var interval;

				var interval = Math.round(7000/flashSet);
				console.log(interval);


				var i;
				function go () {
				   
					res = hjs.setValue([1,2,3],{on:true});

				    i++;
				    setTimeout(go,interval);
				}
				go();

				var iOff;
				function goOff () {
				   
					res = hjs.setValue([1,2,3],{on:false});

				    iOff++;
				    setTimeout(goOff,interval);
				}
				goOff();				
			}					

		}


		console.log("Accelero On!");
	 	// The watch id references the current `watchAcceleration`
	    var watchID = null;

	    // Wait for Cordova to load
	    //
	    document.addEventListener("deviceready", onDeviceReady, false);

	    // Cordova is ready
	    //
	    function onDeviceReady() {
	        //startWatch();
	    }

	    // Start watching the acceleration
	    //
	    function startWatch() {

	        // Update acceleration every 3 seconds
	        var options = { frequency: 1900 };

	        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
	    }

	    // Stop watching the acceleration
	    //
	    function stopWatch() {
	        if (watchID) {
	            navigator.accelerometer.clearWatch(watchID);
	            watchID = null;
	        }
	    }

		function onSuccess(acceleration) {

	   	console.log(acceleration.x, acceleration.y, acceleration.z); 

	   			res = hjs.setValue([1,2,3],{on:true});

				// res = hjs.setValue([1,2,3],{hue:50000, sat:200, bri:200}); 	// Pink

				// res = hjs.setValue([1,2,3],{hue:20000, sat:200, bri:200}); 	// Light Yellow

				// res = hjs.setValue([1,2,3],{hue:25500, sat:200, bri:200});	// Green

				// res = hjs.setValue([1,2,3],{hue:46920, sat:200, bri:200});	// Blue

				// res = hjs.setValue([1,2,3],{hue:10300, sat:200, bri:200});	// Brownish

				// res = hjs.setValue([1,2,3],{hue:2400, sat:100, bri:100});	// Light Orange

				// res = hjs.setValue([1,2,3],{hue:65535, sat:200, bri:200});	// Red

				if(acceleration.x > 0){

					res = hjs.setValue([1,2,3],{hue:50000, sat:200, bri:200}); 	// Pink

				}
				else if(acceleration.x > 2)
				{
					res = hjs.setValue([1,2,3],{hue:20000, sat:200, bri:200}); 	// Light Yellow
				}
				else if(acceleration.x < -2)
				{
					res = hjs.setValue([1,2,3],{hue:25500, sat:200, bri:200});	// Green
				}
				else
				{
					res = hjs.setValue([1,2,3],{hue:46920, sat:200, bri:200});	// Blue
				}

				if(acceleration.y > 0){

					res = hjs.setValue([1,2,3],{hue:2400, sat:100, bri:100});	// Light Orange

				}
				else
				{

				}	


				if(acceleration.y > 0){

					res = hjs.setValue([1,2,3],{hue:65535, sat:200, bri:200});	// Red

				}
				else
				{
					
				}

				if(acceleration.z > 0){

					res = hjs.setValue([1,2,3],{hue:10300, sat:200, bri:200});	// Brownish

				}
				else
				{
					res = hjs.setValue([1,2,3],{bri:254,on:true});
					res = hjs.setValue([1,2,3],{hue:360, sat:33});
				}				

				
	    }    

	    // onError: Failed to get the acceleration
	    //
	    function onError() {
	        alert('onError!');
	    }		


	$('div#colorchoice').click(function(e){
		e.preventDefault();

		$(this).addClass("colorTap").delay(200).queue(function(){
		    $(this).removeClass("colorTap").dequeue();
		});	   

	});

	$('#color1').change(function() {

		var hsl = $.farbtastic('#color-picker').hsl;
		var hue 		= Math.floor(hsl[0]*65535);
		var saturation 	= Math.floor(hsl[1]*255);
		var brightness 	= Math.floor(hsl[2]*255);
		console.log('hue: '+hue+' saturation: '+saturation+' brightness: '+brightness); 
		res = hjs.setValue([1,2,3],{hue:hue, sat:saturation, bri:brightness});  

	});

});
