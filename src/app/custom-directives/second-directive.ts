import { Component, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector :'[second-directive]'
})

export class SecondDirective{
    @HostListener('mouseenter') mouseEnter12(){
        this.el.nativeElement.style.color = 'orange'
    }
    @HostListener('mouseout') mouseOut123(){
        this.el.nativeElement.style.color = "yellow"
    }
    constructor(private el:ElementRef){}
    ngOnInit(){
        // this.mouseEnter12()
    }
}