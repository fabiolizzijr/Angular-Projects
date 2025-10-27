import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReport } from './issue-report';

describe('IssueReport', () => {
  let component: IssueReport;
  let fixture: ComponentFixture<IssueReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
