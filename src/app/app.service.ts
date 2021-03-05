import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class AppService{
    constructor(){}

    bs= new BehaviorSubject("green");
}