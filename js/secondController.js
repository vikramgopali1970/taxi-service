var app = angular.module('myApp', [
    'ui.router',
    'xeditable'
]);

app.controller('homePageController',['$scope',function($scope){
	$scope.cabTypes = ['1','2','3','4'];
	$scope.rateCard = [
		{
			'CabType' : 'Mini',
			'RateCard' : '5$/mile',
			'Capacity' : '4'
		},
		{
			'CabType' : 'SUV',
			'RateCard' : '7$/mile',
			'Capacity' : '6'
		},
		{
			'CabType' : 'Prime',
			'RateCard' : '10$/mile',
			'Capacity' : '9'
		},
		{
			'CabType' : 'Ultra Prime',
			'RateCard' : '12$/mile',
			'Capacity' : '11'
		}
	];

	console.log($scope.rateCard[0]);
	
}]);