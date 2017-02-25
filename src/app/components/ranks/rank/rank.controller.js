class RanksController {
	constructor( RanksService, $uibModal, $window) {
		this.ranksService = RanksService;
		this.$uibModal = $uibModal;
		this.$window = $window;
		this.$inject = ['RanksService', '$uibModal', '$window'];
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

export default RanksController;

