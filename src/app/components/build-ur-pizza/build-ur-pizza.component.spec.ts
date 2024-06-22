import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildUrPizzaComponent } from './build-ur-pizza.component';

describe('BuildUrPizzaComponent', () => {
  let component: BuildUrPizzaComponent;
  let fixture: ComponentFixture<BuildUrPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildUrPizzaComponent]
    });
    fixture = TestBed.createComponent(BuildUrPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
