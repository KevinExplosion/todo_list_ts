module ToDoList {

  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;
  }

  export interface IPerson {
    name: string;
    email: string;
  }

  export class Task implements ITask {
    done: boolean = false;
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
    markDone(){
      this.done = true;
    }
  }
  export class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){
      super(description, priority);
    }
  }
  //First, we have added this line: class HomeTask extends Task {} By using the keyword extends, we are saying that the class HomeTask is inheriting from the base class Task.

  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo?: IPerson) {
      super(description, priority, assignedTo);
    }
  }

  export class HobbyTask extends Task {
    constructor(public description: string) {
      super(description, "low");
    }
  }
}
