var dhtSensorLib = require("node-dht-sensor");

var wizard = {
        sensor: {
                name: "RaspiSensor",
                type: 11,
                pin: 4
                },
        doSomeMagic: function() {
                var magicValues = dhtSensorLib.read(
                        this.sensor.type,
                        this.sensor.pin
                        );
        	console.log(
                	`[${this.sensor.name}] ` +
                	`temperature: ${magicValues.temperature}°C, ` +
                	`humidity: ${magicValues.humidity}%`
                	);
        	setTimeout(function() {
                	wizard.doSomeMagic();
                	}, 1000);
        	}
	};

wizard.doSomeMagic();
