import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PositionsComponent } from './components/positions/positions.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionCheckboxesComponent } from './components/selection-checkboxes/selection-checkboxes.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ColumnSelectionComponent } from './components/column-selection/column-selection.component';
import { GraphComponent } from './components/graph/graph.component';

const appRoutes: Routes = [
  {path: '', component: PositionsComponent},
  {path: 'graph', component: GraphComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PositionsComponent,
    SelectionCheckboxesComponent,
    ColumnSelectionComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    NgxChartsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
