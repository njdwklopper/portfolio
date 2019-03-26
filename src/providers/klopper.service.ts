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
    static REFER_URL = `./assets/references/`;

    constructor(private http: HttpClient) {
        console.log('Hello ProjectsProvider Provider');
    }

    getPortfolioInfo(): Observable<any> {
        return this.getData(`${KlopperService.PROJECTS_URL}info.json`);
    }

    getSkills(): Observable<any> {
        return this.getData(`${KlopperService.SKILLS_URL}skills.json`);
    }

    getGithub(): Observable<any> {
        return this.getData(`${KlopperService.GITHUB_URL}info.json`);
    }

    getReferences(): Observable<any> {
        return this.getData(`${KlopperService.REFER_URL}references.json`);
    }

    getData(get): Observable<any> {
        const result: Observable<Object> = this.http.get(get);
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
