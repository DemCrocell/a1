import resource from './resource';


angular.module('app.resource', ["ngResource"])
	.config(['$resourceProvider', function($resourceProvider){
		$resourceProvider.defaults.stripTrailingSlashes = false;
	}])
	.run();