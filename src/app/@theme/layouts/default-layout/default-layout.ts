import { Component } from '@angular/core';
import { Default_Items } from './menu';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.html',
  styleUrls: ['./default-layout.scss']
})
export class DefaultLayout{
  menu = Default_Items;
}
