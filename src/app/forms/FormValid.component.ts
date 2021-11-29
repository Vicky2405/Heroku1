import { Component } from '@angular/core';

@Component({
  selector: 'FValid',
  templateUrl: './formValid.component.html',
  //styleUrls: ['./forms.component.css']
})
export class FormValidComponent {

  changeN1(val:any)
  {
      console.log(val);
  }
  changeR1(val:any)
  {
      console.log(val);
  }

}
