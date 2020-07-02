import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmiHome2Page } from './admi-home2.page';

describe('AdmiHome2Page', () => {
  let component: AdmiHome2Page;
  let fixture: ComponentFixture<AdmiHome2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiHome2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmiHome2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
