import { Component, OnInit } from '@angular/core';
import {Observable, of, from } from 'rxjs';
import {tap, map} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  myArray: any = [10, 20, 30];
private myArrayOf$: Observable<any>;
private myArrayFrom$: Observable<any>;
private myArrayTap$: Observable<any>;

  constructor() { }

  ngOnInit() {
   /* 
   this.myArrayOf$ = of(this.myArray);
   // transformar el array en un observable con el Operador of. El operador from convertira en Observable a Array de Objetos, Promesas.
  this.myArrayOf$.subscribe(data => console.log('DataOf', data));*/
    this.myArrayFrom$ = from(this.myArray);
    this.myArrayFrom$.subscribe(data=> console.log('DataForm', data)) 
    //itera cada valor y da como rdo un string del observable
//.pipe(tap()) recorrer sobre el iterable
this.myArrayFrom$
.pipe(tap(data => console.log('DataTap', data)))
.subscribe(data=> console.log('DataTap2', data));
//.pipe(map()) recorrer y mod el iterable
    this.myArrayFrom$
    .pipe(map(data => data*2)).subscribe(data => console.log ('DataMap2', data))
    ;
  }

}