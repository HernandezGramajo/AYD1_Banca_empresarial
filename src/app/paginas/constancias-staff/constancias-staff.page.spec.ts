import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConstanciasStaffPage } from './constancias-staff.page';

describe('ConstanciasStaffPage', () => {
  let component: ConstanciasStaffPage;
  let fixture: ComponentFixture<ConstanciasStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciasStaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstanciasStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
