import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LaravelErrorObject } from 'src/app/shared/models';
import { SnackBarService } from '../services';
import { SnackDataModel } from 'src/app/shared/models/snack-message/snack-data-model';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBarServices: SnackBarService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          errorMsg = this.generateErrorMessage(error.error.errors);
          const data: SnackDataModel = { message: errorMsg, status: false };
          this.snackBarServices.openSnack(data);
          return throwError(errorMsg);
        })
      );
  }

  private generateErrorMessage(errorObj: LaravelErrorObject): string {
    let output = '';

    for (const key in errorObj) {
      if (key) {
        output += key + ':';
        for (let i = 0; i < errorObj[key].length; i++) {
          output += '<br>'; // new line
          output += '&nbsp;&nbsp;&nbsp;' + (i + 1) + '. ' + errorObj[key][i];
        }
        output += '<br>';
      }
    }

    return output;
  }
}
