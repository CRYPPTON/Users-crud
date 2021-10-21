import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderInterceptorInterceptor } from './core/interceptors/loader-interceptor.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustromPaginatorIntlService } from './core/services';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { HttpErrorInterceptor } from './core/interceptors';
import { HttpSuccessInterceptor } from './core/interceptors/http-success.interceptor';
import { CommonModule } from '@angular/common';


export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http);

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpSuccessInterceptor, multi: true },
    {
      provide: MatPaginatorIntl,
      useClass: CustromPaginatorIntlService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

