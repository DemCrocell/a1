class LoginController {
	constructor(AuthService, $location) {
		this.login = '';
		this.password = '';
		this.authService = AuthService;
		this.$inject = ['AuthService', '$location'];
	}

	submit() {
		if (!this.login || !this.password) return false;
		this.authService.login({login: this.login, password: this.password})
	};
	
}

export default LoginController;

