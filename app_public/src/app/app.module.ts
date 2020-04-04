/* ----------------------------------------------------------------------------
In essence, this file does the following things:
    • Imports various pieces of Angular functionality that the app will use.
    • Imports the components that the app will use.
    • Describes the module by using a decorator.
    • Exports the module.
---------------------------------------------------------------------------- */

// Import various Angular modules that the application will use.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import a component from the file system.
import { ExerciseListComponent } from './exercise-list/exercise-list.component';

import { HttpClientModule } from '@angular/common/http';

/* Describe the module by using a decorator.
   A decorator is a way that ES2015 and TypeScript provide metadata and
   annotations to functions, modules and classes.  */
@NgModule({

    declarations: [
        ExerciseListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [

    ],
    // Serves as entry point into the application.
    bootstrap: [
        ExerciseListComponent
    ]

})
export class AppModule { }          // Export the module.
