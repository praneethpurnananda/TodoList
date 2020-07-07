import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DeletedComponent } from './deleted/deleted.component';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '' , component: TodoComponent},
  {path: 'deleted' , component: DeletedComponent},
  {path: 'completed' , component: CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
