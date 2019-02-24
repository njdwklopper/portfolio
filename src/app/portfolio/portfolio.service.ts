import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const PROJECTS_URL = `./assets/projects/`;

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    constructor(private http: HttpClient) {
        console.log('Hello ProjectsProvider Provider');
    }

    getPortfolioInfo(): Observable<any> {
        const result: Observable<Object> = this.http.get(`${PROJECTS_URL}info.json`);
        console.log('View Result Response: ' + JSON.stringify(result));
        return result.pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    return Observable.throw(error);
                }
            )
        );
    }

    getImageURL() {
        return `${PROJECTS_URL}/img/`;
    }
}
