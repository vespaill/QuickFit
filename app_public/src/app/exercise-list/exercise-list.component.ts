import { Component, OnInit } from '@angular/core';

// Make your service available to the component by importing it.
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

    exercises: Exercise[];

    // Define a getExercises method that accepts no parameters and returns nothing.
    private getExercises(): void {

        // Call our data service method.
        this.ExerciseDataService
            .getExercises()
                // Update the exercises array with the contents of the response.
                .then(foundExercises => this.exercises = foundExercises);
    }

    ngOnInit(): void {
        this.getExercises();
    }

}
