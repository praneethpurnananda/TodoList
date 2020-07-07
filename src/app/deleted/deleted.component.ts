import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css'  , '../todo/todo.component.css']
})
export class DeletedComponent implements OnInit {
  deletedTask = [];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('deletedTask') !== null){
      this.deletedTask = JSON.parse(localStorage.getItem('deletedTask'));
    }
  }

}
