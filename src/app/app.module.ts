import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './components/parent/parent.component';
import { Person1Component } from './components/sibling1/person1.component';
import { Person2Component } from './components/sibling2/person2.component';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    Person1Component,
    Person2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
