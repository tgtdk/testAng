import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component implements OnInit {
  longText: string = ""
  value: string = ""

  onChanged(InputVal: any){
    console.log("InputVal 😎😎😎😎😎");
    console.log(InputVal);
    console.log(InputVal.value);
    

  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.value = "Dharmesh"
    }, 1000)
  }
}
