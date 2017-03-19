export default class RanksService {
	constructor($http, $location, $httpBackend, AuthService){
		this.$http = $http;
		this.$location = $location;
		this.$httpBackend = $httpBackend;
		this.authService = AuthService;
		this.activeRank = {};
		this.getRanksList();
	}

	getRanksList() {
		const res = require('../../_mocs/ranks_list.json');
		this.$httpBackend.whenGET(`/progress_ranks?access_token=${this.authService.accessToken}`).respond(200, res);

		//////////////////////////

		this.$http.get(`/progress_ranks?access_token=${this.authService.accessToken}`).then(
			response => {
				this.ranksList = response.data;
				this.setRank( this.getRankId() );
			},
			error => {}
		);
	};

	getRankId() {
		const path = this.$location.path().split('/');

		return (path.includes('ranks') && path[2] != 'ranks') ? path[2] : false;
	}

	setRank(id){
		if(!id) return this.activeRank = {};

		angular.forEach(this.ranksList.items, (val) => {
			if(val.id == id) this.activeRank = val;
		});
	}
	
	files(data) {
		if(this.authService.validUntil) return;

		///////////

		const res = require('../../_mocs/files.json');
		this.$httpBackend.whenPOST(`/file?access_token=${this.authService.accessToken}`).respond(200, res);

		/////////////

		this.$http.post(`/file?access_token=${this.authService.accessToken}`, data)
			.then(response => {
				this.authService.setFileUrl(response.data.url);
				this.authService.setValidUntil(response.data.validUntil);

				this.authService.fileUrl = this.authService.getFileUrl();
				this.authService.validUntil = this.authService.getValidUntil();
			},
			error => {})
	}

	uploadFile(uploadUrl, data) {
		const res = require('../../_mocs/upload.json');
		this.$httpBackend.whenPOST(uploadUrl).respond(200, res);

		/////////////////////

		let fd = new FormData();
		for(const key in data) {
			fd.append(key, data[key]);
		}
		
		return this.$http.post(uploadUrl, fd, {
			transformRequest: angular.indentity,
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}

	create(data) {
		const res = require('../../_mocs/put_rank.json');
		this.$httpBackend.whenPOST(`/progress_ranks?access_token=${this.authService.accessToken}`).respond(200, res);
		
		/////////////////////////////////
		
		return this.$http.post(`/progress_ranks?access_token=${this.authService.accessToken}`, data).then(
			response => {
				this.ranksList.items.push(response.data);
			},
			error => {}
		)
	}

	edit(data) {
		const resPut = require('../../_mocs/put_rank.json');
		this.$httpBackend.whenPUT(`/progress_ranks?access_token=${this.authService.accessToken}`).respond(200, resPut);

		return this.$http.put(`/progress_ranks?access_token=${this.authService.accessToken}`, data).then(
			response => {
				this.activeRank = response.data;
				angular.forEach(this.ranksList.items, (val) => {
					if(val.id === this.activeRank.id) {
						val = response.data;
					}
				});
			},
			error => {}
		)
	}
	
	delete(id) {
		const res = [];
		this.$httpBackend.whenDELETE(`/progress_ranks/${id}?access_token=${this.authService.accessToken}`).respond(200, res);

		////////////////

		return this.$http.delete(`/progress_ranks/${id}?access_token=${this.authService.accessToken}`)
			.then(() => {
				angular.forEach(this.ranksList.items, (val,i) => {
					if(val.id === id) {
						this.activeRank = {};
						this.ranksList.items.splice(i,1);
						this.$location.path('/ranks');
					}
				});
			},
			error => {}
		);
	}
}

RanksService.$inject = ['$http', '$location', '$httpBackend', 'AuthService'];