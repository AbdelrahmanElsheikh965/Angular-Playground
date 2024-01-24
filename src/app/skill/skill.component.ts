import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  template: `
    <span>CSS3</span> <span class="pull-right">75%</span>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <!-- <button (click)="sendDataToParent()">Send Data to Parent</button> -->
  `,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

}
