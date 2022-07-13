import { Component, OnInit } from '@angular/core';
import {Observable, interval} from 'rxjs';

@Component({
  selector: 'observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }
/* private*/ numbers$: Observable<number>= interval(1000);
  ngOnInit() {
   // const result = this.numbers$;
    //console.log('Result', result);
  //  this.numbers$.subscribe(value => console.log('Result', value)) usar el subscribe o el Pipe Async
  }

}