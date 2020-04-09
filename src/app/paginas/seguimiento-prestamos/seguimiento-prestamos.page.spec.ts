import { async, ComponentFixture, TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { RouterTestingModule } from '@angular/router/testing';
import { convertToParamMap,ActivatedRoute, Router } from '@angular/router';

import { SeguimientoPrestamosPage } from './seguimiento-prestamos.page';
import { ApiService } from '../../servicios/api.service';
import { Observable,of } from 'rxjs';

import { Prestamos } from '../../modelos/prestamos';
import { Constancia } from '../../modelos/constancia';

describe('SeguimientoPrestamosPage', () => {
  let component: SeguimientoPrestamosPage;
  let fixture: ComponentFixture<SeguimientoPrestamosPage>;

  let injector : TestBed;
  let service : ApiService;
  let httpMock : HttpTestingController;

  let router : Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPrestamosPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: {
            snapshot: {
                paramMap: {
                    get: (key: string) => {
                        switch(key){
                          case 'id':
                            return 1;
                          case 'type':
                            return 0;
                          case 'user':
                            return 'TestUser';
                        }
                    }
                }
            }
          }
        }, 
        ApiService
      ]
    }).compileComponents();

    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);

    router = injector.get(Router);

    fixture = TestBed.createComponent(SeguimientoPrestamosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#atras', () => {
    it('Should return to main menu', () => {
      expect(component.atras()).toBeUndefined();
    })
  });
  
  describe('#onChange', () => {
    it('Should make Data be NULL', () => {
      expect(component.onChange()).toBeUndefined();
    })
  });
  
  describe('#cargarData', () => {
    it('Should lead to Load Prestamos', () => {
      component.dataOption = 1;

      spyOn(component,'loadPrestamos');

      component.cargarData();
      expect(component.loadPrestamos).toHaveBeenCalled();
    })
    it('Should lead to Load Constancias', () => {
      component.dataOption = 2;

      spyOn(component,'loadConstancias');

      component.cargarData();
      expect(component.loadConstancias).toHaveBeenCalled();
    })
    it('Should lead to Error', () => {
      component.dataOption = -1;

      spyOn(component,'popUpMensaje');

      component.cargarData();
      expect(component.popUpMensaje).toHaveBeenCalled();
    })
  });
  
  describe('#loadPrestamos', () => {
    it('Should load Solicitudes de Prestamo for itemID', () => {
      component.id = 1;
      let res : Prestamos;
      
      spyOn(service,'getAllPrestamos').and.returnValue(of(res));
  
      expect(component.loadPrestamos()).toBeUndefined();
    });
  });
  
  describe('#loadConstancias', () => {
    it('Should load Solicitudes de Constancias for itemID', () => {
      component.id = 1;
      let res : Constancia[];
      
      spyOn(service,'getAllConstancias').and.returnValue(of(res));
  
      expect(component.loadConstancias()).toBeUndefined();
    });
  });
  
  describe('#popUpMensaje', () => {
    it('Should show empty pop up message', () => {
      expect(component.popUpMensaje("")).toBeUndefined();
    });
  });
});
