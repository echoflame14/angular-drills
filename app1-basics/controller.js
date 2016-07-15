angular.module("app").controller("ctrl",function($scope,service){
	$scope.data = service.data;
	$scope.input = $scope.param;
	$scope.filterBy = function(arr,term){
		$scope.data = service.data;
		console.log("in ctrl running filterBy");
		$scope.list = service.filter(arr,term);
		$scope.data = service.newData;
	};

});
