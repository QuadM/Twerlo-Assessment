import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { throwError, catchError, Observable } from 'rxjs';

export interface WordI {
  id: number;
  word: string;
  pos: string;
}

export interface RankI {
  clientRank: number;
}
export interface ScoreI {
  clientScore: number;
}

@Injectable()
export class WordsService {
  APIURL: string = 'https://quadm-twerlo-assessment.herokuapp.com/api' ;
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getWords(): Observable<WordI[]> {
    return this.http
      .get<WordI[]>(`${this.APIURL}/words`, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(catchError(this.handleError));
  }

  postRank(score: ScoreI): Observable<any> {
    return this.http
      .post<any>(`${this.APIURL}/rank`, score, {
        observe: 'response',
        responseType: 'json',
      })
      .pipe(catchError(this.handleError));
  }
}
