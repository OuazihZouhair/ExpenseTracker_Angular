import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  private http = inject(HttpClient);
  private apiUrl = environment.apiURL + '/api/expense';
  
  public get(): Observable<any> {
    return this.http.get(this.apiUrl);
  } 
}
