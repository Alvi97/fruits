import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from '../../../services/share-data.service';
@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent implements OnInit {


@Input() fruit:any;
displayedColumns: string[] = ['carbohydrates', 'protein', 'fat', 'calories' , 'sugar'];

  constructor(private shareDataService:ShareDataService) { }

  ngOnInit(): void {
  }


  setCurrentFruit(fruit:object){
    this.shareDataService.setCurrentFruit(fruit)
  }

}
