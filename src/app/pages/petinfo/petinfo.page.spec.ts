import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetinfoPage } from './petinfo.page';

describe('PetinfoPage', () => {
  let component: PetinfoPage;
  let fixture: ComponentFixture<PetinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
