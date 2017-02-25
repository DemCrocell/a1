import LoginController from './login.controller';

const LoginDirective = () => {
	return {
		restrict: 'EA',
		template: require('./login.view.html'),
		controller: LoginController,
		controllerAs: 'VmLogin'
	}
};

export default LoginDirective