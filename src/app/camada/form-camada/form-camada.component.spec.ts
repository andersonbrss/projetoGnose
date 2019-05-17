import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCamadaComponent } from './form-camada.component';

describe('FormCamadaComponent', () => {
  let component: FormCamadaComponent;
  let fixture: ComponentFixture<FormCamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
