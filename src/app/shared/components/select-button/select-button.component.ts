import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
  standalone: false,
})
export class SelectButtonComponent  implements OnInit {
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() chosed: string = '';
  @Input() control = new FormControl();

  constructor() { }

  ngOnInit() {}

}
