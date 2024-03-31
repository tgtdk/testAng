import { Component, OnDestroy } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-flex-box',
  templateUrl: './flex-box.component.html',
  styleUrl: './flex-box.component.scss'
})
export class FlexBoxComponent implements OnDestroy {
  constructor(private ser: HeroService){
    // work as observer who change the value
    console.log("Value chande true constrctor 😎😎😎😎😎😎😎😎😎😎😎😎")
    // instead of set in routing we use subject here 
    ser.exclusive.next(true);
  }
  
  ngOnDestroy() {
    console.log("Ondestroy called 😎😎😎😎😎😎😎😎😎😎😎😎")
    console.log("Value chande false constrctor 😎😎😎😎😎😎😎😎😎😎😎😎")
    this.ser.exclusive.next(false)
  }

}
