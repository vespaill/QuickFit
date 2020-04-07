import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExerciseDataService }      from '../exercise-data.service';
import { Exercise }                 from '../exercise-list/exercise-list.component';
import { switchMap }                from 'rxjs/operators';

@Component({
    selector: 'app-exercise-info',
    templateUrl: './exercise-info.component.html',
    styleUrls: ['./exercise-info.component.css']
})
export class ExerciseInfoComponent implements OnInit {

    // Creates a private local instance of the data service.
    constructor(
        private exerciseDataService: ExerciseDataService,
        private route: ActivatedRoute
    ) { }

    // Clear the default page content
    public pageContent = {
        header: {
            title: ""
        },
        exercise: {
            equip: [],
            group: "",
            desc: ""
        }
    }

    ngOnInit(): void {

        // Get the paramMap Observable of the activated route
        this.route.paramMap
            /* Use the pipe operator to compose a sequence of operations that
               will act on the Observable. */
            .pipe(
                /* Use switchMap to extract the required elements from the
                   ParamMap and return an Observable. */
                switchMap((params: ParamMap) => {
                    /* Use the .get method to get the value of the exerciseId
                       URL parameter from the ParamMap */
                    let id = params.get('exerciseid');
                    /* Make the call to your new data service method, returning
                       it as an Observable */
                    return this.exerciseDataService.getExerciseById(id);
                })
            )
            // Subscribe to the API call Observable, expecting an Exercise back
            .subscribe((newExercise: Exercise) => {
                this.pageContent.header.title   = newExercise.name;
                this.pageContent.exercise.equip = newExercise.equip;
                this.pageContent.exercise.group = newExercise.group;
                this.pageContent.exercise.desc  = newExercise.desc;
            });

    }

}
