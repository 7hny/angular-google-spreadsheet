'use strict';

/* Services */

angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
 	factory('Gdocs', function($resource, $rootScope) {

    var factory = {};

    factory.getSpreadsheet = function(callback) {
      Tabletop.init({
        key: '0Ar0dGuti6jq3dDYydTJSVGw0WWE1YV9qMnF0ZlE5LUE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true
      })
    }

    return factory;
  });
