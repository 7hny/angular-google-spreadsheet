'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
 	factory('Gdocs', function($resource, $http) {

    // var Api = $resource('https://api.mongolab.com/api/1/databases' +
    //     '/angularjs/collections/projects/:id',
    //     { apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
    //       update: { method: 'PUT' }
    //     }
    // );

    var factory = {};

    factory.getSpreadsheet = function(callback) {
    	var url = 'https://spreadsheets.google.com/feeds/cells/o13394135408524254648.240766968415752635/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK';
    	$http.jsonp(url).success(function(data){
        callback(parseTableData(data));
    	});
    }

    function parseTableData(data) {
    	var input = data.feed.entry;
    	var output = {
    		thead: [],
    		tbody: []
    	}

    	var currentRow = 1;

    	for (var i = 0; i < input.length; i++) {
    		var row = parseInt(input[i]['gs$cell'].row);
    		var col = parseInt(input[i]['gs$cell'].col);
    		var content = input[i]['gs$cell']['$t'];

    		if(row != currentRow){
    			currentRow = row;
    		}

    		if(row == 1){
    			output.thead.push(content);
    		}else {
    			if(col == 1){
	    	    output.tbody.push([]);
	    		}
	    		output.tbody[row-2].push(content);
    		}
    	};

    	return output;
    }

    return factory;
  });
