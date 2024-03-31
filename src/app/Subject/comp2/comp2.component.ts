import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component {
  longText: string = ""
  value: string = ""

  onChanged(InputVal: any){
    console.log("InputVal 😎😎😎😎😎");
    console.log(InputVal);
    console.log(InputVal.value);
    

  }
}
