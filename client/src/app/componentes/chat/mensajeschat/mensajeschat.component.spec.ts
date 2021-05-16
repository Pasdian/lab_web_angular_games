import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeschatComponent } from './mensajeschat.component';

describe('MensajeschatComponent', () => {
  let component: MensajeschatComponent;
  let fixture: ComponentFixture<MensajeschatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeschatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeschatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
