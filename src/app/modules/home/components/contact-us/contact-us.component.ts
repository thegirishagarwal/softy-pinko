import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(): void {
    const controlConfig: {[key: string]: any} = {
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]],
      message: ['', [
        Validators.required
      ]]
    }

    this.contactForm = this.fb.group(controlConfig);
  }


  onSubmitContactForm(): void {
    if (this.contactForm.invalid) {
      return;
    }
  }

}
