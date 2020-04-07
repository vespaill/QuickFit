/* ----------------------------------------------------------------------------
In essence, this file does the following things:
    • Imports various pieces of Angular functionality that the app will use.
    • Imports the components that the app will use.
    • Describes the module by using a decorator.
    • Exports the module.
---------------------------------------------------------------------------- */

// Import various Angular modules that the application will use.
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';

// Import our components from the file system.
import { ExerciseListComponent }  from './exercise-list/exercise-list.component';
import { FrameworkComponent }     from './framework/framework.component';
import { IntroComponent }         from './intro/intro.component';
import { ExerciseFormComponent }  from './exercise-form/exercise-form.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CalendarComponent }      from './calendar/calendar.component';
import { PageHeaderComponent }    from './page-header/page-header.component';
import { ExerciseInfoComponent }  from './exercise-info/exercise-info.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';

/* Describe the module by using a decorator.
   A decorator is a way that ES2015 and TypeScript provide metadata and
   annotations to functions, modules and classes.  */
@NgModule({

    declarations: [
        FrameworkComponent,
        PageHeaderComponent,
        IntroComponent,
        QuestionnaireComponent,
        ExerciseListComponent,
        ExerciseFormComponent,
        CalendarComponent,
        ExerciseInfoComponent,
        HtmlLineBreaksPipe
    ],

    imports: [
        BrowserModule,
        HttpClientModule,

        // Add the RouterModule to the imports, calling the forRoot method.
        RouterModule.forRoot([
            {
                path: '',
                component: IntroComponent
            }, {
                // Define the exercises route.
                path: 'exercise-list',
                // Specify the ExerciseListComponent as the one to use for this route.
                component: ExerciseListComponent
            }, {
                path: 'exercise-list/exercise-form',
                component: ExerciseFormComponent
            }, {
                path: 'questionnaire',
                component: QuestionnaireComponent
            }, {
                path: 'calendar',
                component: CalendarComponent
            }, {
                path: 'exercise/:exerciseid',
                component: ExerciseInfoComponent
            }
        ])
    ],

    providers: [

    ],

    // Serves as entry point into the application.
    bootstrap: [FrameworkComponent]

})
export class AppModule { }          // Export the module.
