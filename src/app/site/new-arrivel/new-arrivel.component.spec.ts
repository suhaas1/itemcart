import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivelComponent } from './new-arrivel.component';

describe('NewArrivelComponent', () => {
  let component: NewArrivelComponent;
  let fixture: ComponentFixture<NewArrivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
