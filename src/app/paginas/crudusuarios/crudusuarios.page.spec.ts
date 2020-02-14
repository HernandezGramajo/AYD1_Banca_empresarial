import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudusuariosPage } from './crudusuarios.page';

describe('CrudusuariosPage', () => {
  let component: CrudusuariosPage;
  let fixture: ComponentFixture<CrudusuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudusuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
