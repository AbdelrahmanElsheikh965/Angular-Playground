import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  image_url: String = "assets/img/work-6.jpg";
  name : String = "E-commerce";

  images : Array<String> = [
    "assets/img/work-1.jpg",
    "assets/img/work-2.jpg",
    "assets/img/work-3.jpg",
    "assets/img/work-4.jpg",
    "assets/img/work-5.jpg",
    "assets/img/work-6.jpg"
  ];
  
}
