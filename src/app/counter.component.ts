import { Component, OnInit,Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs: ['counterChange'],
  template: `
    <p>    
     <button (click)="decrease()">-</button>
     {{counterValue}}
     <button (click)="increase()">+</button>
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class Counter implements OnInit {
  counter:number;
  counterChange:EventEmitter<number>;
  counterValue:number;
  constructor() {
    this.counterChange = new EventEmitter();
    this.counterValue=0;
   }
   increase(){
      console.log("counter");
this.counterValue++;

this.counterChange.emit(this.counterValue);
   }
   decrease(){
this.counterValue--;
this.counterChange.emit(this.counterValue);
   }
   @Input() 
   set setCounter(value:number ){
    console.log("counter"+value);
this.counter = value;
this.counterValue = this.counter ||0;

   }

  ngOnInit() {
  }

}