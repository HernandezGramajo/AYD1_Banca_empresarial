import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogCambiosPage } from './log-cambios.page';

describe('LogCambiosPage', () => {
  let component: LogCambiosPage;
  let fixture: ComponentFixture<LogCambiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCambiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogCambiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
