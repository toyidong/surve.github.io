import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SheetApiService {
  private apiUrl = '';
  private sheetUrl = '';
  
  constructor(private _httpclient: HttpClient) {
    return this._httpclient.get(this.apiUrl + this.sheetUrl);
   }
}
