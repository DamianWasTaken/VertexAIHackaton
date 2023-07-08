import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor( private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8000' // todo: use backend url, running on 8000 rn I think
   }

  get(uri: string){

    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  
  post(uri: string, payload: string){

    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}
