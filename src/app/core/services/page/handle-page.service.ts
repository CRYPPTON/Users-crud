import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreApiService } from '../http/core-api.service';

@Injectable({
  providedIn: 'root'
})
export class HandlePageService extends CoreApiService {

  constructor(protected http: HttpClient) {
    super(http);
   }

   public getNextPage(){
     return;
   }
}
