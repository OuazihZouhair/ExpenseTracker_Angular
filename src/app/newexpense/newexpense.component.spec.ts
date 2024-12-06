import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpenseComponent } from './newexpense.component';

describe('NewexpenseComponent', () => {
  let component: NewexpenseComponent;
  let fixture: ComponentFixture<NewexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewexpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
