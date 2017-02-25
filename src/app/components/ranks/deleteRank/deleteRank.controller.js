class deleteRankController {
	constructor(RanksService) {
		this.ranksService = RanksService;
		this.$inject = ['RanksService'];
	}

	delete() {
		this.ranksService.delete(this.ranksService.activeRank.id)
	};
}

export default deleteRankController;

