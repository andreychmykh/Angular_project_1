import { FollowerService } from './services/follower.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';

import { PostService } from './services/post.service';
import { CoursesService } from './courses.service';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFormatDirective } from './input-format.directive';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormComponent } from './form/form.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { HmwkFormComponent } from './hmwk-form/hmwk-form.component';
import { PostsComponent } from './posts/posts.component';

import { SummaryPipe } from './summary.pipe';
import { MoviePipe } from './movie.pipe';
import { FollowersComponent } from './followers/followers.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    MoviePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    FormComponent,
    FormAssignmentComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    HmwkFormComponent,
    PostsComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService, 
    PostService,
    FollowerService, 
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
