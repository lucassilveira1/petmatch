import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OngsignPage } from './ongsign.page';

describe('OngsignPage', () => {
  let component: OngsignPage;
  let fixture: ComponentFixture<OngsignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OngsignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
