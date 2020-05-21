import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  getTopHeadLines()
  {                                              
   return this.http.get<RespuestaTopHeadlines>('/v2/top-headlines?country=mx&apiKey=705b6909f86e4f358a7f795b6b737022');
  //proxy
  //return this.http.get<RespuestaTopHeadlines>('/v2/top-headlines?country=mx&apiKey=705b6909f86e4f358a7f795b6b737022');

  }
}
