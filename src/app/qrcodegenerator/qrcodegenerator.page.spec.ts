import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrcodegeneratorPage } from './qrcodegenerator.page';

describe('QrcodegeneratorPage', () => {
  let component: QrcodegeneratorPage;
  let fixture: ComponentFixture<QrcodegeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodegeneratorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodegeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
