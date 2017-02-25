import './app';
import MODULE_NAME from './app/module.name';

//Style
import './style/bootstrap.min.css';
import './style/bootstrap-theme.min.css';
import './style/app.css';

angular.element(document).ready(() => {
	angular.bootstrap(document.body, [MODULE_NAME]);
});

