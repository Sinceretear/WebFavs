var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'WebsitesController',
    templateUrl: 'views/websites.html'
  })
  .when('/websites', {
    controller: 'WebsitesController',
    templateUrl: 'views/websites.html'
  })

  .when('/websites/add', {
    controller: 'WebsitesController',
    templateUrl: 'views/add_website.html'
  })

  .when('/websites/details/:id', {
    controller: 'WebsitesController',
    templateUrl: 'views/website_details.html'
  })


  .when('/websites/edit/:id', {
    controller: 'WebsitesController',
    templateUrl: 'views/edit_website.html'
  })

  .otherwise({
    redirectTo: '/'
  })

});
