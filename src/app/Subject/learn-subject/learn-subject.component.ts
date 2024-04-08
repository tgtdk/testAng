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
    alert('on constructor called');
    // this.heroService.userName.subscribe((res) =>{
    //   this.userName = res;
    // })
  }
  ngOnInit(): void {
    alert('on init called')
    alert(this.initialValue)
    this.inputValue = this.initialValue;
    // this.inputValue = this.elRef.nativeElement.querySelector('input').value;

    
  }

  ngAfterViewInit(): void {
    alert('on After learn subject view Init called')
    // window.print();
  }
}
