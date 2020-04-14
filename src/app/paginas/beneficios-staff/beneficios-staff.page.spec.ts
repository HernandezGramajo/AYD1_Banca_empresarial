import { async, ComponentFixture, TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

import { RouterTestingModule } from '@angular/router/testing';
import { convertToParamMap,ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../servicios/api.service';
import { Observable,of } from 'rxjs';

import { Beneficios } from '../../modelos/beneficios';

import { BeneficiosStaffPage } from './beneficios-staff.page';

describe('BeneficiosStaffPage', () => {
  let component: BeneficiosStaffPage;
  let fixture: ComponentFixture<BeneficiosStaffPage>;
  let injector : TestBed;
  let service : ApiService;
  let httpMock : HttpTestingController;
  let router : Router;
  let navCtrl : NavController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiosStaffPage ],
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

    fixture = TestBed.createComponent(BeneficiosStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#popUpMessage', ()=>{
    it('should not call popUpMessage because a system error', ()=>{
     let mensaje = null;
      component.popUpMensaje(mensaje);
      expect(component.popUpMensaje(mensaje)).toBeUndefined();
    });
    it('should call popUpMessage as planned', ()=>{
      let mensaje = "un mensaje";
      component.popUpMensaje(mensaje);
      expect(component.flagpop).toEqual(1);
      expect(component.popUpMensaje(mensaje)).toBeUndefined();
    });
  });

  

  describe('#loadBeneficios', () => {
    it('Should load Beneficios[] into dataBeneficios', () => {
      component.id = 1;
      var res : Beneficios;

      spyOn(service,'getItemBeneficios').and.returnValue(of(res))

      expect(component.loadBeneficios()).toBeUndefined();
    });

  });

});
