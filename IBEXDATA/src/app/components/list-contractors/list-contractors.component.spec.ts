import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractorsComponent } from './list-contractors.component';

describe('ListContractorsComponent', () => {
  let component: ListContractorsComponent;
  let fixture: ComponentFixture<ListContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContractorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
