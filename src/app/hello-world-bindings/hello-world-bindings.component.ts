import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
  styleUrls: ['./hello-world-bindings.component.css']
})
export class HelloWorldBindingsComponent {

  fontColor = 'green';
  sayHelloId = 1;
  canClick = true;
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  }
}
