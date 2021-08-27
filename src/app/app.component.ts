import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IntroDialogComponent } from './dialog/intro-dialog/intro-dialog.component';
import { FruitServiceService } from './services/fruit-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fruits';
  allFruits$:Observable<any> = this.fruitServiceService.getAllFruits();

  constructor(private fruitServiceService:FruitServiceService,public dialog: MatDialog){
    
  }


    

}
