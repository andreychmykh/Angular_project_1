import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  isOpen = false;
  @Input("title") title : string;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }
}
