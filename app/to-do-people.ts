/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var jane: ToDoList.IPerson = {
    name: "Jane F",
    email: "jane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com"
  }

  export var people = {
  "jane": jane,
  "thor": thor,
  "loki": loki,
  };
}
