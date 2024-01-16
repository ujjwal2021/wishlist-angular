import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  getWishes() {
    return this.http
      .get('assets/wishes.json')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        `There is an issue with the client or network:`,
        error.error
      );
    } else {
      console.log('Server side error', error);
    }
    return throwError(
      () => new Error('Cannot retrieve wishes from server please try again')
    );
  }
}
