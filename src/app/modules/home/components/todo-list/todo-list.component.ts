import { Component, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = []

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Realmente você deseja deletar tudo?")

    if(confirm){
      this.taskList = []
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
