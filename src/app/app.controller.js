export default class AppController {
	constructor(AuthService, $location) {
		this.init(AuthService, $location);
	}

	init(AuthService, $location) {
		if(AuthService.getToken() && $location.path() === '/') {
			AuthService.redir('/ranks');
		} else if(!AuthService.getToken() && $location.path() !== '/') {
			AuthService.redir();
		}
	}
}

AppController.$inject = ['AuthService', '$location'];