import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { setTimeout } from "timers";

export class PasswordValidators {

    private password: string;

    static incorrectPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
                if (control.value !== '1234')
                    resolve({ incorrectPassword: true });
                else
                    resolve(null);
        });
    }

    static invalidPassword(control: AbstractControl): ValidationErrors | null {
        if (false)
            return { invalidPassword: true }
        else
            return null
    }

    static incorrectConfirmation(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirm = control.get('confirmPassword');
        if (newPassword.value !== confirm.value) {
            return { incorrectConfirmation: true }
        }
        else {
            return null;
        }
    }



}