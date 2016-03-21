var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.FindPerson = function (name, peopleList, _a) {
        var assignee;
        for (var _i = 0, peopleList_1 = peopleList; _i < peopleList_1.length; _i++) {
            var person = peopleList_1[_i];
            if (person.name === name) {
                assignee = person;
            }
        }
        return assignee;
    };
})(ToDoList || (ToDoList = {}));
