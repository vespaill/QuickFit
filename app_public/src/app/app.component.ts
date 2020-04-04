/* ----------------------------------------------------------------------------
This component file does three main things:
    • Imports what it needs from Angular.
    • Decorates the component, giving it the information that the app needs to
      run it.
    • Exports the component as a class.
---------------------------------------------------------------------------- */

// Import the Component from the Angular core.
import { Component } from '@angular/core';

// Decorate the component.
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

// Export the component as a class.
export class AppComponent {

    /* Note that no var, const, or let is associated with title because inside a
       class definition, you define class members as opposed to variables. */
    title = 'QuickFit-public';

}
