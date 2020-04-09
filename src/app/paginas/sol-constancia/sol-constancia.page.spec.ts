import { async, ComponentFixture, TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NavController, } from '@ionic/angular';
import { of } from 'rxjs';
import { ApiService } from '../../servicios/api.service';
import { Prestamos } from 'src/app/modelos/prestamos';
import { DatePipe } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { Constancia } from 'src/app/modelos/constancia';

import { SolConstanciaPage } from './sol-constancia.page';

describe('SolConstanciaPage', () => {
  let component: SolConstanciaPage;
  let fixture: ComponentFixture<SolConstanciaPage>;

  let injector : TestBed;
  let service : ApiService;
  let httpMock : HttpTestingController;
  let router : Router;
  let navCtrl : NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolConstanciaPage ],
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

    fixture = TestBed.createComponent(SolConstanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#Inicialization', ()=>{
    it('should not call get Datos because of id', ()=>{
      component.id = null;
      expect(component.ngOnInit()).toBeUndefined();
    });

    it('should not call get Datos because of user', ()=>{
      component.user = null;
      expect(component.ngOnInit()).toBeUndefined();
    });
    it('should not call get Datos because of type', ()=>{
      component.type = null;
      expect(component.ngOnInit()).toBeUndefined();
    });
    it('should not call get Datos because of type is admin', ()=>{
      component.id = 1;
      expect(component.ngOnInit()).toBeUndefined();
    });

    it('should call get init data is complete', ()=>{
      component.id = 4;
      component.user ="Mmutz";
      component.type = 4;

      expect(component.ngOnInit()).toBeTruthy();
    });
  });

  describe('#regresarMenu', ()=>{
    it('should not call staff page', ()=>{
      component.id = null;
      expect(component.atras()).toBeUndefined();
      component.atras();
      expect(component.flagatras).toEqual(0);
    });
    it('Should call staff page',()=>{
      component.id = 4;
      expect(component.atras()).toBeTruthy();
      component.atras();
      expect(component.flagatras).toEqual(1);
    });
  });

  describe('#Reload', ()=>{
    it('should not call reload because a system error', ()=>{
      component.reload()
      expect(component.flagreload).toEqual(0);
      expect(component.reload()).toBeUndefined();
    });
    it('should call reload as planned', ()=>{
      component.reload();
      expect(component.flagreload).toEqual(1);
      expect(component.reload()).toBeTruthy();
    });
  });

  describe('#popUpMessage', ()=>{
    it('should not call popUpMessage because a system error', ()=>{
     let mensaje = "un mensaje";
      component.popUpMensaje(mensaje);
      expect(component.flagpop).toEqual(0);
      expect(component.popUpMensaje(mensaje)).toBeUndefined();
    });
    it('should call popUpMessage as planned', ()=>{
      let mensaje = "un mensaje";
      component.popUpMensaje(mensaje);
      expect(component.flagpop).toEqual(1);
      expect(component.popUpMensaje(mensaje)).toBeTruthy();
    });
  });

  describe('#checkFields', ()=>{
    it('error should be true due to tipo constancia empty', ()=>{
     let mensaje = "";
     component.data.tipoConstancia = null;
      component.checkFields(mensaje);
      expect(component.error).toBeTruthy();
      
      expect(component.checkFields(mensaje)).toBeUndefined();
    });
    it('error should be true due to tipo constancia lenght is 0', ()=>{
      let mensaje = "";
      component.data.tipoConstancia = null;
      component.checkFields(mensaje);
      expect(component.error).toBeTruthy();
       expect(component.checkFields(mensaje)).toBeUndefined();
     });
     it('error should be true due to cuerpo constancia empty', ()=>{
      let mensaje = "";
      component.data.cuerpo_constancia = null;
      component.checkFields(mensaje);
      expect(component.error).toBeTruthy();
       expect(component.checkFields(mensaje)).toBeUndefined();
     });
     it('error should be true due to cuerpo constancia lenght is 0', ()=>{
      let mensaje = "";
      component.data.cuerpo_constancia = "";
      component.checkFields(mensaje);
      expect(component.error).toBeTruthy();
       expect(component.checkFields(mensaje)).toBeUndefined();
     });

    it('should call checkFields as planned', ()=>{
      let mensaje = "";
      component.data.tipoConstancia = 0;
      component.data.cuerpo_constancia = "aa";
      component.checkFields(mensaje);
      expect(component.error).toBeFalsy();
      expect(component.checkFields(mensaje)).toBeTruthy();
    });
  });

  describe('#solicitarconstancia', ()=>{
    it('should not enter in if due to error be true', ()=>{
     let mensaje = "";
     component.data.cuerpo_constancia = "";
      component.checkFields(mensaje);
      component.solicitarconstancia();
      expect(component.error).toBeTruthy();
      
    });
    it('should call solicitarconstancia as planned due to erro be false', ()=>{
      let mensaje = "";
      component.data.tipoConstancia = 0;
      component.data.cuerpo_constancia = "aa";
      component.checkFields(mensaje);
      component.solicitarconstancia();
      expect(component.data.id_administrador).toEqual(2);
      expect(component.error).toBeFalsy();
      expect(component.solicitarconstancia()).toBeTruthy();
    });
  });

   
});
