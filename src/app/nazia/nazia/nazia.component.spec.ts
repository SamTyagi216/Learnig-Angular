import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaziaComponent } from './nazia.component';

describe('NaziaComponent', () => {
  let component: NaziaComponent;
  let fixture: ComponentFixture<NaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaziaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
