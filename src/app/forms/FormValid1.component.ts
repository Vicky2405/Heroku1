import { Component } from '@angular/core';

@Component({
selector: 'formValid',
templateUrl: './FormValid1.component.html',
//styleUrls: ['./my-form.component.css']
})
export class FrValidComponent{
changeV1(val: any)
{
console.log(val);
}
}