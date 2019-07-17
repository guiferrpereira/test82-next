import { NgModule, Component, Directive } from '@angular/core';
import { ButtonModule, ButtonDirective, Button } from 'primeng/button';

@Directive({
  selector: 'ritButton'
})
export class OverrideDirective extends ButtonDirective {}

@Component({
  selector: 'rit-button'
})
export class OverrideComponent extends Button {}

@NgModule({
  declarations: [OverrideDirective, OverrideComponent],
  imports: [ButtonModule],
  providers: [],
  exports: [OverrideDirective, OverrideComponent]
})
export class OverrideModule { }
