import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';
import { FollowerService } from '../services/follower.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[];


  constructor(private service: FollowerService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

  createFollower(input: HTMLInputElement) {
    let follower = { title: input.value };
    this.followers.splice(0, 0, follower);

    input.value = '';

    this.service.create(follower)
      .subscribe(
      newFollower => {
        follower['id'] = newFollower.id;
        
      },
      (error: AppError) => {
        this.followers.splice(0, 1);

        if (error instanceof BadRequestError)
          alert('Bad request')
        //this.form.setErrors(error.originalError);
        else throw error;
      });
  }

  updateFollower(follower) {
    this.service.update(follower)
      .subscribe(
      updatedFollower => {
        console.log(updatedFollower)
      })
    //this.http.put(this.url, JSON.stringify(follower));
  }

  deleteFollower(follower) {
    let index = this.followers.indexOf(follower);
    this.followers.splice(index, 1);

    this.service.delete(follower.id)
      .subscribe(
      null,
      (error: AppError) => {
        this.followers.splice(index, 0, follower)

        if (error instanceof NotFoundError)
          alert('this follower has already been deleted');
        else throw error;
      })
  }
}
