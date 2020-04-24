import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { DirectiveExampleOneComponent } from './directive-example-one/directive-example-one.component';
import { DirectiveExampleTwoComponent } from './directive-example-two/directive-example-two.component';
import { NgforChangeDetectionComponent } from './ngfor-change-detection/ngfor-change-detection.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';




@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    DirectiveExampleOneComponent,
    DirectiveExampleTwoComponent,
    NgforChangeDetectionComponent,
    InputFormatDirective,
    ContactFormComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    PostsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
