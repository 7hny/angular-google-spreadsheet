'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'Gdocs', function($scope, Gdocs) {
  	Gdocs.getSpreadsheet(function(data) {
  		$scope.tableData = data;
  	})
  }])
  .controller('MyCtrl2', [function() {

  }]);