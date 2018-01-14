import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { setTimeout } from "timers";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1) {
            return { cannotContainSpace: true };

            return null;
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'username')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000)
        });
        
    }
}