const fileModelDirective = ($parse, RanksService) => {
	return {
		restrict: 'A',
		link: (scope, element, attrs) => {
			let model = $parse(attrs.fileModel);
			let modelSetter = model.assign;

			element.bind('change', () => {
				modelSetter(scope, element[0].files[0]);
				RanksService.files({resource: 'progress_ranks', field: 'picture'});
				scope.$apply();
			})
		}
	}
};

fileModelDirective.$inject = ['$parse', 'RanksService'];

export default fileModelDirective
