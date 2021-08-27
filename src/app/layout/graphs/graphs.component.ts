import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  fruit:any = JSON.parse(localStorage.getItem('fruit') || '{}');

  constructor(private shareDataService:ShareDataService,private router: Router) { }

  ngOnInit(): void {
  }

  goBack():any{
    this.router.navigate([''])
  }

}
