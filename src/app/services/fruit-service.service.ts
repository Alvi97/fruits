import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {

  constructor(private http: HttpClient) { }


  getAllFruits(){

    const path = `${env.api}${env.services.getAllFruits.url}`;
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin' , '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token')
.set('Access-Control-Allow-Credentials','true');

    console.log(path)
    return this.http.get(path , {headers:headers});

  }
}
