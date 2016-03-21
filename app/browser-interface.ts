/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-create-tasks.ts" />

$(function() {
  var tasks=[];
  $('#search').submit(function(event){
    event.preventDefault();
    $('.assignee-tasks').remove();
    var assignee: string = $('#assignee').val();
    console.log(assignee);
    var search = ToDoList.FindPerson(assignee, ToDoList.people);
    var tasks = ToDoList.describeTasksForPerson(search, tasks);
    console.log(assignee.tasks);
  });
  $('#add-task').submit(function(event){
    event.preventDefault();
    var description = $('#description').val();
    var priority = $('#priority').val();
    var assignedTo = $('#assignee').val();
    var newTask = ToDoList.Task.constructor(description, priority, assignee);
    console.log(newTask);
  });
});
