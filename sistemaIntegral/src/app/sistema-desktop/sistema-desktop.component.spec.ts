import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaDesktopComponent } from './sistema-desktop.component';

describe('SistemaDesktopComponent', () => {
  let component: SistemaDesktopComponent;
  let fixture: ComponentFixture<SistemaDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
