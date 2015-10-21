describe('High Priority Directive', function(){

	var elm, data;

	beforeEach(module('tasksModule'));
	beforeEach(inject(function(taskService) {
		data = [{
			"id": 1,
			"name": "Today_task1",
			"creation_date": "2015-04-21T06:50:21",
			"due_date": "2015-04-22T23:59:00",
			"start_date": "2015-04-21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0,
			"is_high_priority": true
		}, {
			"id": 11,
			"name": "Today_task11",
			"creation_date": "2015-04-21T06:50:21",
			"due_date": "2015-04-22T23:59:00",
			"start_date": "2015-04-21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0,
			"tags": [
				"meeting"
			]
		}];
	}));

	beforeEach(inject(function($rootScope, $compile) {
		elm = angular.element(
		 '<table class="table table-hover">' + 
		   '<tbody><a>' + 
			   '<tr ng-repeat="task in tasks.tasksData | filter:{obj_status : \'active\'}" high-Priority task="task">' + 
				 '<td> <a href="#/task/{{task.id}}">{{task.name}}</a></td>' + 
			   '</tr></a></tbody>' + 
		 '</table>');

		scope = $rootScope;
		scope.tasks = {
			tasksData: data
		};
		$compile(elm)(scope);
		scope.$digest();
	  }));

	it('should add danger class to high priority elements', function(){
		var titles = elm.find('tr');
		expect(titles[0].className.indexOf('danger') !== -1).toBe(true);
	});

	it('should not add danger class to normal priority elements', function(){
		var titles = elm.find('tr');
		expect(titles[1].className.indexOf('danger') !== -1).toBe(false);
	});


});