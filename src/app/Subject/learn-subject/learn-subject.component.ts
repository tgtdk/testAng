import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ElementRef, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { HeroService } from '../../hero.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';

@Component({
  selector: 'app-learn-subject',
  template: `
  <button (click)="FunClick()">Click To Open</button>
  <div [innerHTML]="templateContent" class="child-component-unique-class" ></div>`,
  styleUrl: './learn-subject.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LearnSubjectComponent implements OnInit, AfterViewInit {
  userName: string = "Dhruvil";
  @Input() initialValue: string = '';
  inputValue: string = '';
  pageNumber: number = 1; // Set the initial page number;
  @Input() templateName: string = 'template1';
  templateContent: SafeHtml = "";

  currentTemplate: any;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  componentRef!: ComponentRef<any>;

  styles: string = '';
  @ViewChild('styleElement') styleElement!: ElementRef;

  constructor(private heroService: HeroService, private elRef: ElementRef, private http: HttpClient, private sanitizer: DomSanitizer, private resolver: ComponentFactoryResolver) {

    // this.heroService.userName.subscribe((res) =>{
    //   this.userName = res;
    // })
  }
  ngOnInit(): void {
    this.loadTemplate();



    this.inputValue = this.initialValue;
    // this.inputValue = this.elRef.nativeElement.querySelector('input').value;


  }
  // print r and d assets foldre html file 
  ngOnChanges() {
    this.loadTemplate();
    // this.currentTemplate = this.templateName === 'template1' ? template1 : template2;
  }
  loadTemplate() {

    if (this.templateName === 'template1') {
      this.http.get('../../../assets/print_template1.html', { responseType: 'text' }).subscribe(
        (data) => {
          // const modifiedData = data.replace(/<style([\s\S]*?)<\/style>/gi, '');
          // this.templateContent = this.sanitizer.bypassSecurityTrustHtml(modifiedData);
          // const sanitizedData = this.sanitizer.bypassSecurityTrustHtml(data);
          // const stringData = sanitizedData.toString();
          // const prefixData = stringData.replace(/<style>/g, '<style>.child-component-unique-class ');

          let styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
          const matches = data.matchAll(styleRegex);
          for (const match of matches) {
            this.styles += match[1];
            // Remove style tag from HTML content
            data = data.replace(match[0], '');
          }

          this.templateContent = this.sanitizer.bypassSecurityTrustHtml(data);
          alert(this.styles);

        },
        (error) => {
          console.error('Error loading template1:', error);
        }
      );
    } else if (this.templateName === 'template2') {
      this.http.get('../../../assets/print_template2.html', { responseType: 'text' }).subscribe(
        (data) => {
          this.templateContent = this.sanitizer.bypassSecurityTrustHtml(data);
          ;
        },
        (error) => {
          console.error('Error loading template2:', error);
        }
      );
    }
  }


  loadDynamicComponents() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    const factory = this.resolver.resolveComponentFactory(Comp2Component);
    this.componentRef = this.dynamicComponentContainer.createComponent(factory);

    const factory2 = this.resolver.resolveComponentFactory(Comp3Component);
    this.componentRef = this.dynamicComponentContainer.createComponent(factory2);
  }

  // print r and d assets foldre html file 

  ngAfterViewInit(): void {

    // window.print();
  }

  transform() {

  }
  FunClick() {
    const newWindow = window.open();
    newWindow!.document.write(`
  <html>
    <head>
      <style>${this.styles}</style>
    </head>
    <body></body>
  </html>
`);
  }
}

