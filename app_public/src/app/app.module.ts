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
import { AppComponent } from './app.component';

/* Describe the module by using a decorator.
   A decorator is a way that ES2015 and TypeScript provide metadata and
   annotations to functions, modules and classes.  */
@NgModule({

    declarations: [AppComponent],
    imports:      [BrowserModule],
    providers:    [],
    bootstrap:    [AppComponent]      // Serves as entry point into application.

})
export class AppModule { }          // Export the module.
