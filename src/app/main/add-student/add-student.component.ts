import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  imports: [CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  isStudent:boolean=true;
  isParent:boolean=false;
  isReview:boolean=false;
}
