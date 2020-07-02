import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { H3Page } from './h3.page';

describe('H3Page', () => {
  let component: H3Page;
  let fixture: ComponentFixture<H3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(H3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
