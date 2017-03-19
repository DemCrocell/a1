import MODULE_NAME from './module.name';
import RouteConfig from './route.config';
import AppController from './app.controller';
import 'angular-mocks';

/**
 * Modules
 */
import './modules/modal/';


angular
	.module(MODULE_NAME, [
		'ui.router',
		'app.modal',
		'app.ranks',
		'ngMockE2E'
	])
	.config(RouteConfig)
	.controller('AppController', AppController);

/**
 * Components
 */

require('./components/header/');
require('./components/home/');
require('./components/auth/');
require('./components/login/');
require('./components/ranks/');