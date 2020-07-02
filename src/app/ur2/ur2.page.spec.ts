import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UR2Page } from './ur2.page';

describe('UR2Page', () => {
  let component: UR2Page;
  let fixture: ComponentFixture<UR2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UR2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UR2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
