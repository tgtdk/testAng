import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-component-rand-d',
  templateUrl: './print-component-rand-d.component.html',
  styleUrl: './print-component-rand-d.component.scss'
})
export class PrintComponentRandDComponent implements OnInit {

  styleSheewtString: any;

  constructor(private http: HttpClient){

  }


  ngOnInit(): void {
    document.getElementById("print_external")?.addEventListener("click", () => {
      const hideFrame = document.createElement("iframe");
      hideFrame.onload = this.printPage;
      hideFrame.style.display = "none"; // hide iframe
      hideFrame.src = "external-page.html";
      document.body.appendChild(hideFrame);
    });

    this.http.get('../../assets/style.scss', {responseType: 'text'}).subscribe(
    // this.http.get('print-component-rand-d.component.scss', {responseType: 'text'}).subscribe(
      styleSheet => {
        this.styleSheewtString = styleSheet;
        alert("styleSheet");  
        alert(styleSheet);  
        alert(this.styleSheewtString);  

        console.log("this.styleSheewtString");
        console.log(this.styleSheewtString);
      }
    )

  }
  
  printPage = () => {
    
    var innerContents = document.getElementById('printContent')?.innerHTML;
    var innerContentsCss = this.styleSheewtString;
    console.log("innerContentsCss");
    console.log(innerContentsCss);
    console.log(this.styleSheewtString);
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow?.document.open();
    popupWinindow?.document.write(`<html><head>
    <style>` +
    innerContentsCss +
    `</style>
    
    </head><body onload="window.print()">` + innerContents + '</html>');
    popupWinindow?.document.close();
    // this.finalPrint();

    console.log(`<html><head>
    <style>` +
    innerContentsCss +
    `</style>
    
    </head><body onload="window.print()">` + innerContents + '</html>')
  }

  finalPrint() {
    
  }
}
