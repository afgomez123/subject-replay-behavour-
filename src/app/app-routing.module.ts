import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person1Component } from './components/sibling1/person1.component';
import { Person2Component } from './components/sibling2/person2.component';
import { ParentComponent } from './components/parent/parent.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'person1', component: Person1Component },
  { path: 'person2', component: Person2Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class RoutingModule {}
