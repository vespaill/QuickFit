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
    }

  constructor() { }

  ngOnInit(): void {
  }

}
