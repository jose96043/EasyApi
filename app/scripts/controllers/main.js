'use strict';

/**
 * @ngdoc function
 * @name apiApp.controller:ConnectCtrl
 * @description
 * # ConnectCtrl
 * Controller of the apiApp
 */
angular.module('apiApp')
  .controller('ConnectCtrl', function ($scope, $http) {

    $scope.server = {url:''};

    $scope.connect = function(){
    	var server = this.server;
    	server.url = (server.url === '') ? 'localhost:27017' : server.url;
    	this.server = server;
    	var responsePromise = $http.get(server.url);

                responsePromise.success(function(data, status, headers, config) {
                    console.log('data', data);
                    console.log('status', status);
                });
                responsePromise.error(function(data, status, headers, config) {
                    console.log("AJAX failed!", data, status);
                });
    }
  });
