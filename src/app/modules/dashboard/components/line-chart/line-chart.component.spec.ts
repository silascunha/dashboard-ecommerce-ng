import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { LineChartComponent } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
