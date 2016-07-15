angular.module("app").service("service", function(){
	this.data = [1,2,3,1,234,1,2,3,3,3,3,3,1,1,2,2];

	this.filter = function(arr, term){
		console.log("in service.filter, sorting this " + arr + "by " + term);
		this.newData = [];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] === term){
				this.newData.push(arr[i]);
			}
		}
		console.log(this.newData);
		return this.newData;
	};
});
