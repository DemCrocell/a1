class AppController {
	constructor(AuthService, $location) {

		this.init(AuthService, $location);

		this.$inject = ['AuthService', '$location'];
	}

	init(AuthService, $location) {
		if(AuthService.getToken() && $location.path() === '/') {
			AuthService.redir('/ranks');
		} else if(!AuthService.getToken() && $location.path() !== '/') {
			AuthService.redir();
		}
	}
}

export default AppController;
