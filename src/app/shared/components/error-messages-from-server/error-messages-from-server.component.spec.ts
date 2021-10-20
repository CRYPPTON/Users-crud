import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesFromServerComponent } from './error-messages-from-server.component';

describe('ErrorMessagesFromServerComponent', () => {
  let component: ErrorMessagesFromServerComponent;
  let fixture: ComponentFixture<ErrorMessagesFromServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessagesFromServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessagesFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
