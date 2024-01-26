import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoType } from '../ToDoType';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() todos: any;

  @Output() deleteRequest = new EventEmitter<number>();

  emitId(todoIdToBeDeleted: any){
    this.deleteRequest.emit(todoIdToBeDeleted);
  }

}
