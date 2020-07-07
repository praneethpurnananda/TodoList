import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = [];
  deletedTask = [];
  completedTask = [];
  public heading = "my tasks";
  constructor() { }

  //addNewTask
  addNewTask(title , description){
    var newTodo = {
      title: title,
      description: description,
      isEdit: false
    };

    if(localStorage.getItem('todo') !== null){
      this.todo = JSON.parse(localStorage.getItem('todo'));
      this.todo.push(newTodo);
      localStorage.setItem('todo' , JSON.stringify(this.todo));
    }else{
      this.todo.push(newTodo);
      localStorage.setItem('todo' , JSON.stringify(this.todo));
    }
  }

  //delete a task
  deletedTodo(task){
    let tmp = {title: task.title , description: task.description , isEdit:false};

    if(localStorage.getItem('deletedTask') != null){
      this.deletedTask = JSON.parse(localStorage.getItem('deletedTask'));
      this.deletedTask.push(tmp);
      localStorage.setItem('deletedTask' , JSON.stringify(this.deletedTask));
    }else{
      this.deletedTask.push(tmp);
      localStorage.setItem('deletedTask' , JSON.stringify(this.deletedTask));
    }

    this.todo = this.todo.filter(x => x.title !== task.title);
    localStorage.removeItem('todo');
    localStorage.setItem('todo' , JSON.stringify(this.todo));
  }

  //completed task
  completedTodo(task){
    let tmp = {title: task.title , description: task.description , isEdit:false};

    if(localStorage.getItem('completedTask') != null){
      this.completedTask = JSON.parse(localStorage.getItem('completedTask'));
      this.completedTask.push(tmp);
      localStorage.setItem('completedTask' , JSON.stringify(this.completedTask));
    }else{
      this.completedTask.push(tmp);
      localStorage.setItem('completedTask' , JSON.stringify(this.completedTask));
    }

    this.todo = this.todo.filter(x => x.title !== task.title);
    localStorage.removeItem('todo');
    localStorage.setItem('todo' , JSON.stringify(this.todo));
  }

  //edit tasks
  edit(title,description,task){
    this.todo.find(x => x.title == task.title).title = title;
    this.todo.find(x => x.title == task.title).description = description;
    this.todo.find(x => x.title == task.title).isEdit = true;
    console.log(this.todo);
    localStorage.removeItem('todo');
    localStorage.setItem('todo' , JSON.stringify(this.todo));

  }

  ngOnInit(): void {
    if(localStorage.getItem('todo') !== null){
      this.todo = JSON.parse(localStorage.getItem('todo'));
    }
  }

}
