import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManejoPrestamoPage } from './manejo-prestamo.page';

describe('ManejoPrestamoPage', () => {
  let component: ManejoPrestamoPage;
  let fixture: ComponentFixture<ManejoPrestamoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoPrestamoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManejoPrestamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
