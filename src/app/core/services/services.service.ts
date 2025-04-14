import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cat } from '../models/cats.model'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiUrl = `${environment.apiUrl}`;
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.apiUrl);
  }
}
