import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exercise } from './exercise-list/exercise-list.component';

@Injectable({
    providedIn: 'root'
})
export class ExerciseDataService {

    constructor(private http: HttpClient) { }

    private apiBaseUrl = 'http://localhost:3000/api';

    public getExercises(): Promise<Exercise[]> {

        const url: string = `${this.apiBaseUrl}/exercises`;

        return this.http    // Return the Promise.
            .get(url)       // Make HTTP GET call to the URL we built.
            .toPromise()    // Convert the Observable response to a Promise.

            // Convert the response to a JSON object of type Exercise.
            .then(response => response as Exercise[])
            .catch(this.handleError);
    }

    // Handle and return any errors.
    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }

}
