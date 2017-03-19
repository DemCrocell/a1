export default class HeaderController {
	constructor(AuthService) {
		this.authService = AuthService;
	}
}

HeaderController.$inject = ['AuthService'];

