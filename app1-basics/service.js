angular.module("app").service("service", function($http){
	this.pokeSearch = function(x){
		console.log("service here contacting the api");
		$http.get("http://pokeapi.co/api/v2/pokemon/" + x)
			.then(function(response){
				console.log("got a response");
				console.log(response.data);
				return response.data.name;
			});
	};
});
