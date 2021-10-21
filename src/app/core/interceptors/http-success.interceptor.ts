import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { SnackDataModel } from 'src/app/shared/models/snack-message/snack-data-model';
import { SnackBarService } from '../services';

@Injectable()
export class HttpSuccessInterceptor implements HttpInterceptor {

  constructor(
    private translateService: TranslateService,
    private snackBarServices: SnackBarService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if (request.method !== 'GET') {
            const method = request.method;
            const key = `SUCCESS.${method.toUpperCase()}`;
            const data: SnackDataModel = {
              message: this.translateService.instant(key),
              status: true
            };
            this.snackBarServices.openSnack(data);
          }
        }
      }
      )
    );
  }
}
