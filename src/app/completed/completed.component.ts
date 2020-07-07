import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css' , '../todo/todo.component.css']
})
export class CompletedComponent implements OnInit {
completedTask = [];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('completedTask') !== null){
      this.completedTask = JSON.parse(localStorage.getItem('completedTask'));
    }
  }

}
