function resource($resource) {
	var ranks = $resource(
		"./progress_ranks/:listController:id/:docController"
	)
}

resource.$inject = ['$resource'];

export default AppController;