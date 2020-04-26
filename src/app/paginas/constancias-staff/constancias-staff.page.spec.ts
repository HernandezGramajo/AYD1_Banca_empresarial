import { async, ComponentFixture,TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConstanciasStaffPage } from './constancias-staff.page';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'constancia-staff', pathMatch: 'full' },
  { path: 'constancia-staff', loadChildren: './constancia-staff/constancia-staff.module#ConstanciaStaffPageModule' },
 ];
describe('ConstanciasStaffPage', () => {
  let component: ConstanciasStaffPage;
  let fixture: ComponentFixture<ConstanciasStaffPage>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConstanciasStaffPage ],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientTestingModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstanciasStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#atras', () => {
    it('Should return to main menu', () => {
      component.id=1;
      component.type=1;
      component.user ="admim"
      expect(component.atras()).toBeUndefined();
    })
  });

  describe('Aceptar', () => {
    it('Should return to null', () => {
      const json ={
        "id_constancia": 1,
        "tipoConstancia": 1,
        "id_empleado": 1,
        "id_administrador": 1,
        "estado_constancia": 1,
        "cuerpo_constancia": "",
        "fecha_constancia": Date
  
      }
      expect(component.Aceptar(json).then).toBeTruthy();
  
      //expect(component.Aceptar(json)).toEqual(Promise.resolve());
      
    })
  });

  describe('Rechazar', () => {
    it('Should return to null', () => {
      const json ={
        "id_constancia": 1,
        "tipoConstancia": 1,
        "id_empleado": 1,
        "id_administrador": 1,
        "estado_constancia": 2,
        "cuerpo_constancia": "",
        "fecha_constancia": Date
  
      }
      
     expect(component.Rechazar(json).then).toBeTruthy();
    // component.Rechazar(json);
    })
  });

  describe('obtener constancias', () => {
    it('Should return null', () => {
      expect(component.obtener_constancias()).toBeUndefined();
      
    })
  });

});
