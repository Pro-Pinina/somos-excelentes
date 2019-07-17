import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroexcelentesComponent } from './registroexcelentes.component';

describe('RegistroexcelentesComponent', () => {
  let component: RegistroexcelentesComponent;
  let fixture: ComponentFixture<RegistroexcelentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroexcelentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroexcelentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
