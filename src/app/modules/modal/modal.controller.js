class ModalController {
	constructor($uibModalInstance) {
		this.$uibModalInstance = $uibModalInstance;

		this.$inject = ['$uibModalInstance'];
	}

	cancel() {
		this.$uibModalInstance.dismiss('cancel');
	};

}

export default ModalController;

