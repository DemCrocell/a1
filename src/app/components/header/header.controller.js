class HeaderController {
	constructor(AuthService) {
		this.authService = AuthService;
		
		this.$inject = ['AuthService'];
	}
}

export default HeaderController;

