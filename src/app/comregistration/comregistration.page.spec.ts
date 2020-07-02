import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComregistrationPage } from './comregistration.page';

describe('ComregistrationPage', () => {
  let component: ComregistrationPage;
  let fixture: ComponentFixture<ComregistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComregistrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComregistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
