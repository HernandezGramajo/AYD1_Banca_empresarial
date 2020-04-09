import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolConstanciaPage } from './sol-constancia.page';

describe('SolConstanciaPage', () => {
  let component: SolConstanciaPage;
  let fixture: ComponentFixture<SolConstanciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolConstanciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolConstanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
