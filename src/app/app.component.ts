import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content: string = 'A new world is waiting for you!';
  image: string = 'http://cdn1-www.dogtime.com/assets/uploads/gallery/bulldog-dog-breed-pictures/6-face.jpg';
}
