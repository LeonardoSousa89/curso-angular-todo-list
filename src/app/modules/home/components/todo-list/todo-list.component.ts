import { Component, OnInit, DoCheck } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = []

 ngDoCheck() {
  this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
 }

  public setEmmitItemTaskList(event: string){
    this.taskList.push({ task: event, checked: false })
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Realmente você deseja deletar tudo?")

    if(confirm){
      this.taskList = []
    }
  }

  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?")
      
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
