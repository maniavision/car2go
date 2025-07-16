import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor = '#e3f2fd';
  private originalBg?: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onEnter() {
    this.originalBg = this.el.nativeElement.style.backgroundColor;
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.highlightColor
    );
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.originalBg
    );
  }
}
