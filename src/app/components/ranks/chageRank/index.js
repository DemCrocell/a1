import changeRankDirective from './changeRank.directive';
import fileModelDirective from './fileModel.directive';

angular
	.module('app.ranks')
	.directive('changeRank', changeRankDirective)
	.directive('fileModel', fileModelDirective);