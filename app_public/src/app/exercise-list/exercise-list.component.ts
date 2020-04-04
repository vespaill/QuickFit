import { Component, OnInit } from '@angular/core';

// Make our service available to the component by importing it.
import { ExerciseDataService } from '../exercise-data.service';

// Create and export a class called Exercise.
export class Exercise {
    _id:   string;
    name:  string;
    equip: string[];
    group: string;
}

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

export class ExerciseListComponent implements OnInit {

    // Inject the service into the component using the constructor.
    constructor(private ExerciseDataService: ExerciseDataService) { }

    // The exercises declaration should have no default value.
    exercises: Exercise[];

    // Define a getExercises method that accepts no parameters and returns nothing.
    private getExercises(): void {

        // Call our data service method.
        this.ExerciseDataService
            .getExercises()
                // Update the exercises array with the contents of the response.
                .then(foundExercises => this.exercises = foundExercises);

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
