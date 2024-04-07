import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-print-component-rand-d',
  templateUrl: './print-component-rand-d.component.html',
  styleUrl: './print-component-rand-d.component.scss'
})
export class PrintComponentRandDComponent implements OnInit {

  styleSheewtString: any;
  domContent: any;

  constructor(private http: HttpClient, private renderer: Renderer2) {

  }


  ngOnInit(): void {
    document.getElementById("print_external")?.addEventListener("click", () => {
      const hideFrame = document.createElement("iframe");
      hideFrame.onload = this.printPage;
      hideFrame.style.display = "none"; // hide iframe
      hideFrame.src = "external-page.html";
      document.body.appendChild(hideFrame);
    });

    this.http.get('../../assets/style.scss', { responseType: 'text' }).subscribe(
      // this.http.get('print-component-rand-d.component.scss', {responseType: 'text'}).subscribe(
      styleSheet => {
        this.styleSheewtString = styleSheet;
        // alert("styleSheet");  
        // alert(styleSheet);  
        // alert(this.styleSheewtString);  

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


    // // var printContent = document.getElementById('printToconent')?.innerHTML;
    // var originalContent = window.document.body.innerHTML;
    // this.domContent = window.document.body.innerHTML;
    // setTimeout(() => {
    //   // window.document.body.innerHTML = innerContents as string;
    //   this.renderer.setProperty(document.body, 'innerHTML', innerContents);

    //   window.print();
    //   setTimeout(() => {
    //     // window.document.body.innerHTML = this.domContent;
    //     this.renderer.setProperty(document.body, 'innerHTML', originalContent);
    //   }, 0)

    // }, 0)


    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');

    popupWinindow?.document.open();
    popupWinindow?.document.write(`<html><head>
    <style>` +
    innerContentsCss +
    `</style>

    </head><body>` + innerContents + '</html>');

    this.copyStyles(popupWinindow as Window);
    popupWinindow?.print();
    popupWinindow?.document.close();
    // this.finalPrint();


  }

  finalPrint() {

  }


  private copyStyles(printWindow: Window) {
    const stylesheets = Array.from(document.styleSheets);
    stylesheets.forEach((stylesheet: CSSStyleSheet) => {
      try {
        if (stylesheet.cssRules) {
          const newStyleElement = printWindow.document.createElement('style');
          Array.from(stylesheet.cssRules).forEach(rule => {
            newStyleElement.appendChild(printWindow.document.createTextNode(rule.cssText));
          });
          printWindow.document.head.appendChild(newStyleElement);
        }
      } catch (e) {
        console.error('Error copying styles:', e);
      }
    });
  }

}
