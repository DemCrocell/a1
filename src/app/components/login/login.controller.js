export default class LoginController {
	constructor(AuthService) {
		this.login = '';
		this.password = '';
		this.authService = AuthService;
	}

	submit() {
		if (!this.login || !this.password) return false;
		this.authService.login({login: this.login, password: this.password})
	};
	
}

LoginController.$inject = ['AuthService'];

