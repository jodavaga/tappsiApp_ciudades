var app = angular.module('ciudadesApp', ['ngRoute']);

//Configuramos en routeProvider para separar las vistas
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'lista-ciudades.html',
		controller:'mainController'

	}).when('/agregarCiudad', {
		templateUrl: 'agregarCiudad.html',
		controller: 'addController', 'mainController'
	});
});

//se crea una facoria para relacionar ambos controladores, y agregar ciduades
app.factory('cityFactory', function(){

	return{
		getAll : function(){
			return cities;
		},
		add: function(city){
			cities.push(city);
		}
	}
});

//Controlador para mostrar y filtrar ciduades
app.controller('mainController', function($scope, cityFactory, $http){

	$http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyC11ICicEqLMP9p9oRBXKu_R_hdMxgD9K0').success(function(data){
		$scope.cities = data;
	});

});


//creo otro contralador para manejarlo por separado las interacciones
app.controller('addController', function($scope, cityFactory){
	//agregar ciudades al arrglo
	$scope.addCity = function(){

		var newCityToAdd = {name: $scope.newCity, country: $scope.newCountry};

		cityFacory.add(newCityToAdd);

		$scope.newCity = '';
		$scope.newCountry = '';
	};

	//otro comentario
});
