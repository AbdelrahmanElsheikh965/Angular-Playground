import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoType } from '../ToDoType';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
    @Output() SendToParent = new EventEmitter<ToDoType>();

    getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    addNewItem(t_value: string, d_value: string) {
      // generate random id within 1 - 100
      var idRandValue = this.getRandomInt(100);
      
      const newItem : ToDoType = {
        id: idRandValue,
        title: t_value,
        data: d_value
      };
      this.SendToParent.emit(newItem);
    }
}
