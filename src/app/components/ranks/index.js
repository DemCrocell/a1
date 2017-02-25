import RanksService from './ranks.service';
import RanksDirective from './ranks.directive';
import './ranks.css';

angular
	.module('app.ranks', [])
	.directive('ranks', RanksDirective)
	.service('RanksService', RanksService);


require('./rank/');
require('./chageRank/');
require('./deleteRank/');