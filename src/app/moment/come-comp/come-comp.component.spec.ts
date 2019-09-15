import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeCompComponent } from './come-comp.component';

describe('ComeCompComponent', () => {
  let component: ComeCompComponent;
  let fixture: ComponentFixture<ComeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
