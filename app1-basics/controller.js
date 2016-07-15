angular.module("app").controller("ctrl",function($scope,service){
	$scope.list = service.arrList;
});
