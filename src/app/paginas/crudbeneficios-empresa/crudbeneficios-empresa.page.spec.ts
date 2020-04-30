import { async, ComponentFixture, TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

import { RouterTestingModule } from '@angular/router/testing';
import { convertToParamMap,ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../servicios/api.service';
import { Observable,of } from 'rxjs';

import { Beneficios } from '../../modelos/beneficios';


import { CrudbeneficiosEmpresaPage } from './crudbeneficios-empresa.page';

describe('CrudbeneficiosEmpresaPage', () => {
  let component: CrudbeneficiosEmpresaPage;
  let fixture: ComponentFixture<CrudbeneficiosEmpresaPage>;
  let injector : TestBed;
  let service : ApiService;
  let httpMock : HttpTestingController;
  let router : Router;
  let navCtrl : NavController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudbeneficiosEmpresaPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ApiService]
    }).compileComponents();

    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
    router = injector.get(Router);

    fixture = TestBed.createComponent(CrudbeneficiosEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#presentAlert', ()=>{
    it('should not call presentAlert because a system error', ()=>{
     let mensaje = null;
      component.presentAlert(mensaje);
      expect(component.presentAlert(mensaje)).toBeUndefined();
    });
    it('should call presentAlert as planned', ()=>{
      let mensaje = "un mensaje";
      component.presentAlert(mensaje);
      expect(component.flagpop).toEqual(1);
      expect(component.presentAlert(mensaje)).toBeUndefined();
    });
  });

  describe('#checkFields', ()=>{
    var dato = new Beneficios();
    it('error should be true due to id usuario is empty', ()=>{
      let mensaje = "";
      dato.id_beneficio = null;
       component.checkFields(mensaje);
       expect(component.error).toBeTruthy();
       
       expect(component.checkFields(mensaje)).toBeUndefined();
     });
     it('error should be true due to nombre usuario is empty', ()=>{
       let mensaje = "";
       dato.nombre_beneficio = null;
       component.checkFields(mensaje);
       expect(component.error).toBeTruthy();
        expect(component.checkFields(mensaje)).toBeUndefined();
      });
      it('error should be true due to password usuario is empty', ()=>{
       let mensaje = "";
       dato.descripcion_beneficio = null;
       component.checkFields(mensaje);
       expect(component.error).toBeTruthy();
        expect(component.checkFields(mensaje)).toBeUndefined();
      });


    it('should call checkFields as planned', ()=>{
      
      
      let mensaje = "";
      dato.id_beneficio = 1015;
      dato.nombre_beneficio= "Usuario prueba unitaria";
      dato.descripcion_beneficio= "prueba unitaria beneficio";   



     
      component.error = false;
      component.checkFields(mensaje);
      expect(component.checkFields(mensaje)).toBeUndefined();

    });
  });

  
      

  describe('#createBeneficios', () => {

    it('Should return flag as 1 since fields are properly filled', () => {
      component.data = new Beneficios();
      component.data.id_beneficio = 100;
      component.data.nombre_beneficio= "juan";
      component.data.descripcion_beneficio = "unit test";
      component.createBeneficios();
      expect(component.flagcreate).toBe(1);

    });

  });


});
