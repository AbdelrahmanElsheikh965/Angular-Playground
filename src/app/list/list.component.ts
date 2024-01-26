import { Component, Input } from '@angular/core';
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

}
