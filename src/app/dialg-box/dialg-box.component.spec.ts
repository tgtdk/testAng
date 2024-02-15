import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialgBoxComponent } from './dialg-box.component';

describe('DialgBoxComponent', () => {
  let component: DialgBoxComponent;
  let fixture: ComponentFixture<DialgBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialgBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
