import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAnnoncesComponent } from './ajouter-annonces.component';

describe('AjouterAnnoncesComponent', () => {
  let component: AjouterAnnoncesComponent;
  let fixture: ComponentFixture<AjouterAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
