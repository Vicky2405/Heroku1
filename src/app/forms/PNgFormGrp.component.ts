import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pgrpmodel',
  template: `
  <form #frm="ngForm" (ngSubmit)="onSubmit(frm)">
  Name::<input name="nm" ngModel>
  <br><br>
  Registration No.::<input name="rno" ngModel><br><br>
  <p *ngIf="det.invalid">Details is invalid</p>
  <div ngModelGroup="Det" #det="ngModelGroup">
  School Code::<input name="school" [ngModel]="Det.school" minlength="2" required>
  <br><br>
  Addmission Year::<input name="addy" [ngModel]="Det.addy" minlength="2" required>
  <br><br>
  Section::<input name="Section" [ngModel]="Det.Section" minlength="2" required>
  <br><br>
  Group::<input name="group" [ngModel]="Det.group" minlength="1" required>
  <br><br>
  Roll No.::<input name="rono" [ngModel]="Det.rono" minlength="2" required>
  </div>
  <br>
  <button>Submit</button>
  </form>
  `
})
export class PNgModelGrpComponent {

  Det={school:'RD',addy:'19',Section:'01',group:'B',rono:'77'};
  onSubmit(frm:NgForm)
  {
      console.log(frm.value);
      console.log(frm.valid);
  }
  

}
