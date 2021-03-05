import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstSpecComponent } from "./first/first.component";

export const routes:Routes=[
    {
        path:'first',
        component:FirstSpecComponent
    }]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}