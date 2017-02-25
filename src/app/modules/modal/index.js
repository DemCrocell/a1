import ModalController from './modal.controller'
import ModalService from './modal.service'

angular
	.module('app.modal', [ 'ui.bootstrap.modal', 'ui.bootstrap.tpls' ])
	.controller('ModalController', ModalController)
	.service('ModalService', ModalService);