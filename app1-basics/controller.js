angular.module("app").controller("ctrl",function($scope,service){
	$scope.alertTheText = function(someText){
		alert(someText);
	};

});
