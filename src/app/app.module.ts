import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ChartComponent } from './Components/chart/chart.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { TableComponent } from './Components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    TicketComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
