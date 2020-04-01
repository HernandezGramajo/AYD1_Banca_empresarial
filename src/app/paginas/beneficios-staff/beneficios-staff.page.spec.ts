import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeneficiosStaffPage } from './beneficios-staff.page';

describe('BeneficiosStaffPage', () => {
  let component: BeneficiosStaffPage;
  let fixture: ComponentFixture<BeneficiosStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiosStaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiosStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
