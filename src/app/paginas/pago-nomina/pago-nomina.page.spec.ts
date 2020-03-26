import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoNominaPage } from './pago-nomina.page';

describe('PagoNominaPage', () => {
  let component: PagoNominaPage;
  let fixture: ComponentFixture<PagoNominaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoNominaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoNominaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
