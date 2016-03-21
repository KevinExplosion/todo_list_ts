/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }


  export var FindPerson = function(name : string, peopleList: IPerson{}) {
    var assignee: IPerson;
    for(var person of peopleList) {
      if(person.name === name) {
        assignee = person;
      }
    }
    return assignee;
  };
}
