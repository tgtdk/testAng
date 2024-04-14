import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
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
  templateName = 'template1'; // Initial template name


  // Set Time Out Other Option Start
  isButtonHidden:boolean = true;

  //2nd approch
  @ViewChild('enabledButton') enabledButton!: ElementRef;
  // Set Time Out Other Option End


  constructor(private http: HttpClient, private renderer: Renderer2, private elementRef: ElementRef, private resolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) {

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
        // 
        // 
        // 

        console.log("this.styleSheewtString");
        console.log(this.styleSheewtString);
      }
    )

  }


  changeTemplate() {
    this.templateName = this.templateName === 'template1' ? 'template2' : 'template1';
    console.log(this.templateName)
    
  }

  printPage = () => {

    var innerContents = (document.getElementById('printContent')?.cloneNode(true) as HTMLElement).innerHTML;
    // var innerContents = (document.querySelector('app-learn-subject')?.cloneNode(true)as HTMLElement).innerHTML;

    // const inputValue = this.printableContent?.inputValue;

    // 
    // 
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




    // const newDocument = popupWinindow?.document;
    // const newAppRoot = newDocument?.createElement('app-new-window') as Node;
    // (newDocument?.body as HTMLElement).appendChild(newAppRoot);

    // platformBrowserDynamic()
    //   .bootstrapModule(NewWindowModule)
    //   .catch(err => console.error(err));

    const factory = this.resolver.resolveComponentFactory(LearnSubjectComponent);
    const componentRef = this.contentContainer.createComponent(factory);
    componentRef.instance.initialValue = 'dynamicValue';

    setTimeout(() => {
      var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      this.copyStyles(popupWinindow as Window);




      setTimeout(() => {
        popupWinindow?.document.body.appendChild(componentRef.location.nativeElement);

        const newStyleElement = popupWinindow?.document.createElement('style');
        newStyleElement?.appendChild(popupWinindow?.document.createTextNode(`
        
        
@media print {
  /* All your print styles go here */
  
  @page{
      size: A4;
      margin: 0px ;
  }

  #printContent{
      display: block;
  }


  .print-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px; /* Set the height of the header */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-weight: bold;

  }

  .print-header .company-name {
    position: absolute;
    left: 10px; /* Adjust the position as needed */
  }

  .print-header .heading {
    font-size: 18px;
    flex: 1; /* Allow heading to grow and push page number to the right */
    text-align: center;
  }

  .print-header .page-number {
    position: absolute;
    right: 10px; /* Adjust the position as needed */
    font-size: 14px;
    margin: 0 10px;
  }

  .page-break {
    page-break-after: always;
  }
  .print-content {
    margin-top: 70px; /* Adjust the top margin to account for the header height */
  } 
  .print-content-after-page-break {
    margin-top: 70px; /* Adjust the top margin to account for the header height */
}


}
        `) as Node);

        popupWinindow?.document.head.appendChild(newStyleElement as Node);

        popupWinindow?.print()
      }, 2000)
    }, 0)



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


  // Set Time Out Other Option Start
  disableHidden(){
    this.isButtonHidden = false;
    // its working finally

    let tempHtml = document.getElementsByClassName('btnClass')[0].outerHTML;
    let FinalHtml = '';
    document.getElementsByClassName('btnClass')[0].outerHTML = document.getElementsByClassName('btnClass')[0].outerHTML.replace('#Hi#', 'Dhruvil');

    FinalHtml += document.getElementsByClassName('btnClass')[0].outerHTML;

    this.cdr.detectChanges();
    // setTimeout(()=>{
      console.log(document.getElementsByClassName('btnClass')[0].outerHTML);
    // })
    console.log(this.enabledButton.nativeElement.outerHTML);


    document.getElementsByClassName('btnClass')[0].outerHTML = tempHtml;
    this.cdr.detectChanges();

    this.isButtonHidden = true;
    // its working finally

    document.getElementsByClassName('btnClass')[0].outerHTML = document.getElementsByClassName('btnClass')[0].outerHTML.replace('#Hi#', 'Amol');
    FinalHtml += document.getElementsByClassName('btnClass')[0].outerHTML;

    this.cdr.detectChanges();
    // setTimeout(()=>{
      console.log(document.getElementsByClassName('btnClass')[0].outerHTML);
    // })
    console.log(this.enabledButton.nativeElement.outerHTML);

    console.log(FinalHtml);
    document.getElementsByClassName('btnClass')[0].outerHTML = FinalHtml;
    

  }

  getHtmlOnly(){
    console.log(document.getElementsByClassName('btnClass')[0].outerHTML);
  }
  // Set Time Out Other Option End
}
