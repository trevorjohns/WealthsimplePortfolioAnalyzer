import {AfterViewInit, Component, OnInit ,ViewChild, Input} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Position } from 'src/app/position';
import * as data from 'ws-positions.json';
import { SelectionCheckboxesComponent } from '../selection-checkboxes/selection-checkboxes.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonToggle } from '@angular/material/button-toggle';



const wsJSON: any = (data as any).default;

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements AfterViewInit {
  //displayedColumns: string[] = ['name', 'symbol', 'price', 'sector','quantity','book_value', 'current_value', 'netProfit', 'percentProfit'];// = this.getColumns();
  dataSource = new MatTableDataSource(wsJSON);

  @ViewChild(MatSort) sort: MatSort;
  //@ViewChild(SelectionCheckboxesComponent) checkboxs: SelectionCheckboxesComponent;
  @ViewChild('group') toggle: MatButtonToggle;

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
 
  }

}
