/* To set up this 'service' to make HTTP requests and return Promises, you need
   to inject the HTTP service into your service */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Need to know what an 'Exercise' is.
import { Exercise } from './exercise-list/exercise-list.component';

@Injectable({
    providedIn: 'root'
})

export class ExerciseDataService {

    /* Inject the HTTPClient service into your service so you can use it and
       call the HTTP service methods */
    // i.e. inject http of type HttpClient, and keep it private.
    constructor(private http: HttpClient) {

    }
    private apiBaseUrl = 'http://localhost:3000/api';

    /*--------------------------------------------------------------------------
        Making and returning the HTTP request to your API
            Accepts no parameters
            Returns a Promise containing an array of exercises.
    --------------------------------------------------------------------------*/
    public getExercises(): Promise<Exercise[]> {
        const url: string = `${this.apiBaseUrl}/exercises`;
        return this.http    // Return the Promise.
            .get(url)       // Make HTTP GET call to the URL we built.
            .toPromise()    // Convert the Observable response to a Promise.
            // Convert the response to a JSON object of type Exercise.
            .then( (response) => {return response as Exercise[]} )
            .catch(this.handleError);
    }

    // Handle and return any errors.
    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }

}
