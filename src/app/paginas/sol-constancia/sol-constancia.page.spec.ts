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
      
      expect(component.ngOnInit()).toBeUndefined();
    });
  });

  describe('#regresarMenu', ()=>{
    it('should not call staff page', ()=>{
      component.id = 0;
      component.user ="";
      component.type = 0;
      expect(component.flagatras).toEqual(0);
      expect(component.atras()).toBeUndefined();

    });
    it('Should call staff page',()=>{
      
      component.id = 4;
      component.user ="Mmutz";
      component.type = 2;
      expect(component.atras()).toBeUndefined();
      expect(component.flagatras).toEqual(1);
    });
  });

  /*
  describe('#Reload', ()=>{
    it('should call reload as planned', ()=>{

      component.id = 4;
      component.user ="Mmutz";
      component.type = 2;
      let obj : any;
      spyOn(obj, 'reload').and.callFake(function(){ expect(component.flagreload).toEqual(1);});
      
      //expect(component.reload()).toBeTruthy();
    });
  });

  */
 
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

  describe('#checkFields', ()=>{
    var dato = new Constancia();
    it('error should be true due to tipo constancia empty', ()=>{
      let mensaje = "";
      dato.tipoConstancia = null;
       component.checkFields(mensaje, dato);
       expect(component.error).toBeTruthy();
       
       expect(component.checkFields(mensaje,dato)).toBeUndefined();
     });
     it('error should be true due to tipo constancia lenght is 0', ()=>{
       let mensaje = "";
       dato.tipoConstancia = null;
       component.checkFields(mensaje, dato);
       expect(component.error).toBeTruthy();
        expect(component.checkFields(mensaje, dato)).toBeUndefined();
      });
      it('error should be true due to cuerpo constancia empty', ()=>{
       let mensaje = "";
       dato.cuerpo_constancia = null;
       component.checkFields(mensaje, dato);
       expect(component.error).toBeTruthy();
        expect(component.checkFields(mensaje, dato)).toBeUndefined();
      });
      it('error should be true due to cuerpo constancia lenght is 0', ()=>{
       let mensaje = "";
       dato.cuerpo_constancia = "";
       component.checkFields(mensaje, dato);
       expect(component.error).toBeTruthy();
        expect(component.checkFields(mensaje, dato)).toBeUndefined();
      });

    it('should call checkFields as planned', ()=>{
      let mensaje = "";
      dato.tipoConstancia = 1;
      dato.cuerpo_constancia = "aa";
      component.error = false;
      component.checkFields(mensaje, dato);
      expect(component.checkFields(mensaje, dato)).toBeUndefined();
      expect(component.error).toBe(false);
    });
  });

  describe('#solicitarconstancia', ()=>{
    var dato = new Constancia();
    it('should not enter in if due to error be true', ()=>{
      
      dato.cuerpo_constancia = "";
      component.solicitarconstancia(dato);
      expect(component.solicitarconstancia(dato)).toBeUndefined();
      expect(component.error).toBeTruthy();
      
    });
    it('should call solicitarconstancia as planned due to error be false', ()=>{
      component.id = 4;
      component.user ="Mmutz";
      component.type = 2;
      dato.tipoConstancia = 0;
      dato.cuerpo_constancia = "aa";
      component.data.id_administrador = 2
      component.error = false;
      component.solicitarconstancia(dato);
      expect(component.solicitarconstancia(dato)).toBeUndefined();

    });
  });


});
