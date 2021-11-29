import { Component } from '@angular/core';

@Component({
  selector: 'Pval',
  templateUrl: './PValidation.component.html',
  //styleUrls: ['./forms.component.css']
})
export class PValidComponent {

  changeV(val:any)
  {
      console.log(val);
  }
  

}
