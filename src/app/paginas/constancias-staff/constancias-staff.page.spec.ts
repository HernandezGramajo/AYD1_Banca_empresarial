import { async, ComponentFixture,TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConstanciasStaffPage } from './constancias-staff.page';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'constancia-staff', pathMatch: 'full' },
  { path: 'constancia-staff', loadChildren: './constancia-staff/constancia-staff.module#ConstanciaStaffPageModule' },
 ];
describe('ConstanciasStaffPage', () => {
  let component: ConstanciasStaffPage;
  let fixture: ComponentFixture<ConstanciasStaffPage>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConstanciasStaffPage ],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientTestingModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstanciasStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
