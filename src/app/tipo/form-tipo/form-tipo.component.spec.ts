import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoComponent } from './form-tipo.component';

describe('FormTipoComponent', () => {
  let component: FormTipoComponent;
  let fixture: ComponentFixture<FormTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
