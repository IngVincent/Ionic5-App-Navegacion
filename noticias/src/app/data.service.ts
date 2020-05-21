import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
getAll(): Observable<any>{
  return this.http.get<any>('/v2/top-headlines?country=mx&apiKey=705b6909f86e4f358a7f795b6b737022');
}
}
