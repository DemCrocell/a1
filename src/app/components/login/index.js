import MODULE_NAME from '../../module.name';
import LoginDirective from './login.directive';

angular
	.module(MODULE_NAME)
	.directive('loginForm', LoginDirective);