import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMoviesCarouselComponent } from './featured-movies-carousel.component';

describe('FeaturedMoviesCarouselComponent', () => {
  let component: FeaturedMoviesCarouselComponent;
  let fixture: ComponentFixture<FeaturedMoviesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedMoviesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMoviesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
