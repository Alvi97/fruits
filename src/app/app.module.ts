import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FruitCardComponent } from './layout/home/fruit-card/fruit-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipeModule } from 'safe-pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './layout/home/home.component';
import { GraphsComponent } from './layout/graphs/graphs.component';
import { PieChartComponent } from './layout/graphs/pie-chart/pie-chart.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { RadialBarComponent } from './layout/graphs/radial-bar/radial-bar.component';
import { DonutComponent } from './layout/graphs/donut/donut.component';
import {MatIconModule} from '@angular/material/icon';
import { IntroDialogComponent } from './dialog/intro-dialog/intro-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { SpinnerComponent } from './shared/spinner/spinner.component';


@NgModule({
  declarations: [ 
    AppComponent,
    FruitCardComponent,
    HomeComponent,
    GraphsComponent,
    PieChartComponent,
    RadialBarComponent,
    DonutComponent,
    IntroDialogComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,  
    HttpClientModule,
    SafePipeModule,
    MatButtonModule,
    MatTableModule,
    NgxChartsModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
