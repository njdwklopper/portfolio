import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class KlopperService {
    static PROJECTS_URL = `./assets/projects/`;
    static SKILLS_URL = `./assets/skills/`;
    static GITHUB_URL = `./assets/github/`;

    constructor(private http: HttpClient) {
        console.log('Hello ProjectsProvider Provider');
    }

    getPortfolioInfo(): Observable<any> {
        const result: Observable<Object> = this.http.get(`${KlopperService.PROJECTS_URL}info.json`);
        console.log('View Result Response: ' + JSON.stringify(result));
        return result.pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    return Observable.throw(error);
                }
            )
        );
    }

    getSkills(): Observable<any> {
        const result: Observable<Object> = this.http.get(`${KlopperService.SKILLS_URL}skills.json`);
        console.log('View Result Response: ' + JSON.stringify(result));
        return result.pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    return Observable.throw(error);
                }
            )
        );
    }

    getGithub(): Observable<any> {
        const result: Observable<Object> = this.http.get(`${KlopperService.GITHUB_URL}info.json`);
        console.log('View Result Response: ' + JSON.stringify(result));
        return result.pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    return Observable.throw(error);
                }
            )
        );
    }
}
