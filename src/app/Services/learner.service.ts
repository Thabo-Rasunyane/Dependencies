//learner service class
import { Learner } from "../Modules/learner";

export class LearnerService {
    leaners: Learner [] = [
        new Learner( 'Mogomotsi Mogoroane', 'Male', 'C#', 'Failed'),
        new Learner( 'Joao Chauke', 'Male', 'Python', 'Failed'),
        new Learner( 'Kenneth Mashaba', 'Male', 'C#', 'Failed'),
    ];

    //display all learners method
    ShowAllLearners(){
        return this.leaners;
    }

    //add learner
    AddLeaner(name: string, gender: string, language: string, grades: string){
        let newLearner = new Learner(name, gender, language,grades);
        this.leaners.push(newLearner); 
    }
}