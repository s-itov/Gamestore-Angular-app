import { AbstractControl, ValidatorFn } from '@angular/forms';

export function avatarUrlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value.startsWith('https://')) {
      return { invalidAvatarUrl: true };
    }

    return null;
  };
}