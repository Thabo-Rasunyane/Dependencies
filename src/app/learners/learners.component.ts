import { Component } from '@angular/core';
import { LearnerService } from '../Services/learner.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css'],
  providers: [LearnerService],
})
export class LearnersComponent {
  constructor(private add: LearnerService){

  }

  name: string = '';
  gender: string = '';
  language: string = '';
  grades: string = '';

  //add new create new learner by calling the AddLearner() in services
  addLearner(){
    this.add.AddLeaner(this.name, this.gender, this.language, this.grades);
  }
}
