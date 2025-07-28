import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipale } from './page-principale';

describe('PagePrincipale', () => {
  let component: PagePrincipale;
  let fixture: ComponentFixture<PagePrincipale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePrincipale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePrincipale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
