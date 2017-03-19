export default class RanksController {
	constructor( RanksService, $uibModal, $window) {
		this.ranksService = RanksService;
		this.$uibModal = $uibModal;
		this.$window = $window;
	}
	
	back() {
		this.$window.history.back()
	}

	open(template, size) {
		this.$uibModal.open({
			templateUrl: template,
			controller: 'ModalController',
			controllerAs: 'VmModal',
			size: size
		});
	};
}

RanksController.$inject = ['RanksService', '$uibModal', '$window'];

