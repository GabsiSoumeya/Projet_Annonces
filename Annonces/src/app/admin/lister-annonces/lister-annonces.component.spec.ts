import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerAnnoncesComponent } from './lister-annonces.component';

describe('ListerAnnoncesComponent', () => {
  let component: ListerAnnoncesComponent;
  let fixture: ComponentFixture<ListerAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
