import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { ToDoType } from '../ToDoType';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})


export class WrapperComponent {

todosList : ToDoType[] = [];

has(data: ToDoType){
  alert(data.title);
  this.todosList.push(data);
}

getWhatsNeedToBeDeleted(num: number){
  this.todosList = this.todosList.filter((todo: any)=> todo.id != num);
  alert('deleted');
}

}
