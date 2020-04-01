import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudbeneficiosEmpresaPage } from './crudbeneficios-empresa.page';

describe('CrudbeneficiosEmpresaPage', () => {
  let component: CrudbeneficiosEmpresaPage;
  let fixture: ComponentFixture<CrudbeneficiosEmpresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudbeneficiosEmpresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudbeneficiosEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
