var app = angular.module('ciudadesApp', ['ngRoute']);

app.controller('mainController', function($scope){

	$scope.cities = [
		{name:'Cali', country:'Colombia'},
		{name:'Bogotá', country:'Colombia'},
		{name:'Medellín', country:'Colombia'},
		{name:'Paris', country:'Francia'},
		{name:'Londres', country:'Reino Unido'}
	];

	//agregar ciudades al arrglo
	$scope.addCity = function(){

		var newCity = {name: $scope.newCity, country: $scope.newCountry};

		$scope.cities.push(newCity);

		$scope.newCity = '';
		$scope.newCountry = '';

	};

	//otro comentario

});
