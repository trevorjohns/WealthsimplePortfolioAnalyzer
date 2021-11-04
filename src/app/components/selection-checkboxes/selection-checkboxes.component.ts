import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selection-checkboxes',
  templateUrl: './selection-checkboxes.component.html',
  styleUrls: ['./selection-checkboxes.component.css']
})
export class SelectionCheckboxesComponent implements OnInit {
  selection: FormGroup;
  message = 'Hola Mundo!';

  constructor(private fb: FormBuilder) {
    this.selection = fb.group({
      name: true,
      price: false,
      sector: true,
      quantity: false,
      book_value: true,
      current_value: true,
      netProfit: true,
      percentProfit: false,
    })
   }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.selection.value);
    
  }
}
