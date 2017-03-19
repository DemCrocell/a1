import HeaderController from './header.controller';

const HeaderDirective = () => {
	return {
		restrict: 'EA',
		template: require('./header.view.html'),
		controller: HeaderController,
		controllerAs: 'VmHeader'
	}
};

export default HeaderDirective;