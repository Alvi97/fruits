import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IntroDialogComponent } from 'src/app/dialog/intro-dialog/intro-dialog.component';
import { FruitServiceService } from 'src/app/services/fruit-service.service';
import { nutributionList as nutributionslist } from 'src/app/environment/nutributionList';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFruits$:Observable<any> = this.fruitServiceService.getAllFruits();


  selectedCar: any;
  selectedValue!: string;
  nutributions = nutributionslist.nutributions
  filterType!:string;

  
  constructor(private fruitServiceService:FruitServiceService , public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  //   dialogRef = this.dialog.open(IntroDialogComponent, {
  //   height: '400px',
  //   width: '600px',
  // });


  sortBy(){
    this.allFruits$ = this.allFruits$.pipe(map((data) => {

      
      switch(this.filterType){


        case 'Ascending' : 
        data.sort((a:any, b:any) => {
          console.log(a)
            return a.nutritions[this.selectedValue.toLowerCase()] < b.nutritions[this.selectedValue.toLowerCase()] ? -1 : 1;
         });
         break; 

         case 'Descending' : 
         data.sort((a:any, b:any) => {
           console.log(a)
             return a.nutritions[this.selectedValue.toLowerCase()] > b.nutritions[this.selectedValue.toLowerCase()] ? -1 : 1;
          });
          break; 
          default: { 

            break; 
         } 
      }


      return data;
      }))
  }

  selectedRadio(type:any){

    this.filterType = type;

  }

  changed(event:any):any{
    if(event.target.value != ""){

    
    this.allFruits$ = this.allFruits$.pipe(map((data)=>{
      return data.filter((fruit:any) => fruit.name.toLowerCase().includes((event.target.value).toLowerCase()))
    }))
  }

  }
}
