import { Component } from '@angular/core';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-learn-subject',
  templateUrl: './learn-subject.component.html',
  styleUrl: './learn-subject.component.scss'
})
export class LearnSubjectComponent {
  userName:string  = "Dhruvil";
  constructor(private heroService: HeroService){
    this.heroService.userName.subscribe((res) =>{
      this.userName = res;
    })
  }
}
