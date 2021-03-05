import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { FirstService } from "./first.service";

@Component({
    selector:"app-first-spec",
    templateUrl:"./first.component.html",
    styleUrls :['./first.component.scss']
})

export class FirstSpecComponent implements OnInit{
    bsValue:any="";
    enableDiv:boolean=false;
    color:any="green";
    name="charan"
    ngOnInit(){
        // this.getCountryNames();
        this.firstService.bs.subscribe(item=>{
            this.bsValue = item;
        })
        this.appService.bs.subscribe(item=>{
            this.enableDiv = false;
            this.enableDiv = true;
            console.log(item+"from first compoennt");
        })
    }
    constructor(private firstService:FirstService,private appService:AppService){}
    salarySlip:any;
    getData(){
        if(this.firstService.checkAuthentication()){    
           this.salarySlip= "Salary Slip"
        }else{
            this.salarySlip= "Not Authenticated";
        }
    }
    countryName:any='';
    getName:any='';
    abcd:any="";
    getCountryNames():any{
        this.abcd = "ia m filled";
     this.firstService.getCountryNames().subscribe((item)=>{
        this.countryName = item[0].name;
        console.log(item[0].name);
     })
    }
    sendName(e){
        console.log(e); 
        this.getName = e;
    }
}