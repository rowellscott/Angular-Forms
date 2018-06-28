import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterTemplateFormComponent } from './starterTemplateForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DebugElement} from "@angular/core"; 
import {By} from "@angular/platform-browser";
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('StarterTemplateFormComponent', () => {
  let component: StarterTemplateFormComponent;
  let fixture: ComponentFixture<StarterTemplateFormComponent>;
  let submit: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ StarterTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterTemplateFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    submit = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have the First Name control value set to Fred Template", ()=>{
    expect(component.customer).toEqual({
      firstName: 'Fred Template'
  });
  });

  it("should have the submit button enabled", ()=>{
    expect(submit.nativeElement.disabled).toEqual(false);
  });

  //Test onSubmit Function
  it("should have message variable equal to 'You Typed' + customer.name on submit", ()=>{
    component.onSubmit();
    expect(component.message).toEqual('You typed: Fred Template');
  });


});

