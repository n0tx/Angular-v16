import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-app';
  message = 'Hello, World';

  sayHello() {
    console.warn(this.message);
    console.error(this.message);
    console.trace(this.message);
    return this.message;
  }
}
