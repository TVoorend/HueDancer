$('document').ready(function(){

    if (localStorage.getItem("hueIP") === null) {
        localStorage["hueIP"] 		= 0;
        localStorage["flashvalue"] 	= 0;
        localStorage["usercolor"] 	= 0;
        localStorage["acceleroX"] 	= 0;
        localStorage["acceleroY"] 	= 0;
        localStorage["showwizard"] 	= 0;
    } 
    else
    {
       
    }	

    if(localStorage["showwizard"] == "no") {
    	$("div#startConnect").addClass("close");
    	$("div#startChoose").addClass("close");
    }

    localStorage["usercolor"] 	= 0;
    localStorage["acceleroX"] 	= 0;
    localStorage["acceleroY"] 	= 0;	

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
		pickColor();
	}

	var hjs = HueJS({
		ipAddress:autoIP,
		devicetype:"HueDancer",
		username: "001788fffe16ba56"
	});
	

		function connectBridge() {
			$('#btn1').click(function(e){
				// btn1 = connect
				e.preventDefault();
				hjs.authenticate( function(f){

				$("#popupLinkA").click();

				},
				function(f){
					alert("Error tijdens het inloggen");
					console.log(f);
				});
			});


			$('#firstConnect').click(function(e){
				// btn1 = connect
				e.preventDefault();
				hjs.authenticate( function(f){

				$("#popupLinkA").click();

				$("div#startConnect").addClass("close");
				$("div#startChoose").removeClass("close");

				},
				function(f){
					alert("Error tijdens het inloggen");
					console.log(f);
				});
			});

		}; // einde connectBridge	

		function pickColor() {
			$('.blue').click(function(e){
				localStorage["usercolor"] 	=	"blue";	
				$("div#startChoose").addClass("close");
				$("div#btn10").removeClass();
				$("div#btn10").addClass("blue");
				$("div#btn10").addClass("lineNoBackground");
			});

			$('.red').click(function(e){
				localStorage["usercolor"] 	=	"red";
				$("div#startChoose").addClass("close");	
				$("div#btn10").removeClass();
				$("div#btn10").addClass("red");
				$("div#btn10").addClass("lineNoBackground");				
			});

			$('.green').click(function(e){
				localStorage["usercolor"] 	=	"green";
				$("div#startChoose").addClass("close");	
				$("div#btn10").removeClass();
				$("div#btn10").addClass("green");
				$("div#btn10").addClass("lineNoBackground");				
			});

			$('.yellow').click(function(e){
				localStorage["usercolor"] 	=	"yellow";
				$("div#startChoose").addClass("close");	
				$("div#btn10").removeClass();
				$("div#btn10").addClass("yellow");
				$("div#btn10").addClass("lineNoBackground");				
			});
		};

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

				stopWatch();

				resetLights();

				console.log("Yo!");

			});

			$('#btn4').click(function(e){
				// btn4 = start dancing
				e.preventDefault();

				startWatch();
			});	

		} // einde lightButtons

		function reloadButton() {
			$('#btn1').click(function(e){
				// btn1 = connect
				e.preventDefault();

				search();

			});
		} // einde reloadButton
		
		function standardButtons() {
			$('#btn7').click(function(e){
				// btn7 = settings
				e.preventDefault();	

				$("div#settings").slideToggle( "slow", function() {
			    	// Animation complete.
			  	});	

			});	

			$('#btn8').click(function(e){
				// btn8 = flash
				e.preventDefault();	

				$("div#flash").slideToggle( "slow", function() {
			    	// Animation complete.
			  	});			

			});	

			$('#btn10').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				$("div#startChoose").removeClass("close");

			});		

			$('#btn11').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				$("div#startHelp").removeClass("close");

			});	

			$('#backhelp').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				$("div#startHelp").addClass("close");

			});	

			$('#btn12').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				$("div#startSettings").removeClass("close");

			});	

			$('#backsettings').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				$("div#startSettings").addClass("close");

			});												

			$('#colorPicker').click(function(e){
				// colorpicker = color
				e.preventDefault();

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

				console.log("Search!");

				search();

			});		

			$('#wizardYes').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				localStorage["showwizard"] 	=	"yes";	
				$("div#startSettings").addClass("close");

			});	

			$('#wizardNo').click(function(e){
				// btn10 = user color
				e.preventDefault();	

				localStorage["showwizard"] 	=	"no";	
				$("div#startSettings").addClass("close");

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



	   			// res = hjs.setValue([1,2,3],{on:true});

				// res = hjs.setValue([1,2,3],{hue:50000, sat:200, bri:200}); 	// Pink

				// res = hjs.setValue([1,2,3],{hue:20000, sat:200, bri:200}); 	// Light Yellow

				// res = hjs.setValue([1,2,3],{hue:25500, sat:200, bri:200});	// Green

				// res = hjs.setValue([1,2,3],{hue:46920, sat:200, bri:200});	// Blue

				// res = hjs.setValue([1,2,3],{hue:10300, sat:200, bri:200});	// Brownish

				// res = hjs.setValue([1,2,3],{hue:2400, sat:100, bri:100});	// Light Orange

				// res = hjs.setValue([1,2,3],{hue:65535, sat:200, bri:200});	// Red

			if(localStorage["acceleroX"] == acceleration.x || localStorage["acceleroY"] == acceleration.y) {
				hjs.setValue([1,2,3],{on:true});
			}
			else if(localStorage["acceleroX"] !== acceleration.x || localStorage["acceleroY"] !== acceleration.y) {

				if(localStorage["usercolor"] == "red") {
					acceleroRed();
				}
				else if (localStorage["usercolor"] == "green") {
					acceleroGreen();
				}
				else if (localStorage["usercolor"] == "blue") {
					acceleroBlue();
				}
				else if (localStorage["usercolor"] == "yellow") {
					acceleroYellow();
				}

			}



				function acceleroRed() {
					if(acceleration.x > 0 && acceleration.x <20 ){
						res = hjs.setValue([1,2,3],{hue:64765, sat:244, bri:219, transistiontime:0.1});

					// var hue 		= Math.floor(64765/65535);
					// var saturation 	= Math.floor(244/255);
					// var brightness 	= Math.floor(219/255);

					// console.log("Yo!!!!!");
					// console.log(hue, saturation, brightness);


					// 	$("section#content").css("background-color","hsl(120,100%,50%)");
					}	
					else if(acceleration.x < 0 && acceleration.x > -20 ){
						res = hjs.setValue([1,2,3],{hue:55690, sat:217, bri:201, transistiontime:0.1});
					}	

					if(acceleration.y > 0 && acceleration.y <20 ){
						res = hjs.setValue([1,2,3],{hue:2505, sat:244, bri:85, transistiontime:0.1});
					}	
					else if(acceleration.y < 0 && acceleration.y > -20 ){
						res = hjs.setValue([1,2,3],{hue:65293, sat:174, bri:204, transistiontime:0.1});
					}

					localStorage["acceleroX"] 	=	acceleration.x;
					localStorage["acceleroY"] 	=	acceleration.y;
				}


				function acceleroGreen() {
					if(acceleration.x > 0 && acceleration.x <20 ){
						res = hjs.setValue([1,2,3],{hue:20200, sat:255, bri:204, transistiontime:0.1});
					}	
					else if(acceleration.x < 0 && acceleration.x > -20 ){
						res = hjs.setValue([1,2,3],{hue:24222, sat:246, bri:255, transistiontime:0.1});
					}	

					if(acceleration.y > 0 && acceleration.y <20 ){
						res = hjs.setValue([1,2,3],{hue:25170, sat:233, bri:98, transistiontime:0.1});
					}	
					else if(acceleration.y < 0 && acceleration.y > -20 ){
						res = hjs.setValue([1,2,3],{hue:23583, sat:255, bri:246, transistiontime:0.1});
					}

					localStorage["acceleroX"] 	=	acceleration.x;
					localStorage["acceleroY"] 	=	acceleration.y;
				}	


				function acceleroBlue() {
					if(acceleration.x > 0 && acceleration.x <20 ){
						res = hjs.setValue([1,2,3],{hue:42324, sat:233, bri:134, transistiontime:0.1});
					}	
					else if(acceleration.x < 0 && acceleration.x > -20 ){
						res = hjs.setValue([1,2,3],{hue:45282, sat:255, bri:219, transistiontime:0.1});
					}	

					if(acceleration.y > 0 && acceleration.y <20 ){
						res = hjs.setValue([1,2,3],{hue:34514, sat:253, bri:128, transistiontime:0.1});
					}	
					else if(acceleration.y < 0 && acceleration.y > -20 ){
						res = hjs.setValue([1,2,3],{hue:48196, sat:255, bri:255, transistiontime:0.1});
					}

					localStorage["acceleroX"] 	=	acceleration.x;
					localStorage["acceleroY"] 	=	acceleration.y;
				}


				function acceleroYellow() {
					if(acceleration.x > 0 && acceleration.x <20 ){
						res = hjs.setValue([1,2,3],{hue:10790, sat:255, bri:255, transistiontime:0.1});
					}	
					else if(acceleration.x < 0 && acceleration.x > -20 ){
						res = hjs.setValue([1,2,3],{hue:14303, sat:248, bri:255, transistiontime:0.1});
					}	

					if(acceleration.y > 0 && acceleration.y <20 ){
						res = hjs.setValue([1,2,3],{hue:11613, sat:244, bri:175, transistiontime:0.1});
					}	
					else if(acceleration.y < 0 && acceleration.y > -20 ){
						res = hjs.setValue([1,2,3],{hue:13947, sat:199, bri:168, transistiontime:0.1});
					}

					localStorage["acceleroX"] 	=	acceleration.x;
					localStorage["acceleroY"] 	=	acceleration.y;
				}											



				// else if(acceleration.x > 2)
				// {
				// 	res = hjs.setValue([1,2,3],{hue:20000, sat:200, bri:200}); 	// Light Yellow
				// }
				// else if(acceleration.x < -2)
				// {
				// 	res = hjs.setValue([1,2,3],{hue:25500, sat:200, bri:200});	// Green
				// }
				// else
				// {
				// 	res = hjs.setValue([1,2,3],{hue:46920, sat:200, bri:200});	// Blue
				// }

				// if(acceleration.y > 0){

				// 	res = hjs.setValue([1,2,3],{hue:2400, sat:100, bri:100});	// Light Orange

				// }
				// else
				// {

				// }	


				// if(acceleration.y > 0){

				// 	res = hjs.setValue([1,2,3],{hue:65535, sat:200, bri:200});	// Red

				// }
				// else
				// {
					
				// }

				// if(acceleration.z > 0){

				// 	res = hjs.setValue([1,2,3],{hue:10300, sat:200, bri:200});	// Brownish

				// }
				// else
				// {
				// 	res = hjs.setValue([1,2,3],{bri:254,on:true});
				// 	res = hjs.setValue([1,2,3],{hue:360, sat:33});
				// }				

				
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
		res = hjs.setValue([1,2,3],{hue:hue, sat:saturation, bri:brightness, transistiontime:0.1});  

	});

});
