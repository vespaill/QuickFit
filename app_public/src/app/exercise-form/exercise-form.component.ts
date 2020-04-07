import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exercise-form',
    templateUrl: './exercise-form.component.html',
    styleUrls: ['./exercise-form.component.css']
})

export class ExerciseFormComponent implements OnInit {

    public pageContent = {
        header: {
            title: "Add a new exercise to the database"
        },
        groupOptions: [
            'Chest',
            'Upper back',
            'Shoulders',
            'Biceps',
            'Triceps',
            'Core',
            'Lower body'
        ],
        equipOptions: [{
                abbrv: 'BB',
                name: 'Barbell'
            }, {
                abbrv: 'DB',
                name: 'Dumbbell'
            }, {
                abbrv: 'C',
                name: 'Cable'
            }, {
                abbrv: 'M',
                name: 'Machine'
            }, {
                abbrv: 'BE',
                name: 'Body weight + equipment'
            }, {
                abbrv: 'BW',
                name: 'Body weight only'
        }],
    }

    constructor() { }

    ngOnInit(): void {
    }

}
