import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { LearnSubjectComponent } from '../Subject/learn-subject/learn-subject.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-print-component-rand-d',
  templateUrl: './print-component-rand-d.component.html',
  styleUrl: './print-component-rand-d.component.scss'
})
export class PrintComponentRandDComponent implements OnInit {

  @ViewChild(LearnSubjectComponent) printableContent: LearnSubjectComponent | undefined;

  @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainer!: ViewContainerRef;



  styleSheewtString: any;
  domContent: any;
  parentInputValue: string = '52222';


  constructor(private http: HttpClient, private renderer: Renderer2, private elementRef: ElementRef, private resolver: ComponentFactoryResolver) {

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

    var innerContents = (document.getElementById('printContent')?.cloneNode(true) as HTMLElement).innerHTML;
    // var innerContents = (document.querySelector('app-learn-subject')?.cloneNode(true)as HTMLElement).innerHTML;

    // const inputValue = this.printableContent?.inputValue;

    // alert(innerContents);
    // alert(this.parentInputValue);
    // console.log(innerContents);
    // return;
    // var innerContents = this.elementRef.nativeElement.querySelector('app-learn-subject').outerHTML;
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


    // const newDocument = popupWinindow?.document;
    // const newAppRoot = newDocument?.createElement('app-new-window') as Node;
    // (newDocument?.body as HTMLElement).appendChild(newAppRoot);

    // platformBrowserDynamic()
    //   .bootstrapModule(NewWindowModule)
    //   .catch(err => console.error(err));

    this.copyStyles(popupWinindow as Window);
    const factory = this.resolver.resolveComponentFactory(LearnSubjectComponent);
    const componentRef = this.contentContainer.createComponent(factory);
    
    popupWinindow?.document.body.appendChild(componentRef.location.nativeElement);
    
    setTimeout(()=>{
      popupWinindow?.print()
    }, 2000)



    // check 
    // const checkInitialized = () => {
    //   if (componentRef.instance.isInitialized()) {
    //     popupWinindow?.print(); // Print the content
    //   } else {
    //     setTimeout(checkInitialized, 100); // Check again after 100ms
    //   }
    // };
    // setTimeout(checkInitialized, 100);

    // popupWinindow?.document.open();
    // popupWinindow?.document.write(`<html><head>
    // <style>` +
    //   innerContentsCss +
    //   `</style>

    // </head><body>` + innerContents + '</html>');

    // (popupWinindow?.document.body as HTMLElement).innerHTML =  `<app-learn-subject [initialValue]="parentInputValue"></app-learn-subject>`    ;




    // popupWinindow?.document.close();
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
