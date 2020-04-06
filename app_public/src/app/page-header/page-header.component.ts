import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

    // Define content as a class member that accepts an input of any type.
    @Input() content: any;

    constructor() { }

    ngOnInit(): void {

    }

}
