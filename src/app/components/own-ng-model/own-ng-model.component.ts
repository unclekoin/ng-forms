import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OwnNgModelComponent),
  multi: true
}

@Component({
  selector: 'app-own-ng-model',
  templateUrl: './own-ng-model.component.html',
  styleUrls: ['./own-ng-model.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class OwnNgModelComponent implements ControlValueAccessor {
  public state = 'off';

  private onChange = (value: any) => {}


  setState(state: string) {
    this.state = state;

    this.onChange(this.state)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(state: string): void {
    this.state = state;
  }

}