import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './course/course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title:"Title",
    isFavorite: true
  }

  tweet = {
    body: 'Tweet body...',
    isLiked: false,
    likesCount: 23
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs) {
    console.log("Favorite changed, now: ", eventArgs);
  }

  courses;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  coursesEmpty() {
    return this.courses.length === 0;
  }

  viewMode = 'other';

  onAdd() {
    this.courses.push({id: 4, name: "course4"});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  canSave = false;

  onSave() {
    this.canSave = !this.canSave;
  }

  task = {
    title: 'Review applications',
    assignee: {name: "John Smith"},
    assigner: null
  }
}
