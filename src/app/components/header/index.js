import MODULE_NAME from '../../module.name';
import HeaderDirective from './header.directive';
import './header.css';

angular
	.module(MODULE_NAME)
	.directive('myHeader', HeaderDirective);