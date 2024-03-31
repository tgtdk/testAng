import { Component } from '@angular/core';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // exclusive: boolean = true;
  // true when come on flex box page 
  exclusive: boolean = false;

  // inject service
  constructor(private heroService: HeroService){
    // this.ser.exclusive.subscribe(res =>{
    //   this.exclusive = res;
    // })
    this.heroService.exclusive.subscribe((res)=>{
      console.log("header component constrctor called Subscribe here 👍👍👍👍👍👍👍👍");
      console.log("res");
      console.log(res);
      this.exclusive = res;
    })
  }


}
