import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsolaComponent } from './form-consola.component';

describe('FormConsolaComponent', () => {
  let component: FormConsolaComponent;
  let fixture: ComponentFixture<FormConsolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConsolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
