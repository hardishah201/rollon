import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFond } from './page-not-found';

describe('PageNotFond', () => {
  let component: PageNotFond;
  let fixture: ComponentFixture<PageNotFond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFond]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFond);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
