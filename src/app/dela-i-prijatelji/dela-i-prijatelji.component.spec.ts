import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaIPrijateljiComponent } from './dela-i-prijatelji.component';

describe('DelaIPrijateljiComponent', () => {
  let component: DelaIPrijateljiComponent;
  let fixture: ComponentFixture<DelaIPrijateljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelaIPrijateljiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelaIPrijateljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
