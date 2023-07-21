import { AbstractControl, ValidatorFn } from '@angular/forms';

export function avatarUrlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // Check if the value is null, empty, or undefined before calling startsWith()
    if (value == null || value.trim() === '' || !value.startsWith('https://')) {
      return { invalidAvatarUrl: true };
    }

    return null;
  };
}
