import DeleteRankController from './deleteRank.controller';

const deleteRankDirective = () => {
	return {
		restrict: 'EA',
		template: require('./deleteRank.view.html'),
		controller: DeleteRankController,
		controllerAs: 'VmDeleteRank'
	}
};

export default deleteRankDirective