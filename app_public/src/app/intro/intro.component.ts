import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

    constructor() { }

    public pageContent = {
        header: {
            htmlMsg: "<div class='jumbotron jumbotron-fluid d-none d-md-block'></div>",
            title: "Welcome to QuickFit"
        },
        msg: "QuickFit is a progressive web application designed to help people meet their fitness goals, whatever they may be. QuickFit has been created from the ground-up with beginners in mind. It aims to remove needless complexities that are often experienced by the beginner when choosing a workout program. Click below to find a workout program tailored to your needs by going through our questionnaire."
    };



    ngOnInit(): void {
    }

}
