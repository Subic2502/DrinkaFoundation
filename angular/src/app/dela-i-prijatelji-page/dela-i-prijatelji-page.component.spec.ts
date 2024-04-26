import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaIPrijateljiPageComponent } from './dela-i-prijatelji-page.component';

describe('DelaIPrijateljiPageComponent', () => {
  let component: DelaIPrijateljiPageComponent;
  let fixture: ComponentFixture<DelaIPrijateljiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelaIPrijateljiPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelaIPrijateljiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
