import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class FirstService{
    base_url="https://jsonplaceholder.typicode.com/";
    constructor(private http:HttpClient){}
    bs=new BehaviorSubject(123);
    authenticate(){
        localStorage.setItem("item1","value1")
    }
    checkAuthentication(){
        return (localStorage.getItem("item1")=="value1");
    }    
    getCountryNames():any{
        return this.http.get("https://restcountries.eu/rest/v2/lang/es");
    }
}