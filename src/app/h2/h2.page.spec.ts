import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { H2Page } from './h2.page';

describe('H2Page', () => {
  let component: H2Page;
  let fixture: ComponentFixture<H2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(H2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
