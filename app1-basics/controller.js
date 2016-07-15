angular.module("app").controller("ctrl",function($scope,service){
	$scope.pokemonPic = "";
	$scope.pokeSearch = function(x){
		console.log("telling service to find " + x);
		$scope.pokemonInfo = service.pokeSearch(x);
	};

});
