import { HttpClientModule } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {delay} from 'rxjs/operators';
import { of } from "rxjs";
import { AppService } from "../app.service";
import { AppHighLightDirective } from "../custom-directives/highlight-directive";
import { SecondSpecComponent } from "../second/second.component";
import { FirstSpecComponent } from "./first.component"
import { FirstService } from "./first.service";

describe("Describe is used to create group of specs in angular given by jasmine framework",()=>{
    let component:FirstSpecComponent;
    let fixture:ComponentFixture<FirstSpecComponent>;
    let fixture2:ComponentFixture<SecondSpecComponent>;
    let component2:SecondSpecComponent;
    let firstService:FirstService;
    let h1:HTMLElement;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[FirstSpecComponent,AppHighLightDirective,SecondSpecComponent],
            providers:[FirstService,AppService],
            imports:[HttpClientModule]
        }).compileComponents
    })
    beforeEach(()=>{
        fixture = TestBed.createComponent(FirstSpecComponent);
        fixture2= TestBed.createComponent(SecondSpecComponent)
        component = fixture.componentInstance;
        firstService = TestBed.get(FirstService);
        h1=fixture.nativeElement.querySelector('h1');
        component2 = fixture2.componentInstance;
    })
    it("first test",()=>{
        let ab="Salary Slip";
        spyOn(firstService,"checkAuthentication").and.returnValue(true);
        component.getData();
        fixture.detectChanges();
        // expect(salSlip).toEqual(ab);
        expect(firstService.checkAuthentication).toHaveBeenCalled();
        expect(h1.innerText).toBe(ab);
    })
    // it("subscribing to the observable",()=>{
    //     spyOn(firstService.bs,'subscribe')
    //     component.ngOnInit();
    //     fixture.detectChanges();
    //     let abs= component.bsValue;        
    //     expect(abs).toBe(123)
    //     expect(component.ngOnInit()).toHaveBeenCalled()
    // })
    it("get country name",()=>{
        // component.ngOnInit();      
        // fixture.detectChanges();
        firstService.getCountryNames().subscribe(value=>{
            expect(value[0].name).toBe('Argentina')
        })
        // let a=component.countryName;
        // expect(a).toEqual('Argentina')
    })
    it("lkjhg",()=>{
        expect(firstService).toBeTruthy();
        expect(component).toBeTruthy();
        component.ngOnInit();
        let id1=fixture.debugElement.query(By.css('#id1'));
        id1.triggerEventHandler("mouseout",{});
        //expect(a.nativeElement.textContent).toBe('dirty');
        fixture.detectChanges();
        // let a= fixture.debugElement.query(By.css("#countryId")).nativeElement.style.backgroundColor;
        // expect(a.nativeElement.textContent).toContain('dirty');
        // expect(a).toBe('red');
    })
    it("input and output",async(()=>{
        let de2=fixture2.debugElement.query(By.css('#btnAddClick'));
        de2.triggerEventHandler('click',{})
        // component2.addClick();
        fixture2.detectChanges();
        // expect(fixture2.debugElement.nativeElement.querySelector('.h5class').innerText).toBe('Send Charan 1');
        // expect(component.getName).toBe('Send Charan 1');  
        expect(component.name).toBe('charan');
    }));
    it("checking for abcd value to be 'ia m filled' after clicking of getCountry()",async(()=>{
        let a=fixture.debugElement.query(By.css("#id1"));
        a.triggerEventHandler("click",{});
        fixture.detectChanges();
        expect(component.abcd).toBe('ia m filled');
    }))
    it("check for the service is exeuctuing or not",fakeAsync(()=>{
        let a= fixture.debugElement.injector.get(FirstService);
        let stub= spyOn(firstService,"getCountryNames").and.callFake(()=>{
            return of([{name:''}]);
        })  
        component.getCountryNames();
        fixture.detectChanges();
        // tick(300)
        expect(component.countryName).toEqual('');
    }))
})