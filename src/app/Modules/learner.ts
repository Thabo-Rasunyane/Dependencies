//learner class

export class Learner {

    constructor(name: string, gender: string, language: string, grades: string){
        this.name = name;
        this.gender = gender;
        this.language = language;
        this.grades = grades;
    }

    name: string;
    gender: string;
    language: string;
    grades: string;
}