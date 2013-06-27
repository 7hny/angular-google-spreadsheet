'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('FrontCtrl', ['$scope', 'Gdocs', function($scope, Gdocs) {
  	Gdocs.getSpreadsheet(function(data) {
  		console.log(data);
  		$scope.tableData = data;
  	})

  }])
  .controller('AddCtrl', [function() {

  }]);