export default class DeleteRankController {
	constructor(RanksService) {
		this.ranksService = RanksService;
	}

	delete() {
		this.ranksService.delete(this.ranksService.activeRank.id)
	};
}

DeleteRankController.$inject = ['RanksService'];

