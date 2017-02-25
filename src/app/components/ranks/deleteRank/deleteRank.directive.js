import deleteRankController from './deleteRank.controller';

const deleteRankDirective = () => {
	return {
		restrict: 'EA',
		template: require('./deleteRank.view.html'),
		controller: deleteRankController,
		controllerAs: 'VmDeleteRank'
	}
};

export default deleteRankDirective