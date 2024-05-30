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
    console.warn(this.message + " from " + this.title + ", print log always hit as long as called by template event bindings");
    console.error(this.message + " from " + this.title);
    console.trace(this.message + " from " + this.title);
    return this.message;
  }
}
