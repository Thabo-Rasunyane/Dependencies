import { Component } from '@angular/core';
import { LearnerService } from 'src/app/Services/learner.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  // THIS OVERRIDES THE INSTANCE FROM THE PARENT COMPONENT providers: [LearnerService],
})
export class StatusComponent {
  constructor(private learner: LearnerService){

  }
  learnerList = this.learner.ShowAllLearners();
}
