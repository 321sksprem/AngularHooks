import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetmessageComponent } from './setmessage/setmessage.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { ShowmessageComponent } from './components/showmessage/showmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    SetmessageComponent,
    HomeComponent,
    PagesComponent,
    ComponentsComponent,
    ShowmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
