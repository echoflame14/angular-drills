angular.module("apiApp").service("srvc", function($http){
	this.getData = function(x){
		console.log("pinging the server");
		return $http.get("http://pokeapi.co/api/v2/pokemon/" + x);
	};
});
