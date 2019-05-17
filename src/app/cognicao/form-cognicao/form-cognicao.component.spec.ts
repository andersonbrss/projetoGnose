import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCognicaoComponent } from './form-cognicao.component';

describe('FormCognicaoComponent', () => {
  let component: FormCognicaoComponent;
  let fixture: ComponentFixture<FormCognicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCognicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCognicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
