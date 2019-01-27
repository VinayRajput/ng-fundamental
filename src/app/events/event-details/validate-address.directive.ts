import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateAddress]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateAddressDirective, multi: true }]
})
export class ValidateAddressDirective {

  validate (formGroup: FormGroup): { [key: string]: any } {
    const address = formGroup.controls['address'];
    const city = formGroup.controls['city'];
    const country = formGroup.controls['country'];
    const onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];
    if (!!(address && address.value && city && city.value && country && country.value) || !!(onlineUrl && onlineUrl.value)) {
      return null;
    } else {
      return { validateAddress: false };
    }
  }
}
