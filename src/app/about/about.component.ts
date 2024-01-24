import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
