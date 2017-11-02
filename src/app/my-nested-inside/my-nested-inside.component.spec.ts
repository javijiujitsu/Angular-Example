import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNestedInsideComponent } from './my-nested-inside.component';

describe('MyNestedInsideComponent', () => {
  let component: MyNestedInsideComponent;
  let fixture: ComponentFixture<MyNestedInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNestedInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNestedInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
