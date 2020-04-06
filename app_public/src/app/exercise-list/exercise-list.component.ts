import { Component, OnInit } from '@angular/core';
import { ExerciseDataService } from '../exercise-data.service';

enum groupEnum {
    chest = 'Chest',
    upperBack = 'Upper back',
    shoulders = 'Shoulders',
    biceps = 'Biceps',
    triceps = 'Triceps',
    core = 'Core',
    lowerBody = 'Lower body',
}

// Create and export a class called Exercise.
export class Exercise {
    _id:   string;
    name:  string;
    equip: string[];
    group: groupEnum;
}

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

export class ExerciseListComponent implements OnInit {

    public pageContent = {
        header: {
            title: "Exercise Selection"
        },
    }

    // Inject the service into the component using the constructor.
    constructor(private ExerciseDataService: ExerciseDataService) { }

    // Declare a member variable of type array of Exercise.
    exercises: Exercise[];

    // Define a getExercises method that accepts no parameters and returns nothing.
    private getExercises(): void {

        // Call our data service method.
        this.ExerciseDataService
            .getExercises()
            // Update the exercises array with the contents of the response.
            .then( (foundExercises) => {this.exercises = foundExercises} );

    }

    /* ngOnInit is one of several Angular lifecycle hooks.

       While an Angular application is starting and running, things happen in a
       specific order to make sure that the application maintains integrity and
       always does things the same way.

       The lifecycle hooks allow you to listen to the process and take action at
       certain times. */
    ngOnInit(): void {
        this.getExercises();
    }

}
