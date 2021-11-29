import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'grpmodel',
  template: `
  <form #frm="ngForm" (ngSubmit)="onSubmit(frm)">
  <p *ngIf="addr.invalid">Address is invalid</p>
  <div ngModelGroup="Addrs" #addr="ngModelGroup">
  City::<input name="city" [ngModel]="Addrs.City" minlength="2">
  <br><br>
  State::<input name="State" [ngModel]="Addrs.State" required>
  </div>
  <br>
  Email::<input name="email" ngModel>
  <button>Submit</button>
  </form>
  `
})
export class NgModelGrpComponent {

  Addrs={City:'Delhi', State:'Delhi'};
  onSubmit(frm:NgForm)
  {
      console.log(frm.value);
      console.log(frm.valid);
  }
  

}
