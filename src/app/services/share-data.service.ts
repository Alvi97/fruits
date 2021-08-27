import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

currentFruit! : object;

  constructor() { }


  setCurrentFruit(currentfruit:object){
    localStorage.setItem('fruit' , JSON.stringify(currentfruit))
  }

  getCurrentFruit(){
    return localStorage.getItem('fruit')
  }
}
