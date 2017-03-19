export default class RanksController {
	constructor($uibModal, RanksService) {
		this.ranksService = RanksService;
		this.$uibModal = $uibModal;

		this.ranksService.setRank();
	}

	open(){
		this.$uibModal.open({
			templateUrl: 'addRank.html',
			controller: 'ModalController',
			controllerAs: 'VmModal'
		});
	}

	rank(id) {
		return `ranks/${id}`
	}
}

RanksController.$inject = ['$uibModal', 'RanksService'];

