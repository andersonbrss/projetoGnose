import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinguagemComponent } from './form-linguagem.component';

describe('FormLinguagemComponent', () => {
  let component: FormLinguagemComponent;
  let fixture: ComponentFixture<FormLinguagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLinguagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
