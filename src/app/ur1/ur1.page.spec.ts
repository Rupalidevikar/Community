import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UR1Page } from './ur1.page';

describe('UR1Page', () => {
  let component: UR1Page;
  let fixture: ComponentFixture<UR1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UR1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UR1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
