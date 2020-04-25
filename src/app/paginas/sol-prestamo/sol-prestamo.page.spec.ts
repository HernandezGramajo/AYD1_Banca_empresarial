import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolPrestamoPage } from './sol-prestamo.page';

describe('SolPrestamoPage', () => {
  let component: SolPrestamoPage;
  let fixture: ComponentFixture<SolPrestamoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolPrestamoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolPrestamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
