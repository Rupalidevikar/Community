import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageNotificationPage } from './manage-notification.page';

describe('ManageNotificationPage', () => {
  let component: ManageNotificationPage;
  let fixture: ComponentFixture<ManageNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
