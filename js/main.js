var hue = jsHue();

hue.discover(
    function(bridges) {
        if(bridges.length === 0) {
            localStorage["hueIPauto"]       = 0;
            localStorage["hueIPauto"]       = "none";
            console.log('No bridges found. :(');
        }
        else {
            bridges.forEach(function(b) {
                console.log('Bridge found at IP address %s.', b.internalipaddress);
                localStorage["hueIPauto"]       = 0;
                localStorage["hueIPauto"]       = b.internalipaddress;
            });
        }
    },
    function(error) {
        console.error(error.message);
    }
);

