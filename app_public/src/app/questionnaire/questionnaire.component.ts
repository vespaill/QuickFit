import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

  question= 'What is your fitness goal?';
  options= ['Gain Muscle', 'Maintain Weight', 'Burn Fat'];

  ngOnInit(): void {
  }

}
