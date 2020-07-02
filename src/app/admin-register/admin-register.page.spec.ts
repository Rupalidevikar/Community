import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminRegisterPage } from './admin-register.page';

describe('AdminRegisterPage', () => {
  let component: AdminRegisterPage;
  let fixture: ComponentFixture<AdminRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
