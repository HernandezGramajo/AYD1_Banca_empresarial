import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaReporteNominaEmpresaPage } from './consulta-reporte-nomina-empresa.page';

describe('ConsultaReporteNominaEmpresaPage', () => {
  let component: ConsultaReporteNominaEmpresaPage;
  let fixture: ComponentFixture<ConsultaReporteNominaEmpresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaReporteNominaEmpresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaReporteNominaEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
