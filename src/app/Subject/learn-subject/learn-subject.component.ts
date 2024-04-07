import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-learn-subject',
  templateUrl: './learn-subject.component.html',
  styleUrl: './learn-subject.component.scss'
})
export class LearnSubjectComponent implements OnInit, AfterViewInit {
  userName:string  = "Dhruvil";
  @Input() initialValue: string ='';
  inputValue: string = '';
  constructor(private heroService: HeroService, private elRef: ElementRef){
    this.heroService.userName.subscribe((res) =>{
      this.userName = res;
    })
  }
  ngOnInit(): void {
    // alert('on init called')
    this.inputValue = this.initialValue;
    // this.inputValue = this.elRef.nativeElement.querySelector('input').value;

    
  }

  ngAfterViewInit(): void {
    alert('on After view Init called')
    // window.print();
  }
}
