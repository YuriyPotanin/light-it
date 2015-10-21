describe('taskService:', function() {

    var service;

    beforeEach(module('tasksModule'));
    beforeEach(inject(function(taskService) {
        service = taskService;
    }));
    it('return result', function() {
        var task1 = {
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
            "project_id": 0
        };
        expect(service.getTask(1)).toEqual(task1);

    });
    it('return result is oblect', function() {
        expect(typeof(service.getTask(1))).toBe("object");
    });

    it('to throw error if there is no such task', function() {
        expect(service.getTask.bind(service, "S")).toThrow();
    });

    it('to throw error if there is no such task', function() {
        expect(service.getTask.bind(service, 10000)).toThrow();
    });

    it('to throw error if there is no such task', function() {
        expect(service.getTask.bind(service, undefined)).toThrow();
    });

    it('to throw error if there is no such task', function() {
        expect(service.getTask.bind(service, null)).toThrow();
    });

});