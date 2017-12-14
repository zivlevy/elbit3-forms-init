import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[makeRed]'
})
export class MakeRedDirective {
  @HostBinding ('style.backgroundColor') bc;

  constructor() {

  }

  @HostListener ('click')
  makeRed(){
    this.bc === 'red' ? this.bc = null : this.bc = 'red';
  }

}
