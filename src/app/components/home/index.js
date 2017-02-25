import MODULE_NAME from '../../module.name';
import HomeDirective from './home.directive';
import './home.css';

angular
	.module(MODULE_NAME)
	.directive('home', HomeDirective);