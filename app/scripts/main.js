
var app = angular.module('ciudadesApp', ['ngRoute']);

//Configuramos en routeProvider para separar las vistas
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'lista-ciudades.html',
		controller:'mainController'

	}).when('/agregarCiudad', {
		templateUrl: 'agregarCiudad.html',
		controller: 'addController'
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
app.controller('mainController', ['$scope', 'cityFactory', '$http', function($scope, cityFactory, $http){

	// $http.get('ciudades.json').success(function(data){
	// 	$scope.cities = data;
	// });

	angular.extend($scope, {
        center: {
            lat: 3.9,
            lng: -73.5,
            zoom: 5
        },
        defaults: {
            //--THESE ARE DIFERENT MAP STYLES
            //tileLayer: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            //tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            //tileLayer: '//api.mapbox.com/styles/v1/alvarojose827/citng3g0g003s2it88y9lg769/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx2YXJvam9zZTgyNyIsImEiOiJjaXUwaGZqZnMwMWgzMnpwZzVrdmlpcnBxIn0.ElMgKpRdQu3aeOquy3qwPg',
            //tileLayer: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx2YXJvam9zZTgyNyIsImEiOiJjaXUwaGZqZnMwMWgzMnpwZzVrdmlpcnBxIn0.ElMgKpRdQu3aeOquy3qwPg',
            //tileLayer: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWx2YXJvam9zZTgyNyIsImEiOiJjaXUwaGZqZnMwMWgzMnpwZzVrdmlpcnBxIn0.ElMgKpRdQu3aeOquy3qwPg',
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true,
                attribution: 'Mapbox'
            },
    		minZoom: 2,
    		doubleClickZoom: true
        }
    });

}]);


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
