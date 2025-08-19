import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversarioComponent } from './aniversario';

describe('Aniversario', () => {
  let component: AniversarioComponent;
  let fixture: ComponentFixture<AniversarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniversarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniversarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
