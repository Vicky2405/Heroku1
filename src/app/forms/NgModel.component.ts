import { Component } from '@angular/core';

@Component({
  selector: 'ngmdl',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class NgModelComponent {

  changeName(val:any)
  {
      console.log(val.value);
  }
  changeRegno(val:any)
  {
      console.log(val.value);
  }

}
