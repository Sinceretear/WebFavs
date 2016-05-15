var underscore = angular.module('underscore', []);
	underscore.factory('_', function() {
		return window._; // assumes underscore has already been loaded on the page
	});


var myApp = angular.module('myApp');

myApp.controller('WebsitesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log('Websitesloaded...');

  $scope.getWebsites = function() {
    $http.get('api/websites').success(function(response) {
      $scope.websites = response;
      console.log(response)
    });
  }

  $scope.addWebsite = function(){
		console.log($scope.website);
		$http.post('/api/websites/', $scope.websites).success(function(response){
			window.location.href='#/websites';
		});
	}

  $scope.getWebsite = function() {
    var id = $routeParams.id;
    $http.get('api/websites/'+ id).success(function(response) {
      $scope.website = response;
    });
  }


  $scope.updateWebsite = function(){
		var id = $routeParams.id;
		$http.put('/api/websites/' + id, $scope.website).success(function(response){
			window.location.href='#/websites';
		});
	}


  $scope.removeWebsite = function(id){
		$http.delete('/api/websites/' + id).success(function(response){
			window.location.href='#/websites';
		});
	}


  $scope.sortedWebsites = function() {
    $http.get('api/websites').success(function(response) {

      var sorted = response;
      console.log(sorted)

      $scope.websiteArray = sorted;
    });
  }


}]);
