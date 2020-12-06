import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OverviewComponent } from './overview/overview.component';
import { BeforeStartComponent } from './before-start/before-start.component';
import { FirstDayComponent } from './first-day/first-day.component';
import { FirstWeekComponent } from './first-week/first-week.component';
import { FirstMonthComponent } from './first-month/first-month.component';
import { FirstThreeMonthsComponent } from './first-three-months/first-three-months.component';
import { RemoteComponent } from './remote/remote.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OverviewComponent,
    BeforeStartComponent,
    FirstDayComponent,
    FirstWeekComponent,
    FirstMonthComponent,
    FirstThreeMonthsComponent,
    RemoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
