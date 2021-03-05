import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector : "app-second-spec",
    templateUrl: './second.component.html'
})

export class SecondSpecComponent implements OnInit{
    ngOnInit(){
        this.execute();
        this.ecc();
        this.getArray()
    }
    constructor(){

    }
    checkNgClass:boolean=false;
    @Input('name') name;
    @Output() sendName = new EventEmitter();
    countClicks:any=0;
    addClick(){
        this.checkNgClass=true
        this.countClicks= this.countClicks+1;
        this.sendName.emit('Send Charan'+' '+this.countClicks);
    }
    removeClick(){
        this.countClicks= this.countClicks-1
    }
    a=[1,2,3,4,5,6,7,8,9,0];
    displayEvenNumbers:any=[];
    ecc(){
        this.a.forEach((element,index) => {
            console.log(element+":"+index);     
        });
        this.a.filter((item,index)=>{
            
            if(item%2 == 0){
                console.log(item+"is even number"+"from Index"+index);
                this.displayEvenNumbers.push(`${item} is even number and it having index value ${index}`);
            }
            else{
                console.log(item+"is odd number");   
            }
        });
    }
    str2:any="i am from loop";

    execute(){
        for(var x of this.str2){
            console.log(x);
        }
    }
    array:any=["charan",2,'bhagirathi ganga','manikarnika',['innerArray1','innerindex2','innerindex3','innerindex4']];
    ab:any;
    b:any;
    c:any;
    d:any;
    copyArray:any=[];
    latestArray:any=[];
    splicedArray:any=[];
    subStringString:any="please extract me from substring";
    getArray():any{
        [this.a,this.b,this.c,this.d] = [...this.array]
        console.log(this.d);        
        this.copyArray = this.array.slice(0);
        console.log(`--------------------<br>`);
        console.log(this.copyArray)    
        this.copyArray.push('added Array');
        console.log('we pushed added array into copyArray:-The copyArray is below');
        console.log(this.copyArray);
        console.log('arrray is below');
        console.log(this.array)
        console.log(`now let us push some data into inner Array of array as 'pushedInner1'`);
        this.copyArray[4].push('pushedInner1');
        console.log(`we pushed 'pushedInner1' into innerArray of copyArray:-The copyArray is below`);
        console.log(this.copyArray);
        console.log('arrray is below');
        console.log(this.array);
        console.log(`now u can observe we have pushed 'pushedinner1' to innerArray at index4 to the copyArray.but array also got that pushed.`);
        console.log(`to overcome this we need to first convert into string and then to `);
        this.latestArray = JSON.parse(JSON.stringify(this.array));        
        console.log(this.latestArray);
        this.latestArray[4].push('latest array pushed');
        console.log(`we pushed 'latest array pushed' into innerArray of latestArray at index 4:-The latestArray is below`);
        console.log(this.latestArray);
        console.log('arrray is below');
        console.log(this.array);
        console.log(`we are using splice method to splice(0,3)`);
        this.splicedArray= this.array.splice(0,3)
        console.log(`spliced array is:-`);        
        console.log(this.splicedArray);
        console.log(`array is`);
        console.log(this.array);
        console.log(`we are extracting the substring:this.subStringString.substring(0,8)`);
        console.log(`subStringString:any="please extract me from substring";`);
        console.log(this.subStringString.substring(0,8));
        
    }
}