import { PasswordValidators } from './password.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hmwk-form',
  templateUrl: './hmwk-form.component.html',
  styleUrls: ['./hmwk-form.component.css']
})
export class HmwkFormComponent{
  currentPassword : string = "1234";

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.incorrectPassword),
    newPassword: new FormControl('', Validators.required), 
    confirmPassword: new FormControl('', Validators.required)
  }, PasswordValidators.incorrectConfirmation);

  get oldPassword () {
    return this.form.get('oldPassword');
  }

  get newPassword () {
    return this.form.get('newPassword');
  }

  get confirmPassword () {
    return this.form.get('confirmPassword');
  }

  changePassword() {
    this.currentPassword = this.newPassword.value;
    console.log(this.currentPassword);
  }
}
