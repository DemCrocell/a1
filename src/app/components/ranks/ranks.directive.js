import RanksController from './ranks.controller';

const RanksDirective = () => {
	return {
		restrict: 'EA',
		template: require('./ranks.view.html'),
		controller: RanksController,
		controllerAs: 'VmRanks'
	}
};

export default RanksDirective