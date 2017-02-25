import RankController from './rank.controller';

const RankDirective = () => {
	return {
		restrict: 'EA',
		template: require('./rank.view.html'),
		controller: RankController,
		controllerAs: 'VmRank',
		scope: {addRank: '='}
	}
};

export default RankDirective