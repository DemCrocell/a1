
const config =  require('./config.dev.json');

const RouteConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
	angular.forEach(config.routes, conf => {
		$stateProvider.state(conf.state, conf.config);
	});

	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(config.html5Mode);
};

export default RouteConfig