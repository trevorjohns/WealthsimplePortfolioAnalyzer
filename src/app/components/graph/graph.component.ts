import { Component, OnInit } from '@angular/core';
import * as data from 'ws-positions.json';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})



export class GraphComponent implements OnInit {
  wsJSON: any = (data as any).default;

  single = this.getFormattedData();

  //single: any[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };


  constructor() {
    //Object.assign(this, { this.single });
    //console.log(this.wsJSON);
    
   }

  ngOnInit(): void {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getFormattedData(): {name:string, value:number}[] {
    let ret: {name:string, value:number}[] = [];

    let map:Map<string, number> = new Map();
    this.wsJSON.forEach(element => {
      if(map.has(element.sector)){
        map.set(element.sector, map.get(element.sector)+element.current_value);
      }
      else{
        map.set(element.sector, element.current_value);
      }
    });
    //turn map into array
    ret = Array.from(map, ([name, value]) => ({ name, value }));
    return ret
  }

}
