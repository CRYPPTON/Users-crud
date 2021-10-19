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
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessagesFromServerComponent }
from 'src/app/shared/components/error-messages-from-server/error-messages-from-server.component';
import { LaravelErrorObject } from 'src/app/shared/models';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          errorMsg = this.generateErrorMessage(error.error.errors);
          this.snackBar.openFromComponent(ErrorMessagesFromServerComponent, {
            data: errorMsg,
            duration: 5000
          });
          return throwError(errorMsg);
        })
      );
  }

  private generateErrorMessage(errorObj: LaravelErrorObject): string {
    let output = '';
    if(errorObj){
    for (const key in errorObj) {
      output+=key+':';
      for (let i = 0; i < errorObj[key].length; i++) {
        output+='<br>'; // new line
        output+='&nbsp;&nbsp;&nbsp;'+(i+1)+'. '+errorObj[key][i];
      }
      output+='<br>';
    }}

    return output;
  }
}
