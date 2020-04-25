import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguimientoPrestamosPage } from './seguimiento-prestamos.page';

describe('SeguimientoPrestamosPage', () => {
  let component: SeguimientoPrestamosPage;
  let fixture: ComponentFixture<SeguimientoPrestamosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPrestamosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguimientoPrestamosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
