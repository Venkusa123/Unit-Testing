import { componentFactoryName } from "@angular/compiler";
import { Component, DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { SecondSpecComponent } from "./second.component"

@Component({
    template:`<app-second-spec [name]="'charan'"></app-second-spec>`
})
export class TestComponent{
}

@Component({
    template:`<app-second-spec [name]="'saiii'"></app-second-spec>`
})
export class SsssComponent{}

describe("Second Spec describe function started",()=>{
    let secondComponent:SecondSpecComponent;
    let testComponent:TestComponent;
    let ssscomponent:SsssComponent;
    let fixture3:ComponentFixture<SsssComponent>
    let fixture2:ComponentFixture<TestComponent>;
    let fixture:ComponentFixture<SecondSpecComponent>;
    let de:DebugElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations : [SecondSpecComponent,TestComponent,SsssComponent]
        }).compileComponents
    }))   
    beforeEach(()=>{
        fixture = TestBed.createComponent(SecondSpecComponent);
        fixture3=TestBed.createComponent(SsssComponent);
        ssscomponent=fixture3.componentInstance;
        secondComponent = fixture.componentInstance;
        fixture2 = TestBed.createComponent(TestComponent);
        testComponent = fixture2.componentInstance;
        fixture.detectChanges();
        fixture2.detectChanges();
        fixture3.detectChanges();
    });
    it("clicks happened to add and remove",()=>{
        spyOn(secondComponent,'addClick');
        const h2 = fixture.debugElement.query(By.css('h2'));
        const btn = fixture.debugElement.query(By.css('#btnAddClick'));
        btn.triggerEventHandler('click',{});
        fixture.detectChanges();
        expect(secondComponent.countClicks).toEqual(parseInt(h2.nativeElement.innerText));
        expect(secondComponent.addClick).toHaveBeenCalled;
        // const getData =secondComponent.addClick();
        // expect(secondComponent.countClicks).toBe(2)
    });
    it('1st approach input and output',()=>{
        secondComponent.name = 'sree rama';
        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement.querySelector('.h5class').innerText).toBe('sree rama')
    })
    it("input check from second compoent",()=>{
        fixture2.detectChanges();
        let k=fixture2.debugElement.nativeElement.query(By.css('h3'));
        expect(parseInt(k.nativeElement.innerText)).toBe('saii');
    })
})