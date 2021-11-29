import { Component, EventEmitter, Output } from '@angular/core';

@Component({
selector: 'strp',
template: `
<br><br>
User id : <input #name (keyUp.enter)="showName(name.value)" type="text" id="exampleInputEmail1" placeholder="Enter email">
{{key}}<br>
Password : <input type="password" id="exampleInputPassword1" placeholder="Password"><br>
<button class="btn btn-primary" (click)="valueChange()">Log in</button>
{{Count}} time<br>
`
})
export class BtStrapComponent {
    Count=0;
    key="";
    @Output() obj=new EventEmitter();
    valueChange(){
    this.Count=this.Count+1;
    this.obj.emit(this.Count);
    console.log(this.Count);
    //console.log(this.valueChange());
    }
    showName(sc1: any){
    this.key=sc1;
    this.obj.emit(this.Count);
    console.log(this.key);
    }
}