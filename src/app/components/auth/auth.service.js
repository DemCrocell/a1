class AuthService {
	constructor($http, $location, $window, $httpBackend){
		this.$window = $window;
		this.$location = $location;
		this.$httpBackend = $httpBackend;
		this.$http = $http;
		this.accessToken = this.getToken();
		this.fileUrl = this.getFileUrl();
		this.validUntil = this.getValidUntil();
		this.logout = () => {
			this.deleteToken();
			this.redir();
		};
		this.$inject = ['$http', '$location', '$window', '$httpBackend']
	}

	////////////

	getToken() {
		return this.$window.localStorage.getItem('access_token')
	};

	setToken(token) {
		this.$window.localStorage.setItem('access_token', token)
	};

	deleteToken() {
		this.$window.localStorage.removeItem('access_token')
	};

	//////////////////

	getFileUrl() {
		return this.$window.localStorage.getItem('url')
	};

	setFileUrl(url) {
		this.$window.localStorage.setItem('url', url)
	};

	deleteFileUrl() {
		this.$window.localStorage.removeItem('url')
	};

	//////////////////////

	getValidUntil() {
		return this.$window.localStorage.getItem('validUntil')
	};

	setValidUntil(validUntil) {
		this.$window.localStorage.setItem('validUntil', validUntil)
	};

	deleteValidUntil() {
		this.$window.localStorage.removeItem('validUntil')
	};

	/////////////////////

	redir(url) {
		this.$location.path(url ? url : '/');
	};

	login(data) {
		const res = require('../../_mocs/auth.json');
		this.$httpBackend.whenPOST('/auth').respond(200, res);
		
		////////////////////
		
		return this.$http.post('/auth', data).then(
			response => {
				if (response.data.accessToken) {
					this.setToken(response.data.accessToken);
					this.redir('/ranks');
				}
			},
			error => {}
		);
	};
}

export default AuthService;