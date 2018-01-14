import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{

  @Input('tweet') private body: string;
  @Input('isActive') private isActive: boolean;
  @Input('likesCount') private likesCount: number;

  constructor() { }

  getLikesCount() {
    return this.likesCount;
  }

  getActive() {
    return this.isActive;
  }

  onClick() {
    this.likesCount += (this.isActive ? -1: 1);
    this.isActive = !this.isActive;
  }


}
