import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterTemplateFormComponent } from './starterTemplateForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DebugElement} from '@angular/core'; 
import {By} from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('StarterTemplateFormComponent', () => {
  let component: StarterTemplateFormComponent;
  let fixture: ComponentFixture<StarterTemplateFormComponent>;
  let submitButton: DebugElement;

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
    submitButton = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the First Name control value set to Fred Template', ()=>{
    expect(component.customer).toEqual({
      firstName: 'Fred Template'
  });
  });

  it('should have the submit button enabled', ()=>{
    expect(submitButton.nativeElement.disabled).toEqual(false);
  });

  //Test onSubmit Function
  it('should have message variable equal to \'You Typed\' + customer.name on submit', ()=>{
    component.onSubmit();
    expect(component.message).toEqual('You typed: Fred Template');
  });

  it('should have message variable equal to \'You Typed\' + customer.name on submit', ()=>{
    component.customer = {firstName:'John Smith'};
    component.onSubmit();
    expect(component.message).toEqual('You typed: John Smith');
  });

  it('should call onSubmit method when submit button clicked', ()=>{
      spyOn(component, 'onSubmit');
      const button = fixture.debugElement.nativeElement.querySelector('button');
      button.click(); 
      expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('form should be valid onInit', ()=>{
    const firstName = fixture.debugElement.nativeElement.querySelector('input');
    expect(firstName.valid).toBeTruthy;
  });

  it('form should be invalid if First Name is null', ()=>{
    component.customer.firstName = '';
    const firstName = fixture.debugElement.nativeElement.querySelector('input');
    expect(firstName.valid).toBeFalsy;
  });


});

