import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderServiceService } from '../services/loader/loader-service.service';

@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    return next.handle(request)
    .pipe(
      finalize(() => {
        //setTimeout(() => { this.loaderService.hide(); }, 800)
        this.loaderService.hide();
      })
    );
  }
}
