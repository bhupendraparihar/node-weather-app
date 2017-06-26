const request = require('request');
const argv = require('yargs').argv;

let apiKey = '716c9d1c46bf1635354cc2329d9703d1';
let city = argv.c || 'portland';

let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + '&appid=' + apiKey;

request(url, function (err, response, body) {
	if(err){
		console.log('error: ', error);
	} else {
		let weather = JSON.parse(body);

		let message = 'It\'s '+ weather.main.temp + ' degrees in ' + weather.name +'!';
		console.log(message);
	}
});