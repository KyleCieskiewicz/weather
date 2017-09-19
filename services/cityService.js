weatherApp.service('cityService', cityService);

cityService.$inject = ['$resource'];

function cityService($resource) {

	this.city = 'Dallas, Texas';
	this.days = '2';

	this.weatherResult = function(city, days) {

		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
			callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});

			return weatherAPI.get({APPID: '1de17c588271d44fcbdf0b93a48a6165', q: city, cnt: days});
	}

	this.convertToDegreeSystem = function(degK, system) {
		if(system === 'Fahrenheit') {
			return Math.round((1.8 *(degK - 273) + 32));
		} else {
			return Math.round((1.8 *(degK - 273) + 32));
		}
	}

	this.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}

	this.weatherDescription = function(description) {
		return description;
	}


}

