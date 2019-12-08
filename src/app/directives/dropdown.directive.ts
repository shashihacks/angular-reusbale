import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[skDropdown]'
})
export class SkNgDropdownDirective {

  @HostBinding('class.show') isOpen: boolean = false;
  @HostListener('document:click', ['$event'])
  toggleView(event) {
   
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }

  constructor(private eRef: ElementRef) {

  }

}

