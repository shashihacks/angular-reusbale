import { Directive, ElementRef, Input, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[skTooltip]'
})
export class TooltipDirective  implements OnInit{
  @Input('tooltipText') tooltipText: string
  @Input('position') position: string
  // tooltipElement = document.createElement('div');
  div = this.renderer.createElement('div');
  class = this.renderer.addClass(this.div, 'tooltiptext')
  text :any

  @HostListener('mouseenter') onHover() {

    this.renderer.appendChild(this.div, this.text);  
    this.renderer.appendChild(this.el.nativeElement, this.div);
     this.renderer.addClass(this.el.nativeElement, 'sktooltip')
    
    } 
  @HostListener('mouseleave') onLeave() {
    const div = this.renderer.createElement('div');
    this.renderer.removeChild(this.el.nativeElement, this.div);
  } 
  constructor(private el:ElementRef, private renderer: Renderer2) { 
    console.log(this.renderer )

  }


  ngOnInit() {
    console.log(this.tooltipText, this.position)
    if(this.position==='right') {
      this.renderer.addClass(this.div, 'position-right')
    }
    else if(this.position==='bottom') {
      this.renderer.addClass(this.div, 'position-bottom')
    }
    else if(this.position==='left') [
      this.renderer.addClass(this.div, 'position-left')
    ]
    else if(this.position==='top') [
      this.renderer.addClass(this.div, 'position-top')
    ]
    this.text = this.renderer.createText(this.tooltipText)
  }
}
