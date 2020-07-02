import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { H1Page } from './h1.page';

describe('H1Page', () => {
  let component: H1Page;
  let fixture: ComponentFixture<H1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(H1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
