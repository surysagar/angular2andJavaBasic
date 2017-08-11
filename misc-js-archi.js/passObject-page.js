Project.flows.Step = function (settings) {
		if (settings.flow) {
			this.type = 'flow';
			this.flow = settings.flow;
		}
		else if (settings.page) {
			this.type = 'page';
			this.page = settings.page;
		}
		else if (settings.logic) {
		}
		else 
			this.type = 'unknown';
		}
		if (settings.data) {
			this.data = settings.data;
		}

		this.shouldExecute = settings.shouldExecute || function () {
			return Project.core.helpers.resolve(true);
		};
		this.preProcess = settings.preProcess || function () {
			return Project.core.helpers.resolve();
		};
		this.postProcess = settings.postProcess || function () {
			return Project.core.helpers.resolve();
		};
	};

//Use of above Flow so each page object is being created dynamically by passing parameters

new Project.flows.Step({
	page: 'signUp',   
	preProcess: function () {
		Project.session.url = Project.frame.buildUrl('signUp');
		Project.core.helpers.resolve();
	},
	postProcess: function () {
		Project.callback.parameters.mpstatus = 'success';
		return Project.core.helpers.resolve();
	}
})