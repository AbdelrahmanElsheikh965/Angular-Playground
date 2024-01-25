import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {

  data : Array<String> = ['es', 'res', 'ser'];

  // inline interface
  skillsArr: { ratio: number, name: string }[] = [
    { "ratio": 75, "name": "HTML" },
    { "ratio": 75, "name": "CSS" },
    { "ratio": 75, "name": "Js" }
  ];

}


/**
 * 
 * Needs CommonModule to be imported in class component file (here)
 <ul>
  <li *ngFor="let element of data; let i = index"> // track is a must
    {{ i }} -> {{ element }}
  </li>
</ul> 

<ul>

  @for (d of data; track $index)
  {
    <li>  {{d}}  </li>
  }@empty 
  {
    NONe
  }

</ul>

 */