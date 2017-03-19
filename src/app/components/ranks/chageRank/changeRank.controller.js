export default class ChangeRankController {
	constructor(AuthService, RanksService, $scope) {
		this.ranksService = RanksService;
		this.authService = AuthService;
		this.$scope = $scope;
		this.model = this.getModel();
	}

	getModel() {
		this.isActiveRank = {}.hasOwnProperty.call(this.ranksService.activeRank, 'id');
		return this.isActiveRank ? angular.copy(this.ranksService.activeRank) : {};
	}

	save() {
		if(!this.authService.fileUrl || this.$scope.rankForm.$invalid || (!this.picture && !this.isActiveRank)) return;

		this.ranksService.uploadFile(`${this.authService.fileUrl}?access_token=${this.authService.accessToken}`, this.picture)
			.then(response => {
				angular.extend(this.model, {picture: response.data.id});
				return this.isActiveRank ? this.ranksService.edit(this.model) : this.ranksService.create(this.model);
			})
			.catch(error => {})
	}
}

ChangeRankController.$inject = ['AuthService', 'RanksService', '$scope'];

