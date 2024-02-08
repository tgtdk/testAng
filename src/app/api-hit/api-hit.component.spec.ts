import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHitComponent } from './api-hit.component';

describe('ApiHitComponent', () => {
  let component: ApiHitComponent;
  let fixture: ComponentFixture<ApiHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiHitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
