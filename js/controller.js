var app = angular.module('myApp', [
    'ui.router',
    'xeditable'
]);

app.controller('homePageController',['$scope',function($scope){
	$scope.modes = ["METRO","TRAMCAR","TAXI"];
	$scope.pickUps = ["PICK UP POINT 1","PICK UP POINT 2","PICK UP POINT 3"];
	$scope.Ddrops = ["DROP POINT 1","DROP POINT 2","DROP POINT 3"];

	$scope.nXtPge = function(){
		console.log('next page to be loaded',$scope.selectMode,$scope.selectPickUp,$scope.selectDdrop);
	}
}]);