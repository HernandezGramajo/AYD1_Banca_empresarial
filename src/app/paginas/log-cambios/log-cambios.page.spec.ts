import { async, ComponentFixture, TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { LogCambios } from '../../modelos/log-cambios';
import { RouterTestingModule } from '@angular/router/testing';
import { convertToParamMap,ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../servicios/api.service';
import { Observable,of } from 'rxjs';

import { LogCambiosPage } from './log-cambios.page';

describe('LogCambiosPage', () => {
  let component: LogCambiosPage;
  let fixture: ComponentFixture<LogCambiosPage>;
  let injector : TestBed;
  let service : ApiService;
  let httpMock : HttpTestingController;
  let router : Router;
  let navCtrl : NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCambiosPage ],
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

    fixture = TestBed.createComponent(LogCambiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getLogs', () => {
    it('Should load Beneficios[] into dataBeneficios', () => {
      component.id = 1;
      var res : LogCambios;

      spyOn(service,'getAllLog').and.returnValue(of(res))

      expect(component.loadUsuarios()).toBeUndefined();
    });

  });


});
