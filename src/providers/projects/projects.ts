import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

const PROJECTS_URL: string = `./assets/project/`;

@Injectable()
export class ProjectsProvider {

  constructor(private http: HttpClient) {
    console.log('Hello ProjectsProvider Provider');
  }

  getPortfolioInfo(): Observable<any> {
    let result: Observable<Object> = this.http.get(`${PROJECTS_URL}/info.json`);
    console.log('View Result Response: ' + JSON.stringify(result));
    return result.pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return Observable.throw(error);
        }
      )
    );
  }

  getImageURL(){
    return `${PROJECTS_URL}/img/`;
  }
}
