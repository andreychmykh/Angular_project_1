import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  styles: [
    `
    .glyphicon {
      color: green;
    }
    `
  ]
})
export class CourseComponent implements OnInit {

  ngOnInit() {
  }
  title = "Courses";

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.25,
    releaseDate: new Date(2016, 3, 1)
  }

  imageUrl = "http://lorempixel.com/400/199"; //image

  colSpanTop = 1;
  colSpanBottom = 2; //attribute binding example (no DOM)

  courses; //service-based variables 

  isActive = true;//style-binding

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  } //use of a service

  getTitle() {
    return this.title;
  }

  onClick($event) {//event object only necessary if you need the information from it
    console.log("Button was clicked");
    this.isActive = !this.isActive;
  }

  onDivClicked() { //event bubbling ( see next function )
    console.log("Div was clicked");
  }
  onSave($event) { //example of $event in use
    $event.stopPropagation();

    console.log("Button was clicked", $event);
  }

  onKeyUpTwo(email) { //example of filtering (you don't need the $event.keyCode === 13)
    console.log(email);
  }


  emailVal = "me@example.com"

  onKeyUp() {
    console.log(this.emailVal)
  }

  textP = "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."

  @Input('is-favorite') isFavorite: boolean;//example of aliasing


  getIcon() {
    return (this.isFavorite ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty");
  }

  onClickThree() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue : this.isFavorite });
  }

  

  @Output('change') click = new EventEmitter();

  movieTitle = "";


}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}