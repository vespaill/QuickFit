import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-framework',
    templateUrl: './framework.component.html',
    styleUrls: ['./framework.component.css'],
    styles: [`.active {
                    background-color: #ff5d00;
                    color: #000;
                }`
    ]
})
export class FrameworkComponent implements OnInit {

    constructor() { }

    navlinks = ['calendar', 'exercise-list'];

    ngOnInit(): void {
    }

}
