import ChangeRankController from './changeRank.controller';

const changeRankDirective = () => {
	return {
		restrict: 'EA',
		template: require('./changeRank.view.html'),
		controller: ChangeRankController,
		controllerAs: 'VmChangeRank'
	}
};

export default changeRankDirective