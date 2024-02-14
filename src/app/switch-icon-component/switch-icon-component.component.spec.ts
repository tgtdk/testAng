import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchIconComponentComponent } from './switch-icon-component.component';

describe('SwitchIconComponentComponent', () => {
  let component: SwitchIconComponentComponent;
  let fixture: ComponentFixture<SwitchIconComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchIconComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
