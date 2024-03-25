import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFooterComponent } from './gallery-footer.component';

describe('GalleryFooterComponent', () => {
  let component: GalleryFooterComponent;
  let fixture: ComponentFixture<GalleryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
