import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Directive({
    selector : '[AppHighLight]'
})

export class AppHighLightDirective implements OnInit{

    @Input('color') color;
    constructor(private el:ElementRef,private appService:AppService){
        console.log(this.color);
        
    }
    ngOnInit(){
        console.log(this.color);
        
    }

    @HostListener('mouseenter') mouseenter(){
        this.color='red'
            this.el.nativeElement.style.backgroundColor = this.color;
            this.appService.bs.next("red");
    }
    @HostListener('mouseout') mouseout(){
        this.color = 'green';
        this.el.nativeElement.style.backgroundColor = this.color;
        this.el.nativeElement.innerHTML = "charanaa"
        this.el.nativeElement.style.color = 'yellow';
        this.appService.bs.next("green");
    }    
}