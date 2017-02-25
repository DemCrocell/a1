class ModalService {
	constructor($uibModalInstance) {
		this.$uibModalInstance = $uibModalInstance;

		this.$inject = ['$uibModalInstance'];
	}

	cancel() {
		this.$uibModalInstance.dismiss('cancel');
	};
}

export default ModalService;