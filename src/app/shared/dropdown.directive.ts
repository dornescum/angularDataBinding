import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // vreau sa ma leg de clasa open
  @HostBinding('class.open') isOpen = false;

// @HostListener asculta pt click event(sau hover, etc)
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
