import { Component } from '@angular/core';

@Component({
  selector: 'spec',
  templateUrl: './Specific.component.html',
  //styleUrls: ['./forms.component.css']
})
export class SpecificComponent {

  changeN1(val:any)
  {
      console.log(val);
  }
  changeR1(val:any)
  {
      console.log(val);
  }

}
