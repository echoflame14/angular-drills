angular.module("apiApp").controller("ctrl",function($scope,srvc){
	$scope.xxx = $scope.pokeToFind;
	$scope.contactApi = function(x){
		srvc.getData(x).then(function(r){
				console.log(r);
				$scope.pokeName = r.data.name;
				console.log($scope.pokeName);
				$scope.pokePic = r.data.sprites.front_shiny;
				console.log($scope.pokePic);
				document.getElementById("pokePic").src = $scope.pokePic;
				document.getElementById("pokeName").innerHTML = $scope.pokeName;
		});
	};
});
