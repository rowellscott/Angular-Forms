import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterReactiveFormComponent } from './starterReactiveForm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';

describe('StarterReactiveFormComponent', () => {
  let component: StarterReactiveFormComponent;
  let fixture: ComponentFixture<StarterReactiveFormComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ StarterReactiveFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterReactiveFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testing Form Validity
  it('should be vaild', () => {
    expect(component.customerForm.valid).toBeTruthy();
  });

  //Testing The Form is Invalid if First Name Control is Null
  it('should be invalid if First Name control is null', () => {
  component.customerForm.controls['firstName'].setValue('');
  fixture.detectChanges();  
  expect(component.customerForm.valid).toBeFalsy();
  });

  //Test onSubmit Function
  it('should have message equal \'You Typed: Tina Reactive when call onSubmit function', () => {
    component.onSubmit(component.customerForm);
    expect(component.message).toEqual('You typed: Tina Reactive');
  });

   //Test onSubmit Function with changes to firstName Input
   it('should have message equal \'You Typed: John Smith when call onSubmit function', () => {
    component.customerForm.controls['firstName'].setValue('John Smith')
    component.onSubmit(component.customerForm);
    expect(component.message).toEqual('You typed: John Smith');
  });

  it('should call onSubmit method when submit button clicked', ()=>{
    spyOn(component, 'onSubmit');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button');
    submitButton.click(); 
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
});

//Submit Button should be enabled onInit
it('should have the submit button should be enabled', ()=>{
  const submitButton = fixture.debugElement.query(By.css('button'));
  expect(submitButton.nativeElement.disabled).toBeFalsy();
});

//Submit Button should be disabled if Form is invalid
it('should have the submit button disabled if the form is invalid', () => {
  const submitButton = fixture.debugElement.query(By.css('button'));  
  component.customerForm.controls['firstName'].setValue('');
  fixture.detectChanges();
  expect(submitButton.nativeElement.disabled).toBeTruthy();
});


});