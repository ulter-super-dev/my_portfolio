import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySkillBtnComponent } from './key-skill-btn.component';

describe('KeySkillBtnComponent', () => {
  let component: KeySkillBtnComponent;
  let fixture: ComponentFixture<KeySkillBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeySkillBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySkillBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
